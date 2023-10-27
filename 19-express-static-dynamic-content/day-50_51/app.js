const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/confirm', (req, res) => {
  res.render('confirm');
});

app.get('/recommend', (req, res) => {
  res.render('recommend');
});

app.post('/recommend', (req, res) => {
  const restaurant = req.body;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  // plain text needs to be converted | Reading stored restaurants
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  // Saving sotred restaurants
  storedRestaurants.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect('/confirm');
});

app.get('/restaurants', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  // plain text needs to be converted | Reading stored restaurants
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render('restaurants', { restaurants: storedRestaurants });
});

app.listen(3000);
