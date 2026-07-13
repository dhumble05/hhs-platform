import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EvidenceForm from "@/components/evidence/EvidenceForm";

export default async function AddEvidencePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
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
    redirect("/platform");
  }

  const facilities = await prisma.facility.findMany({
    where: {
      organizationId,
    },
    orderBy: {
      name: "asc",
    },
    select: {
      id: true,
      name: true,
    },
  });

  return <EvidenceForm facilities={facilities} />;
}
