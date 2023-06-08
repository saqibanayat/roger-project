CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE;

CREATE TABLE users1(
  id SERIAL PRIMARY KEY,
  _id uuid DEFAULT uuid_generate_v4(),
  firstName TEXT,
  lastName TEXT,
  email TEXT NOT NULL UNIQUE,
  Password varchar NOT NULL,
  businessName TEXT NOT NULL,
  industry TEXT,
  province TEXT,
  email_varified_at TIMESTAMP NULL
);

CREATE TABLE "users_varify_token"(
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL,
  token TEXT NOT NULL
);

CREATE TABLE "compare_packages"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
   package_id int,
  FOREIGN KEY(package_id) REFERENCES packages(id)
);

CREATE TABLE "feature_packages"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
   package_id int,
  FOREIGN KEY(package_id) REFERENCES packages(id)
);

CREATE TABLE "user_forget_password_token"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
    token TEXT NOT NULL

);


CREATE TABLE "user_block_status"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
    status TEXT NOT NULL

);