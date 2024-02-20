-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('admin', 'user', 'manager', 'recruiter');

-- CreateTable
CREATE TABLE "Employees" (
    "id" SERIAL NOT NULL,
    "employerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "RoleType" NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isManager" BOOLEAN NOT NULL DEFAULT false,
    "isRecruiter" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
