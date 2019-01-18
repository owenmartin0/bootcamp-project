# Bootcamp Project API

## Set up

```bash
createdb bootcampproject
npm run copy-env
```

## Run

```bash
npm run start
```

## Make migration

```bash
npx knex migrate:make <MIGRATION_NAME>
```

## Walkthrough

### Stage 1

Create Knex tables and Objection.js models for users, posts, and hobbies. See below for the required fields:

All fields

- id
- createdAt
- updatedAt

Users:

- name
- email
- password
- birthday
- concentration
- hometown
- house
- gender
- bio
- picture (in URL form)

Posts:

- content
- userId

Hobbies:

- hobby (one of 'SPORTS', 'ARTS', 'MUSIC', 'READING', 'TRAVEL', 'DINING', 'CODING')
- userId

You should go about doing this in the following manner. If you need help with syntax, reference the lecture code.

1.  Make the tables using Knex migrations
    - run `npx knex migrate:make <MIGRATION_NAME>` to make a migration file
    - find the new file in the `/db/migrations/` directory
    - in that migration, fill in the information needed for that table. Look at the lecture code as an example
2.  Make the Objection.js models for users, posts, and hobbies in the `/src/models/` directory.
    - A skeleton of the `User` model is already provided.
    - Here, implement methods which get the table name corresponding to the Knex tables made in Step 1
    - Determine the proper relations between different models and make another method to add the relation
    - HINT: For the following relation, you'll need a different type of relation than the other two, and this relation might (it will!) require creating a new 'join table' through knex.

