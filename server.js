const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/config-key').mongoKey;
const route = require('./routes/route');
const axios =require('axios');
const cors = require('cors');

const app = express();
const router = express.Router();
const Data = require('./data');
const Comp = require('./schema');

//Body-Parser
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('./routes/route', route);

//Connect to mongoose db
mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>{
  console.log('Connected to database...');
})
.catch((error)=>{
  console.log(error);
});

app.get('/get', (req,res)=>{
  Data.find()
  .then(data => {
    console.log(data);
    res.send(data)
    res.status(200).json(data);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

app.post('/get', (req, res) => {
  
  console.log(req.body.title);
  const array =[{
    name :req.body.title,
    value: req.body.url
  }];
  Data.insertMany(array)
  .then(res =>{
    console.log(res);
    res.send(res);
    res.status(200).json(res);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

app.get('/getComp',(req,res)=>{
  Comp.find()
  .then(comp=>{
    console.log(comp);
    res.send(comp);
    res.status(200).json(comp);
  })
  .catch(err=>{
    res.status(404).json(err);
  })
})

//News Api Get
const apiKey = '8a331e64c829479b91bbb3c54b0b4d9f';
const url = `https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=${apiKey}`;
const url2 = `https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=${apiKey}`;
const url3 = `https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=${apiKey}`;

app.get('/getNews1', (req, res) => {
  axios.get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/getNews2', (req, res) => {
  axios.get(url2)
    .then((response) => {
      res.send(response.data.articles);
    })
    .catch((error) => {
      console.log(error);
    })
});

app.get('/getNews3', (req, res) => {
  axios.get(url3)
    .then((response) => {
      res.send(response.data.articles);
    })
    .catch((error) => {
      console.log(error);
    })
});
//End of News Api Get

//FootBall Api Get
const comp = 'http://api.football-data.org/v2/competitions?plan=TIER_ONE';
const token = 'c73d1cb1e85c4d39b6e710c54b4a5266';
app.get('/getCompetitions', (req, res) => {
  axios.get(comp,{
    headers:{
      'X-Auth-Token':token
    }
  })
  .then((response) => {
      res.send(response.data);
  })
  .catch((error) => {
      console.log(error);
  })
});

app.listen(5000, ()=>{
  console.log('Server started on port 5000');
});