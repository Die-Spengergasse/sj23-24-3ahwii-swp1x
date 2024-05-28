## Datenmodel Bank

Customer
- id
- name
- email
- accounts[]

Account
- id
- customer (AUTO)
- transaction

Transaction
- id
- date
- fromAcct
- toAcct
- amount
