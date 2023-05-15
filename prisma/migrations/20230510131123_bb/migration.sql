-- CreateTable
CREATE TABLE "RawTruck" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "axes" DOUBLE PRECISION NOT NULL,
    "stipulatedAverageConsumption" DOUBLE PRECISION NOT NULL,
    "valuePerKmReceived" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RawTruck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawDriver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "truckId" TEXT NOT NULL,

    CONSTRAINT "RawDriver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawConsumptionExpenses" (
    "id" TEXT NOT NULL,
    "spentLiters" DOUBLE PRECISION NOT NULL,
    "kmDriven" DOUBLE PRECISION NOT NULL,
    "averageConsumption" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "truckId" TEXT NOT NULL,

    CONSTRAINT "RawConsumptionExpenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawRevenueAndProfit" (
    "id" TEXT NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL,
    "spent" DOUBLE PRECISION NOT NULL,
    "expendableCost" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "wastedProfit" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "truckId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,

    CONSTRAINT "RawRevenueAndProfit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawMaintenance" (
    "id" TEXT NOT NULL,
    "amountSpent" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "truckId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,

    CONSTRAINT "RawMaintenance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RawTruck_id_key" ON "RawTruck"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RawDriver_id_key" ON "RawDriver"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RawConsumptionExpenses_id_key" ON "RawConsumptionExpenses"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RawRevenueAndProfit_id_key" ON "RawRevenueAndProfit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "RawMaintenance_id_key" ON "RawMaintenance"("id");

-- AddForeignKey
ALTER TABLE "RawDriver" ADD CONSTRAINT "RawDriver_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "RawTruck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawConsumptionExpenses" ADD CONSTRAINT "RawConsumptionExpenses_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "RawTruck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawRevenueAndProfit" ADD CONSTRAINT "RawRevenueAndProfit_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "RawTruck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawRevenueAndProfit" ADD CONSTRAINT "RawRevenueAndProfit_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "RawDriver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawMaintenance" ADD CONSTRAINT "RawMaintenance_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "RawTruck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawMaintenance" ADD CONSTRAINT "RawMaintenance_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "RawDriver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
