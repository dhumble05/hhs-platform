-- CreateTable
CREATE TABLE "Standard" (
    "id" TEXT NOT NULL,
    "accreditor" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "chapter" TEXT,
    "description" TEXT,
    "requirement" TEXT,
    "version" TEXT,
    "effectiveDate" TIMESTAMP(3),
    "category" TEXT,
    "riskLevel" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "sourceUrl" TEXT,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "organizationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Standard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvidenceStandard" (
    "id" TEXT NOT NULL,
    "evidenceId" TEXT NOT NULL,
    "standardId" TEXT NOT NULL,
    "mappingSource" TEXT NOT NULL DEFAULT 'Manual',
    "confidence" DOUBLE PRECISION,
    "notes" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EvidenceStandard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Standard_organizationId_idx" ON "Standard"("organizationId");

-- CreateIndex
CREATE INDEX "Standard_accreditor_idx" ON "Standard"("accreditor");

-- CreateIndex
CREATE INDEX "Standard_code_idx" ON "Standard"("code");

-- CreateIndex
CREATE INDEX "Standard_category_idx" ON "Standard"("category");

-- CreateIndex
CREATE INDEX "Standard_status_idx" ON "Standard"("status");

-- CreateIndex
CREATE INDEX "EvidenceStandard_evidenceId_idx" ON "EvidenceStandard"("evidenceId");

-- CreateIndex
CREATE INDEX "EvidenceStandard_standardId_idx" ON "EvidenceStandard"("standardId");

-- CreateIndex
CREATE INDEX "EvidenceStandard_isVerified_idx" ON "EvidenceStandard"("isVerified");

-- CreateIndex
CREATE UNIQUE INDEX "EvidenceStandard_evidenceId_standardId_key" ON "EvidenceStandard"("evidenceId", "standardId");

-- AddForeignKey
ALTER TABLE "Standard" ADD CONSTRAINT "Standard_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvidenceStandard" ADD CONSTRAINT "EvidenceStandard_evidenceId_fkey" FOREIGN KEY ("evidenceId") REFERENCES "Evidence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvidenceStandard" ADD CONSTRAINT "EvidenceStandard_standardId_fkey" FOREIGN KEY ("standardId") REFERENCES "Standard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
