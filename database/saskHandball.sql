DROP DATABASE IF EXISTS pets_db; 
CREATE DATABASE pets_db; 
 
CREATE TABLE payments( 
    ID SERIAL PRIMARY KEY,  
	league references leagues(league),
); 

CREATE TABLE league	(
	ID SERIAL PRIMARY KEY,  
	name VARCHAR(256) NOT NULL, 
	unique (name)
);

CREATE TABLE team (
	ID SERIAL PRIMARY KEY,
	name VARCHAR(256) NOT NULL, 
)