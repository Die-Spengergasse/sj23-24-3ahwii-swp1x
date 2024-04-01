# 3ahwii plf4

## Musik-Streaming App

Folgende Objekte (Tables) soll es in der Datenbank geben:

-   Benutzer
-   -   id
-   -   Fullname
-   -   Email
-   -   Watchlist[]

-   Watchlist
-   -   id
-   -   name
-   -   createdAt
-   -   Track[]

-   Track
-   -   id
-   -   name
-   -   duration
-   -   genre
-   -   artist

### 1) Erstelle ein valides Prisma-Schema

Zu dem gegebenen Datenmodell

### 2) Seede die Datenbank mit generierten Daten!

Erster Schritt: Benutzer (10 Stück) und Songs (30 Stück) anlegen. (sind
unabhänging voneinander)

Zweiter Schritt: Watchlisten anlegen (etwa 2x soviele wie Benutzer) - hier
braucht man Benutzer, denen die Watchlist zugeordnet ist.

Dritter Schritt: Befüllen der Watchlisten (100 Songs).

Schritt 2 und 3 können zusammengelegt werden - siehe dazu in der Dokumentation
`prisma-client/queries/relation-queries#nested-writes`.

Verwende dazu die Bibliothek "faker":

-   fakerDE.music.genre
-   fakerDE.music.songName
-   fakerDE.internet.email
-   fakerDE.person.fullName()

### 3) Erstellen von 2 Abfragen `query.js`

-   Eine Abfrage, welche die Watchlist-Namen zu einem gegebenen User liefert.
-   Eine Abfrage, welche die Musikstücke aus einer Watchlist ausgibt.

### Hilfreiche Befehle, siehe dazu "package.json"

-   npx prisma validate
-   npx prisma studio
-   npx prisma db seed
-   npm run dev-seed
-   npm run dev
-   npm run

## Gutes Gelingen!

Bedingung für eine positive Note ist die Erledigung des ersten Schrittes der
"seed" Aufgabe.
