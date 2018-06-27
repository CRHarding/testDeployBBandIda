\c bbandida

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS contributor;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE contributor (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  role VARCHAR(255),
  link VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  contributors integer ARRAY,
  images VARCHAR(255) ARRAY,
  mainImage VARCHAR(255) ARRAY,
  price float default 0,
  number_sold integer default 0,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content VARCHAR(255),
  image VARCHAR(255) ARRAY,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);