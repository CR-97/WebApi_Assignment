import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

import AppNavBar from './components/NavBar';
import AppFooter from './components/footer';

import Home from './components/Home/Home';
import Match from './components/Matches/Matches';
import Saved from './components/Saved/Saved';
// import About from './components/body';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      news:[],
      news2:[],
      news3:[],
      matches:[],
      saved:[]
    };
  }
  /*----------API GET Call-----------------*/
  componentDidMount() {
    axios
    .get("http://localhost:5000/getNews1") 
      .then(response =>{
        this.setState({
          news:response.data.articles
        });
      })
      .catch(error => {
        alert(error);
      });

    axios
    .get("http://localhost:5000/getNews2") 
      .then(response =>{
        this.setState({
          news2:response.data.articles
        });
      })
      .catch(error => {
        alert(error);
      });

    axios
    .get("http://localhost:5000/getNews3") 
      .then(response =>{
        this.setState({
          news3:response.data.articles
        });
      })
      .catch(error => {
        alert(error);
      });

      axios
      .get("http://localhost:5000/getSaveNews") 
        .then(response =>{
          this.setState({
            saved:response.data
          });
        })
        .catch(error => {
          alert(error);
        });

        axios
      .get("http://localhost:5000/getMatches") 
        .then(response =>{
          this.setState({
            matches:response.data.matches
          });
        })
        .catch(error => {
          alert(error);
        });
      }
    /*----------End of API GET Call-------------*/


    handleSubmit(newsData){
      console.log(newsData);
      axios.post("http://localhost:5000/getSaveNews", newsData)
      .then(res =>{
        alert("Saved");
      })
      .catch(err =>{
        alert(err);
      });
    }

    handleDelete(title){
      console.log(title);
      axios.post("http://localhost:5000/getSaveNews/delete", title).catch(err=>{
        window.location.reload();
      })
    }


  render() {
    return (
      <Router>
        <div>
          <AppNavBar />
         
        <Route exact path="/" render={() =><Home item={this.state.news} item2={this.state.news2} item3={this.state.news3} onClick={this.handleSubmit}/>}/>
        
        <Route path="/matches" render={() =><Match item={this.state.matches}/>} />

        <Route path="/saved_items" render={() =><Saved item={this.state.saved} onClick={this.handleDelete}/>} />
        <AppFooter/>
      </div>
    </Router>
    );
  }
}
export default App;