import type { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PlatformShell from "@/components/platform/PlatformShell";
import { prisma } from "@/lib/prisma";

type PlatformLayoutProps = {
  children: ReactNode;
};

export default async function PlatformLayout({
  children,
}: PlatformLayoutProps) {
  await auth.protect();

  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const databaseUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      organization: {
        include: {
          _count: {
            select: {
              facilities: true,
              users: true,
            },
          },
        },
      },
    },
  });

  const organization = databaseUser?.organization
    ? {
        name: databaseUser.organization.name,
        facilityCount: databaseUser.organization._count.facilities,
        userCount: databaseUser.organization._count.users,
      }
    : null;

  return (
    <PlatformShell organization={organization}>
      {children}
    </PlatformShell>
  );
}
