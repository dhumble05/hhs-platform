"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type MapEvidenceResult = {
	success: boolean;
	error?: string;
};

async function getOrganizationId(userId: string) {
	const databaseUser = await prisma.user.findUnique({
		where: {
			id: userId,
		},
		select: {
			organizationId: true,
		},
	});

	if (databaseUser?.organizationId) {
		return databaseUser.organizationId;
	}

	const ownedOrganization = await prisma.organization.findUnique({
		where: {
			ownerClerkUserId: userId,
		},
		select: {
			id: true,
		},
	});

	return ownedOrganization?.id ?? null;
}

export async function mapEvidenceToStandards(
	evidenceId: string,
	standardIds: string[],
): Promise<MapEvidenceResult> {
	try {
		const { userId } = await auth();

		if (!userId) {
			return {
				success: false,
				error: "You must be signed in to map evidence.",
			};
		}

		const organizationId = await getOrganizationId(userId);

		if (!organizationId) {
			return {
				success: false,
				error: "Organization not found.",
			};
		}

		const evidence = await prisma.evidence.findFirst({
			where: {
				id: evidenceId,
				organizationId,
			},
			select: {
				id: true,
			},
		});

		if (!evidence) {
			return {
				success: false,
				error: "Evidence record not found.",
			};
		}

		const uniqueStandardIds = Array.from(new Set(standardIds));

		if (uniqueStandardIds.length > 0) {
			const validStandards = await prisma.standard.findMany({
				where: {
					id: {
						in: uniqueStandardIds,
					},
					OR: [
						{
							organizationId: null,
						},
						{
							organizationId,
						},
					],
				},
				select: {
					id: true,
				},
			});

			if (validStandards.length !== uniqueStandardIds.length) {
				return {
					success: false,
					error: "One or more selected standards are invalid.",
				};
			}
		}

		await prisma.$transaction(async (transaction) => {
			await transaction.evidenceStandard.deleteMany({
				where: {
					evidenceId,
				},
			});

			if (uniqueStandardIds.length > 0) {
				await transaction.evidenceStandard.createMany({
					data: uniqueStandardIds.map((standardId) => ({
						evidenceId,
						standardId,
						mappingSource: "Manual",
						isVerified: true,
						verifiedBy: userId,
						verifiedAt: new Date(),
					})),
				});
			}
		});

		revalidatePath("/platform");
		revalidatePath("/platform/evidence");
		revalidatePath(`/platform/evidence/${evidenceId}`);
		revalidatePath("/platform/standards");

		return {
			success: true,
		};
	} catch (error) {
		console.error("MAP EVIDENCE ERROR", error);

		return {
			success: false,
			error:
				error instanceof Error
					? error.message
					: "The evidence mappings could not be saved.",
		};
	}
}
