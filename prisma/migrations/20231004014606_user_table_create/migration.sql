-- CreateTable
CREATE TABLE "User" (
    "use_uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "role" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("use_uuid")
);
