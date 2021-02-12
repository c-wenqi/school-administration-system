## Node Version Used
v15.2.1

## Assumptions Made
1. Only the student email of a row can be updated, else a new entry will be created
  (Reason : No unique identifier or an id is given at the request.body to check for the record in the database)
2. For User Story 1, request.body is taken to be raw text before processing it

##Note
1. Database dump from docker can be found in school-administration-system >> javascript >> database >> DDL.sql
2. Sequelize models can be found in school-administration-system >> javascript >> src >> models
