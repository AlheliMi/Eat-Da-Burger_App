### Schema

/*    * Create the `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean. */


CREATE DATABASE burguers_db;
USE burguers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burguer_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

