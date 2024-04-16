/*
  Warnings:

  - A unique constraint covering the columns `[name,benutzerId]` on the table `Watchlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_name_benutzerId_key" ON "Watchlist"("name", "benutzerId");
