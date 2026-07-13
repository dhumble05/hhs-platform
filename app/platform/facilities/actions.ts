"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type SaveFacilityInput = {
  name: string;
  facilityType: string;
  primaryAccreditor?: string;
  cmsCertificationNumber?: string;
  facilityAdministrator?: string;
  medicalDirector?: string;
  safetyOfficer?: string;
  timeZone?: string;
  facilityAddress?: string;
};

export type SaveFacilityResult = {
  success: boolean;
  facilityId?: string;
  error?: string;
};

function optionalValue(value?: string) {
  const cleanedValue = value?.trim();
  return cleanedValue ? cleanedValue : null;
}

export async function saveFacility(
  input: SaveFacilityInput,
): Promise<SaveFacilityResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        error: "You must be signed in to create a facility.",
      };
    }

    const organization = await prisma.organization.findUnique({
      where: {
        ownerClerkUserId: userId,
      },
      select: {
        id: true,
      },
    });

    if (!organization) {
      return {
        success: false,
        error: "Create your organization before adding a facility.",
      };
    }

    const name = input.name.trim();
    const facilityType = input.facilityType.trim();

    if (!name) {
      return {
        success: false,
        error: "Facility name is required.",
      };
    }

    if (!facilityType) {
      return {
        success: false,
        error: "Facility type is required.",
      };
    }

    const facility = await prisma.facility.create({
      data: {
        name,
        facilityType,
        primaryAccreditor: optionalValue(input.primaryAccreditor),
        cmsCertificationNumber: optionalValue(
          input.cmsCertificationNumber,
        ),
        facilityAdministrator: optionalValue(
          input.facilityAdministrator,
        ),
        medicalDirector: optionalValue(input.medicalDirector),
        safetyOfficer: optionalValue(input.safetyOfficer),
        timeZone: optionalValue(input.timeZone),
        facilityAddress: optionalValue(input.facilityAddress),
        organizationId: organization.id,
      },
    });

    revalidatePath("/platform");
    revalidatePath("/platform/facilities");

    return {
      success: true,
      facilityId: facility.id,
    };
  } catch (error) {
    console.error("Unable to save facility:", error);

    return {
      success: false,
      error: "The facility could not be saved. Please try again.",
    };
  }
}
