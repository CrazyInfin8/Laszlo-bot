
CREATE TABLE Players (
	id INTEGER PRIMARY KEY,
  name TINYTEXT,
  poke FLOAT NOT NULL DEFAULT 0,
  await TEXT,
  type TEXT
);

INSERT INTO Players (id, name) VALUES (12, 'fred');
select * FROM Players;

ALTER TABLE Players ADD COLUMN color TEXT NOT NULL DEFAULT 'RED';
SELECT * FROM Players;

UPDATE Players SET await = 'name' WHERE id = 12;
SELECT * FROM Players;

UPDATE Players SET await = NULL WHERE id = 12;
SELECT * FROM Players;

UPDATE Players SET poke = poke + 200 WHERE id = 12;
SELECT * FROM Players;

UPDATE Players SET poke = poke + 200 WHERE id = 12;
SELECT * FROM Players;

SELECT * from nonexistent;

DROP TABLE subscriptions;
DROP TABLE customers;
DROP TABLE orders;