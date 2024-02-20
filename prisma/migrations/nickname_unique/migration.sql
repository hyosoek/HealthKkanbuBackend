CREATE EXTENSION IF NOT EXISTS postgis;
-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "mail" VARCHAR(100),
    "pw" VARCHAR(32),
    "nickname" VARCHAR(32),
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "location" geometry,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_mail_key" ON "account"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "account_nickname_key" ON "account"("nickname");

-- CreateIndex
CREATE INDEX "location_idx" ON "account" USING GIST ("location");

-- CreateIndex
CREATE INDEX "mail_idx" ON "account"("mail");

