CREATE TABLE markers (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  lat FLOAT,
  lng FLOAT,
  label VARCHAR(64),
  description VARCHAR(1024)
);

