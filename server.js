const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/config-key').mongoKey;

const axios =require('axios');
const cors = require('cors');

const app = express();
const router = express.Router();
const News = require('./schema/schema2');
const Comp = require('./schema/schema');

//Body-Parser + Cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Connect to mongoose db
mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>{
  console.log('Connected to database...');
})
.catch((error)=>{
  console.log(error);
});


/*----------- MongoDB Data Get -------------*/
app.get('/getComp',(req,res)=>{
  Comp.find()
  .then(comp=>{
    res.send(comp);
    res.status(200).json(comp);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

app.get('/getSaveNews', (req,res)=>{
  News.find()
  .then(data => {
    res.send(data)
    res.status(200).json(data);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

app.post('/getSaveNews', (req, res) => {
  const array =[{
    title:req.body.title,
    desc: req.body.desc,
    imageUrl: req.body.image,
    url: req.body.url,
  }];
  News.insertMany(array)
  .then(res =>{
    res.send(res);
    res.status(200).json(res);
  })
  .catch(err=>{
    res.status(404).json(err);
  });
})

app.post('/getSaveNews/delete', (req, res) => {
  console.log(req.body.title);
  const query = {
    title : req.body.title
  };
  News.deleteOne(query)
  .then(res=>{
    res.send(res);
    res.status(200).json(res);
  })
  .catch(err=>{
    res.status(400).json(err);
  });
})



/*----------- News Api Get -------------*/
const apiKey = '8a331e64c829479b91bbb3c54b0b4d9f';
const url = `https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=${apiKey}`;
const url2 = `https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=${apiKey}`;
const url3 = `https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=${apiKey}`;

app.get('/getNews1', (req, res) => {
  axios.get(url)
    .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    })
});

app.get('/getNews2', (req, res) => {
  axios.get(url2)
    .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    })
});

app.get('/getNews3', (req, res) => {
  axios.get(url3)
    .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
    })
});
//End of News Api Get

//FootBall Api Get
const matches
 = 'https://api.football-data.org/v2/matches';
const token = 'c73d1cb1e85c4d39b6e710c54b4a5266';
app.get('/getMatches', (req, res) => {
  axios.get(matches,{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
      res.send(response.data);
      res.status(200).json(response);
  })
  .catch((error) => {
      console.log(error);
      res.status(404).json(error);
  })
});

app.post('/getCompetition', (req, res) => {
  const id = req.body.id;
  console.log(id);
  const comp = `http://api.football-data.org/v2/competitions/2019/teams`;
  axios.get(comp,{
    headers: { 'X-Auth-Token': token }
  })
  .then((response) => {
      console.log(`http://api.football-data.org/v2/competitions/${id}/teams`);
      res.send(response.data);
      res.status(200).json(response);
  })
  .catch((error) => {
      console.log(error);
      res.status(404).json(error);
  })
});

app.get('/getC',(req,res) =>{
  const id = req.body.id;
  console.log(id);
})

app.listen(5000, ()=>{
  console.log('Server started on port 5000');
});