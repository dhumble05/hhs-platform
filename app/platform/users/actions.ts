"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type SaveUserResult = {
  success: boolean;
  error?: string;
};

export async function createOwnerUser(): Promise<SaveUserResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        error: "Not signed in.",
      };
    }

    const clerkUser = await currentUser();

    if (!clerkUser) {
      return {
        success: false,
        error: "Unable to load Clerk user.",
      };
    }

    const organization = await prisma.organization.findUnique({
      where: {
        ownerClerkUserId: userId,
      },
    });

    if (!organization) {
      return {
        success: false,
        error: "Organization not found.",
      };
    }

  await prisma.user.upsert({
  where: {
    id: userId,
  },
  update: {
    organization: {
      connect: {
        id: organization.id,
      },
    },
    role: "Owner",
    accessScope: "All Facilities",
    invitationStatus: "Active",
  },
  create: {
    id: userId,
    email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
    firstName: clerkUser.firstName ?? null,
    lastName: clerkUser.lastName ?? null,
    role: "Owner",
    accessScope: "All Facilities",
    invitationStatus: "Active",
    organization: {
      connect: {
        id: organization.id,
      },
    },
  },
});

    revalidatePath("/platform");

    return {
      success: true,
    };
  } catch (error) {
    console.error("CREATE OWNER USER ERROR");
    console.error(error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : JSON.stringify(error),
    };
  }
}