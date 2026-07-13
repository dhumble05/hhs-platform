"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type SaveStandardInput = {
	accreditor: string;
	code: string;
	title: string;
	chapter?: string;
	description?: string;
	requirement?: string;
	version?: string;
	effectiveDate?: string;
	category?: string;
	riskLevel?: string;
	status: string;
	sourceUrl?: string;
};

export type SaveStandardResult = {
	success: boolean;
	standardId?: string;
	error?: string;
};

function optionalValue(value?: string) {
	const cleaned = value?.trim();
	return cleaned ? cleaned : null;
}

export async function saveStandard(
	input: SaveStandardInput,
): Promise<SaveStandardResult> {
	try {
		const { userId } = await auth();

		if (!userId) {
			return {
				success: false,
				error: "You must be signed in to add a standard.",
			};
		}

		const databaseUser = await prisma.user.findUnique({
			where: {
				id: userId,
			},
			select: {
				organizationId: true,
			},
		});

		const ownedOrganization = await prisma.organization.findUnique({
			where: {
				ownerClerkUserId: userId,
			},
			select: {
				id: true,
			},
		});

		const organizationId =
			databaseUser?.organizationId ?? ownedOrganization?.id;

		if (!organizationId) {
			return {
				success: false,
				error: "Organization not found.",
			};
		}

		const accreditor = input.accreditor.trim();
		const code = input.code.trim();
		const title = input.title.trim();

		if (!accreditor) {
			return {
				success: false,
				error: "Accreditor is required.",
			};
		}

		if (!code) {
			return {
				success: false,
				error: "Standard code is required.",
			};
		}

		if (!title) {
			return {
				success: false,
				error: "Standard title is required.",
			};
		}

		const standard = await prisma.standard.create({
			data: {
				accreditor,
				code,
				title,
				chapter: optionalValue(input.chapter),
				description: optionalValue(input.description),
				requirement: optionalValue(input.requirement),
				version: optionalValue(input.version),
				effectiveDate: input.effectiveDate
					? new Date(`${input.effectiveDate}T12:00:00`)
					: null,
				category: optionalValue(input.category),
				riskLevel: optionalValue(input.riskLevel),
				status: input.status || "Active",
				sourceUrl: optionalValue(input.sourceUrl),
				isCustom: true,
				organization: {
					connect: {
						id: organizationId,
					},
				},
			},
		});

		revalidatePath("/platform");
		revalidatePath("/platform/standards");

		return {
			success: true,
			standardId: standard.id,
		};
	} catch (error) {
		console.error("SAVE STANDARD ERROR", error);

		return {
			success: false,
			error:
				error instanceof Error
					? error.message
					: "The standard could not be saved.",
		};
	}
}
