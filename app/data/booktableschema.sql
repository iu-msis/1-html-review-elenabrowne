CREATE DATABASE IF NOT EXISTS dbserver;
USE dbserver;

DROP TABLE IF EXISTS booktable;
CREATE TABLE booktable (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(24) UNIQUE NOT NULL,
    author varchar(48)
);

INSERT INTO booktable (id, title, author) VALUES 
(1, 'Game of Thrones', 'George R.R. Martin'),
(2, 'A Dance with Dragons', 'George R.R Martin'),
(3, 'Storm and Swords: A Song of Ice and Fire', 'George R.R. Martin'),
(4, 'A Clash of Kings', 'George R.R. Martin');

-- SELECT * FROM booktable;

DROP TABLE IF EXISTS booktable;
CREATE TABLE booktable (
	booktableId int PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(24) NOT NULL DEFAULT '',
    authorname VARCHAR(24) NOT NULL DEFAULT '',
    yearpublished int NOT NULL DEFAULT 0,
    publisher VARCHAR(24) NOT NULL DEFAULT '',
    pages int NOT NULL DEFAULT 0,
    MRP VARCHAR(24) NOT NULL DEFAULT ''
);

-- SELECT * FROM booktable;

INSERT INTO booktable(booktableId, title, authorname, yearpublished, publisher, pages, MRP) VALUES
  (1,'Game of Thrones', 'George R.R. Martin',1996,'Harper Collins', 694,'$15.99'),
  (2, 'A Dance with Dragons', 'George R.R. Martin',2011, 'Harper Collins', 1016, '$16.99'),
  (3, 'Storm and Swords: A Song of Ice and Fire', 'George R.R. Martin',2010, 'Harper Collins', 973,'$17.99'),
  (4, 'A Clash of Kings', 'George R.R. Martin',1998, 'Harper Collins',761, '$15.99')
;