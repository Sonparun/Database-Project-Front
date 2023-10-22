const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');



const base_url = 'http://localhost:3000';


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/public'));

app.get('/Animals', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/Animal');
        res.render('Animals', { Animals: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/Animal/:ID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/Animal/' + req.params.ID);
        res.render('Animal', { Animal: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createAnimal", (req, res) => {
    res.render('createAnimal');
});

app.post("/createAnimal", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.post(base_url + '/Animal', data);
        res.redirect("/Animals"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateAnimal/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/Animal/' + req.params.ID);
            res.render('updateAnimal', { Animal: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateAnimal/:ID", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.put(base_url + '/Animal/' + req.params.ID, data);
        res.redirect("/Animals");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteAnimal/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/Animal/' + req.params.ID);
            res.redirect("/Animals");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});







app.get('/Habitats', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/Habitat');
        res.render('Habitats', { Habitats: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/Habitat/:ID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/Habitat/' + req.params.ID);
        res.render('Habitat', { Habitat: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createHabitat", (req, res) => {
    res.render('createHabitat');
});

app.post("/createHabitat", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.post(base_url + '/Habitat', data);
        res.redirect("/Habitats"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateHabitat/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/Habitat/' + req.params.ID);
            res.render('updateHabitat', { Habitat: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateHabitat/:ID", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.put(base_url + '/Habitat/' + req.params.ID, data);
        res.redirect("/Habitats");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteHabitat/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/Habitat/' + req.params.ID);
            res.redirect("/Habitats");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});









app.get('/', async (req, res) => {
    try{
        const response1 = await axios.get(base_url + '/HabitatOfAnimal');
        const response2 = await axios.get(base_url + '/Animal');
        const response3 = await axios.get(base_url + '/Habitat');
        res.render('HabitatOfAnimals', { 
            HabitatOfAnimals: response1.data,
            Animal: response2.data,
            Habitat: response3.data
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/HabitatOfAnimal/:AnimalID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/HabitatOfAnimal/' + req.params.AnimalID);
        res.render('HabitatOfAnimal', { HabitatOfAnimal: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createHabitatOfAnimal", (req, res) => {
    res.render('createHabitatOfAnimal');
});

app.post("/createHabitatOfAnimal", async (req, res) => {
    try {
        const data = { AnimalID: req.body.AnimalID, HabitatID: req.body.HabitatID };
        await axios.post(base_url + '/HabitatOfAnimal', data);
        res.redirect("/"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateHabitatOfAnimal/:AnimalID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/HabitatOfAnimal/' + req.params.AnimalID);
            res.render('updateHabitatOfAnimal', { HabitatOfAnimal: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateHabitatOfAnimal/:AnimalID", async (req, res) => {
    try {
        const data = { AnimalID: req.body.AnimalID, HabitatID: req.body.HabitatID };
        await axios.put(base_url + '/HabitatOfAnimal/' + req.params.AnimalID, data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteHabitatOfAnimal/:AnimalID", async (req, res) => {
    try {
        await axios.delete(base_url + '/HabitatOfAnimal/' + req.params.AnimalID);
            res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});








app.listen(8080, () => {
    console.log('Listening on port 8080');
});