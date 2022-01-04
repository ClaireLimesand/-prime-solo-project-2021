
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "friends" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" NOT NULL,
	"name" VARCHAR(40) NOT NULL
);

CREATE TABLE "events" (
	"event_id" SERIAL PRIMARY KEY,
	"freind_id" INT REFERENCES "friends" NOT NULL,
	"event_name" VARCHAR(40) NOT NULL,
	"event_date" date NOT NULL
);

-- DUMMY DATA: 

INSERT INTO "friends" ("user_id", "name") 
VALUES ('1', 'Ella');

INSERT INTO "events" ("freind_id", "event_name", "event_date") 
VALUES ('2', 'Birthday', '1995-09-15');

INSERT INTO "gifts" ("friend_id", "gift_id", "idea") 
VALUES ('2', '1', 'sculpting tools');

INSERT INTO "gifts" ("friend_id", "gift_id", "idea") 
VALUES ('2', '2', 'baggu');

INSERT INTO "events" ("freind_id", "event_name", "event_date") 
VALUES ('2', 'Graduation', '2022-5-26');