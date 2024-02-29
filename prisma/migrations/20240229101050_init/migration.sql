CREATE EXTENSION postgis

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "mail" VARCHAR(100),
    "pw" VARCHAR(32),
    "nickname" VARCHAR(32),
    "longitude" DOUBLE PRECISION,
    "latitude" DOUBLE PRECISION,
    "location" geometry,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refrigerator" (
    "id" SERIAL NOT NULL,
    "account_id" SERIAL NOT NULL,
    "energy" REAL,
    "co2" REAL,
    "model_name" VARCHAR(50),

    CONSTRAINT "Refrigerator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_mail_key" ON "Account"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "Account_nickname_key" ON "Account"("nickname");

-- CreateIndex
CREATE INDEX "location_idx" ON "Account" USING GIST ("location");

-- CreateIndex
CREATE INDEX "mail_idx" ON "Account"("mail");

-- AddForeignKey
ALTER TABLE "Refrigerator" ADD CONSTRAINT "Refrigerator_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
