CREATE EXTENSION postgis;

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

-- CreateTable
CREATE TABLE "refrigerator" (
    "id" SERIAL NOT NULL,
    "account_id" SERIAL NOT NULL,
    "energy" REAL,
    "co2" REAL,
    "model_name" VARCHAR(50),

    CONSTRAINT "refrigerator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_mail_key" ON "account"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "account_nickname_key" ON "account"("nickname");

-- CreateIndex
CREATE INDEX "location_idx" ON "account" USING GIST ("location");

-- CreateIndex
CREATE INDEX "mail_idx" ON "account"("mail");

-- AddForeignKey
ALTER TABLE "refrigerator" ADD CONSTRAINT "refrigerator_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

