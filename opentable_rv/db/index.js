const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');
const connection = mysql.createConnection(mysqlConfig);

const randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
  } //generate data for reviews.
  


const insertRestaurant = function (callback) { // insert Restaurant
    let query = `INSERT INTO restaurants (name) values("${faker.company.companyName()}")`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log('err in insertRestaurant', err)
        } else {
            callback(err, rows, fields)
        }
    })
}

const getrestaurantId = function (callback) { // get restaurantID
    let query = `select id From restaurants`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log('err in getrestaurantId', err)
        } else {
            //console.log('sssssss',rows)
            //console.log('lllllll',fields)
            const restaurandIds = rows.map((row) => {
                return row.id;
            });
            console.log(restaurandIds)
            callback(restaurandIds)
        }
    })
}



const getReviewList = function (callback) { //get reviewlist 
    let query = `SELECT * FROM reviews`
    
    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log('err in getReviewList', err)
        } else {
            callback(err, rows, fields)
        }
    })
}


// Review object has these keys: restaurant_id,username, place, dinedDate, postedReview, text, overall, food, ambience, service, star
const insertReview = function (randomId,callback) {
    let query = `
    INSERT INTO reviews (restaurant_id,username, place, dinedDate, postedReview, paragraph, overall, food, ambience, service, star)
    values("${randomId}","${faker.internet.userName()}", "${faker.address.state()}","${randomDate(new Date(2018, 0, 1), new Date())}",
    "${faker.random.number(200)}","${faker.hacker.phrase()}","${faker.random.number(5)}","${faker.random.number(5)}",
    "${faker.random.number(5)}","${faker.random.number(5)}","${faker.random.number(5)}"
    )`
    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log('err in insertReviews', err)
        } else {
            //console.log("aaaaaaaaa",query);
            callback(err, rows, fields)
        }
    })
}
    

// module.exports = {insertRestaurant,
//     insertReview}
module.exports = {
    getReviewList,
    insertReview,
    getrestaurantId,
    insertRestaurant
}

