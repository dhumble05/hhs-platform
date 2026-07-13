import { prisma } from "../lib/prisma";

const sampleStandards = [
  {
    accreditor: "CMS",
    chapter: "Infection Control",
    code: "CMS-IC-001",
    title: "Infection Control Program",
    description:
      "The organization maintains an active infection prevention and control program.",
    requirement:
      "Maintain an active infection prevention and control program.",
    category: "Infection Prevention",
    riskLevel: "High",
    status: "Active",
  },
  {
    accreditor: "Joint Commission",
    chapter: "Infection Prevention and Control",
    code: "IC.02.01.01",
    title: "Implement the Infection Prevention Program",
    description:
      "The organization implements its infection prevention and control activities.",
    requirement:
      "Implement infection prevention and control activities.",
    category: "Infection Prevention",
    riskLevel: "High",
    status: "Active",
  },
  {
    accreditor: "AAAHC",
    chapter: "Infection Prevention",
    code: "AAAHC-IP-001",
    title: "Infection Prevention Program",
    description:
      "The organization maintains a written infection prevention and control program.",
    requirement:
      "Maintain a written infection prevention and control program.",
    category: "Infection Prevention",
    riskLevel: "High",
    status: "Active",
  },
  {
    accreditor: "OSHA",
    chapter: "Bloodborne Pathogens",
    code: "1910.1030",
    title: "Bloodborne Pathogens Standard",
    description:
      "The organization protects employees from occupational exposure to bloodborne pathogens.",
    requirement:
      "Protect employees from occupational exposure to bloodborne pathogens.",
    category: "Employee Safety",
    riskLevel: "High",
    status: "Active",
  },
];

async function main() {
  for (const standard of sampleStandards) {
    const existingStandard = await prisma.standard.findFirst({
      where: {
        accreditor: standard.accreditor,
        code: standard.code,
        organizationId: null,
      },
    });

    if (existingStandard) {
      console.log(
        `Skipped existing standard: ${standard.accreditor} ${standard.code}`,
      );
      continue;
    }

    await prisma.standard.create({
      data: standard,
    });

    console.log(`Created standard: ${standard.accreditor} ${standard.code}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Standards seed completed.");
  })
  .catch(async (error) => {
    console.error("Standards seed failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
