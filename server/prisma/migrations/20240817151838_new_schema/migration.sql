/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `House` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pricingInfoId]` on the table `House` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricingInfoId` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "House" ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "pricingInfoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Point" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "streetNumber" TEXT NOT NULL,
    "stateAcronym" TEXT NOT NULL,
    "pointId" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingInfo" (
    "id" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "yearlyIptu" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "monthlyCondoFee" DOUBLE PRECISION NOT NULL,
    "rentalInfoId" TEXT NOT NULL,

    CONSTRAINT "PricingInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentalInfo" (
    "id" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "warranties" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "monthlyRentalTotalPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "RentalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PricingInfo_rentalInfoId_key" ON "PricingInfo"("rentalInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "House_addressId_key" ON "House"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "House_pricingInfoId_key" ON "House"("pricingInfoId");

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_pricingInfoId_fkey" FOREIGN KEY ("pricingInfoId") REFERENCES "PricingInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "Point"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingInfo" ADD CONSTRAINT "PricingInfo_rentalInfoId_fkey" FOREIGN KEY ("rentalInfoId") REFERENCES "RentalInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
