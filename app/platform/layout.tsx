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

  const [databaseUser, operationalTopics] = await Promise.all([
    prisma.user.findUnique({
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
    }),
    prisma.operationalTopic.findMany({
      select: {
        code: true,
        slug: true,
        name: true,
        domain: true,
        displayOrder: true,
        icon: true,
        color: true,
      },
      orderBy: [
        {
          domain: "asc",
        },
        {
          displayOrder: "asc",
        },
        {
          name: "asc",
        },
      ],
    }),
  ]);

  const organization = databaseUser?.organization
    ? {
        name: databaseUser.organization.name,
        facilityCount: databaseUser.organization._count.facilities,
        userCount: databaseUser.organization._count.users,
      }
    : null;

  const platformOperationalTopics = operationalTopics.map((topic) => ({
    code: topic.code,
    slug: topic.slug,
    name: topic.name,
    domain: topic.domain ?? "Other Programs",
    displayOrder: topic.displayOrder,
    icon: topic.icon,
    color: topic.color,
  }));

  return (
    <PlatformShell
      organization={organization}
      operationalTopics={platformOperationalTopics}
    >
      {children}
    </PlatformShell>
  );
}