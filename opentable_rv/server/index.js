const express = require('express')
const app = express()
const port = 4500

const path = require('path');
const db = require('../db')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')))

// app.get('/api/reviewslist', (req, res) => {

// });

app.get('/api/reviewlist', (req, res) => {
    console.log('server: ', req.body);
    db.getReviewList((err, rows, fields) => {
        if (err) {
            console.log('error in GET server/index')
        } else {
            console.log('RESPONSE DB:', rows);
            res.send(rows);
        }
    })
});


const getRestaurantIdsAndInsertReviews = (req, res) => {
    db.getrestaurantId((restaurantIdarray) => {
        console.log("----------------",restaurantIdarray)
       //let randomId = restaurantIdarray[Math.floor(Math.random() * restaurantIdarray.length)];
        // TODO: select all restaurant IDs from mysql so we can pass 
        // a random restaurant ID into db.insertReview
        for (var i = 0; i < 30; i++) {
        let randomId = restaurantIdarray[Math.floor(Math.random() * restaurantIdarray.length)];
            db.insertReview(randomId,(err, rows, fields) => {
                if (err) {
                    console.log("err in post server!", err)
                }
               // console.log("+++++++", rows)
            })
        }
    
        res.redirect('/');

    })
    
}

app.post('/api/reviewlist', (req, res) => {
    for (var i = 0; i < 10; i++) //insert created data to db
    {
        db.insertRestaurant((err, rows, fields) => {
            if (err) {
                console.log("err in post server!", err)
            }
            // res.send();
        })
    }

    setTimeout(() => {
        getRestaurantIdsAndInsertReviews(req, res)
    }, 2000);
});


// app.post('/api/1', (req, res) => {
//     for (var i = 0; i < 50; i++) {
//         db.insertReview((err, rows, fields) => {
//             if (err) {
//                 console.log("err in post server!", err)
//             }
//         })
//     }
//     res.send()

// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))