CREATE DATABASE yelp;
-- \c yelp
CREATE TABLE restuarents(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range>=1 and price_range<=5)
);


-- INSERT INTO restuarents (name,location,price_range) VALUES ("brunch","street 44",4)
-- add reviews

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restuarent_id bigint NOT NULL REFERENCES restuarents(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    ratings INT NOT NULL CHECK(ratings >=1 and ratings <=5)
);

