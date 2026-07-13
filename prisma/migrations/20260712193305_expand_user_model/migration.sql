-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessScope" TEXT NOT NULL DEFAULT 'All Facilities',
ADD COLUMN     "invitationStatus" TEXT NOT NULL DEFAULT 'Active',
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'Staff';
