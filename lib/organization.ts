import { prisma } from "@/lib/prisma";

export type CreateOrganizationInput = {
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
  ownerClerkUserId: string;
};

export async function createOrganization(
  data: CreateOrganizationInput,
) {
  return prisma.organization.create({
    data,
  });
}
