const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');


const base_url = 'http://node50178-sonparun-js.proen.app.ruk-com.cloud';


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/public'));

app.get('/Movies', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/Movie');
        res.render('Movies', { Movies: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/Movie/:ID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/Movie/' + req.params.ID);
        res.render('Movie', { Movie: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createMovie", (req, res) => {
    res.render('createMovie');
});

app.post("/createMovie", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.post(base_url + '/Movie', data);
        res.redirect("/Movies"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateMovie/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/Movie/' + req.params.ID);
            res.render('updateMovie', { Movie: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateMovie/:ID", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.put(base_url + '/Movie/' + req.params.ID, data);
        res.redirect("/Movies");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteMovie/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/Movie/' + req.params.ID);
            res.redirect("/Movies");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});







app.get('/Countrys', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/Country');
        res.render('Countrys', { Countrys: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/Country/:ID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/Country/' + req.params.ID);
        res.render('Country', { Country: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createCountry", (req, res) => {
    res.render('createCountry');
});

app.post("/createCountry", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.post(base_url + '/Country', data);
        res.redirect("/Countrys"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateCountry/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/Country/' + req.params.ID);
            res.render('updateCountry', { Country: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateCountry/:ID", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.put(base_url + '/Country/' + req.params.ID, data);
        res.redirect("/Countrys");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteCountry/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/Country/' + req.params.ID);
            res.redirect("/Countrys");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});









app.get('/', async (req, res) => {
    try{
        const response1 = await axios.get(base_url + '/MovieAndCountry');
        const response2 = await axios.get(base_url + '/Movie');
        const response3 = await axios.get(base_url + '/Country');
        res.render('MovieAndCountrys', { 
            MovieAndCountrys: response1.data,
            Movie: response2.data,
            Country: response3.data
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/MovieAndCountry/:ID", async (req, res) => {
    try {   
        const response = await axios.get(base_url + '/MovieAndCountry/' + req.params.ID);
        res.render('MovieAndCountry', { MovieAndCountry: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createMovieAndCountry", (req, res) => {
    res.render('createMovieAndCountry');
});

app.post("/createMovieAndCountry", async (req, res) => {
    try {
        const data = { MovieID: req.body.MovieID - 1, CountryID: req.body.CountryID - 1 };
        await axios.post(base_url + '/MovieAndCountry', data);
        res.redirect("/"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateMovieAndCountry/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/MovieAndCountry/' + req.params.ID);
            res.render('updateMovieAndCountry', { MovieAndCountry: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateMovieAndCountry/:ID", async (req, res) => {
    try {
        const data = { MovieID: req.body.MovieID -1 , CountryID: req.body.CountryID - 1 };
        await axios.put(base_url + '/MovieAndCountry/' + req.params.ID, data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteMovieAndCountry/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/MovieAndCountry/' + req.params.ID);
            res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});








app.listen(8080, () => {
    console.log('Listening on port 8080');
});