--
-- PostgreSQL database dump
--

CREATE TABLE app_user (
"userId" serial NOT NULL,
"name" varchar NOT NULL,
"location" varchar NOT NULL,
"linkedin" varchar NOT NULL,
"email" varchar NOT NULL,
"job title" varchar,
CONSTRAINT "user_pk" PRIMARY KEY ("userId")
);

CREATE TABLE resume (
"resumeId" serial NOT NULL,
"userId" int NOT NULL,
CONSTRAINT "resume_pk" PRIMARY KEY ("resumeId")
);

CREATE TABLE component (
"componentId" serial NOT NULL,
"userId" int NOT NULL,
"header" varchar NOT NULL,
"bullets" varchar NOT NULL,
CONSTRAINT "component_pk" PRIMARY KEY ("componentId")
);

CREATE TABLE grid (
"gridId" serial NOT NULL,
"resumeId" serial NOT NULL,
"componentId" serial NOT NULL,
"x_coordinate" int NOT NULL DEFAULT 0,
"y_coordinate" int NOT NULL DEFAULT 0,
CONSTRAINT "grid_pk" PRIMARY KEY ("gridId")
);

ALTER TABLE resume ADD CONSTRAINT "fk_resume_user" FOREIGN KEY("userId") REFERENCES app_user("userId");
ALTER TABLE component ADD CONSTRAINT "fk_component_user" FOREIGN KEY("userId") REFERENCES app_user("userId");
ALTER TABLE grid ADD CONSTRAINT "fk_grid_resume" FOREIGN KEY("resumeId") REFERENCES resume("resumeId");
ALTER TABLE grid ADD CONSTRAINT "fk_grid_component" FOREIGN KEY("componentId") REFERENCES component("componentId");

INSERT INTO app_user VALUES (1, 'George', 'London', 'LinkedIn.com/george', 'george@gmail.com', 'CTO');
INSERT INTO app_user VALUES (2, 'Jerry', 'Paris', 'LinkedIn.com/jerry', 'jerry@gmail.com', 'CEO');

INSERT INTO resume VALUES (1, 1);
INSERT INTO resume VALUES (2, 2);

INSERT INTO component VALUES (1, 1, 'cool header', 'sweet bullets');
INSERT INTO component VALUES (2, 2, 'nice header', 'dope bullets');

INSERT INTO grid VALUES (1, 1, 1, 2, 3);
INSERT INTO grid VALUES (2, 2, 2, 4, 5);
