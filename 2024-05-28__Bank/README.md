## Datenmodel Bank

## Seed wie gehabt

## query:
- Alle Tabellen füllen
- Überprüfen ob Gesamtsumme 0 ist!

Bank
- id
- bic
- accounts[]

Customer
- id
- name
- email
- accounts[]

Account
- id
- iban
- customer[]
- transaction

Transaction
- id
- verwendungszweck
- date
- amount
- fromAcct
- toAcct
