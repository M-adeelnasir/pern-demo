CREATE DATABASE yelp;
-- \c yelp
CREATE TABLE restuarents(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range>=1 and price_range<=5)
);


-- INSERT INTO restuarents (name,location,price_range) VALUES ("brunch","street 44",4)
