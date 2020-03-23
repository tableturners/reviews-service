const mysql = require('mysql');
const faker = require('faker');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);
const randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
  }//generate data for reviews.
const numberOfRestuarants = 30;

const seedDatabase = () => {

    // generate 100 restuarantsda
    for (let i = 0; i < numberOfRestuarants; i++) {
        
        let query = `INSERT INTO restaurants (name) values("${faker.company.companyName()}")`
       
        connection.query(query);
    }

    // generate random numder of reviews for those 100 reataurants
    for (let i = 0; i < 1200; i++) {

        let query = `
INSERT INTO reviews (restaurant_id,username, place, dinedDate, postedReview, paragraph, overall, food, ambience, service, star)
values("${faker.random.number({ 'min': 1, 'max': numberOfRestuarants })}","${faker.internet.userName()}", "${faker.address.state()}","${randomDate(new Date(2018, 0, 1), new Date())}",
"${faker.random.number(200)}","${faker.hacker.phrase()}","${faker.random.number({ min: 1, max: 5 })}","${faker.random.number({ min: 1, max: 5 })}",
"${faker.random.number({ min: 1, max: 5 })}","${faker.random.number({ min: 1, max: 5 })}","${faker.random.number({ min: 1, max: 5 })}"
)`
connection.query(query);
    }
    console.log('seeded the database!')

}

seedDatabase();

module.exports = { seedDatabase };

