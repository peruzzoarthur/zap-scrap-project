-- AlterTable
ALTER TABLE "Point" ALTER COLUMN "lat" DROP NOT NULL,
ALTER COLUMN "lon" DROP NOT NULL,
ALTER COLUMN "source" DROP NOT NULL;
