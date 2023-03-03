
CREATE TABLE user (
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
CONSTRAINT "fk_resume_user" 
    FOREIGN KEY("userId")
        REFERENCES user("userId")
);

CREATE TABLE component (
"componentId" serial NOT NULL,
"header" varchar NOT NULL,
"bullets" varchar NOT NULL,
CONSTRAINT "fk_component_user" 
    FOREIGN KEY("userId")
        REFERENCES user("userId"),
CONSTRAINT "component_pk" PRIMARY KEY ("componentId")
);

CREATE TABLE grid (
"gridId" serial NOT NULL,
"x_coordinate" int NOT NULL DEFAULT 0,
"y_coordinate" int NOT NULL DEFAULT 0,
CONSTRAINT "grid_pk" PRIMARY KEY ("gridId")
CONSTRAINT "fk_grid_resume" 
    FOREIGN KEY("resumeId")
        REFERENCES user("resumeId"),
CONSTRAINT "fk_grid_component" 
    FOREIGN KEY("componentId")
        REFERENCES user("componentId")
);