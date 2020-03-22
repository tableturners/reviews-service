DROP DATABASE IF EXISTS capstone;

CREATE DATABASE capstone;

USE capstone;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE reviews(
  id int AUTO_INCREMENT,
  restaurant_id INT,
  username VARCHAR(50),
  place VARCHAR(200), 
  DinedDate TEXT,
  postedReview int,
  paragraph TEXT,
  overall INT,
  food INT,
  ambience INT,
  service INT,
  star INT,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- INSERT INTO reviews (id, Restaurant_id, username, location,DinedDate,postedReview,text,overall,food,ambience,service,star,) 
-- VALUES (1, , "EQUATOR", "2017-08-02",4);


-- insert into restaurants (name) VALUES("chaat concer");

-- INSERT INTO reviews (Restaurant_id,username, place, dinedDate, postedReview, text, overall, food, ambience, service, star)
--     values("2","alexcyh", "la downtown","monday","154","i love eatting butter chicken and naan","2","3","4","5","5");

