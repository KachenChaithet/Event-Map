-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "building" TEXT NOT NULL,
    "activityDetail" TEXT NOT NULL,
    "locationDetail" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "location" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
