
const express = require('express');

//express app
const app = express();



// listen for requests
app.listen(3000);

app.get('/', (req, res) =>{ // If the user types in the normal local host, it will take them to the home page
	res.sendFile('./homepage.html', {root: __dirname}); //this sends the html to the website
	//res.render('homepage');
});

app.get('/quiz', (req, res) => { //If user types in http://localhost3000/quiz, it will take them to the page with the quiz on it
	res.sendFile('./quiz.html', {root: __dirname}); //sending quiz/.html to the website
});

app.get('/result', (req, res) => { //If user types in http://localhost3000/result, it will take them to the page that would show their quiz results/all the majors
	res.sendFile('./result.html', {root: __dirname}); //sending result.html to the website
});

app.get('/majors', (req, res) => { //If user types in http://localhost3000/majors, it will take them to the page that would show major descriptions
	res.sendFile('./majors.html', {root: __dirname}); //sending majors.html to the website
});
