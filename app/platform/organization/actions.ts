"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type SaveOrganizationInput = {
  name: string;
  legalName?: string;
  dba?: string;
  organizationType: string;
  primaryContact: string;
  email: string;
  phone?: string;
  website?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  accreditations: string[];
};

export type SaveOrganizationResult = {
  success: boolean;
  organizationId?: string;
  error?: string;
};

function optionalValue(value?: string) {
  const cleanedValue = value?.trim();
  return cleanedValue ? cleanedValue : null;
}

export async function saveOrganization(
  input: SaveOrganizationInput,
): Promise<SaveOrganizationResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        error: "You must be signed in to create an organization.",
      };
    }

    const name = input.name.trim();
    const organizationType = input.organizationType.trim();
    const primaryContact = input.primaryContact.trim();
    const email = input.email.trim().toLowerCase();

    if (!name) {
      return {
        success: false,
        error: "Organization name is required.",
      };
    }

    if (!organizationType) {
      return {
        success: false,
        error: "Organization type is required.",
      };
    }

    if (!primaryContact) {
      return {
        success: false,
        error: "Primary contact is required.",
      };
    }

    if (!email) {
      return {
        success: false,
        error: "Email address is required.",
      };
    }

    const organizationData = {
      name,
      legalName: optionalValue(input.legalName),
      dba: optionalValue(input.dba),
      organizationType,
      primaryContact,
      email,
      phone: optionalValue(input.phone),
      website: optionalValue(input.website),
      addressLine1: optionalValue(input.addressLine1),
      addressLine2: optionalValue(input.addressLine2),
      city: optionalValue(input.city),
      state: optionalValue(input.state)?.toUpperCase() ?? null,
      postalCode: optionalValue(input.postalCode),
      accreditations: input.accreditations,
    };

    const organization = await prisma.organization.upsert({
      where: {
        ownerClerkUserId: userId,
      },
      update: organizationData,
      create: {
        ...organizationData,
        ownerClerkUserId: userId,
      },
    });

    revalidatePath("/platform");
    revalidatePath("/platform/organization");

    return {
      success: true,
      organizationId: organization.id,
    };
  } catch (error) {
    console.error("Unable to save organization:", error);

    return {
      success: false,
      error: "The organization could not be saved. Please try again.",
    };
  }
}