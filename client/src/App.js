import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

import AppNavBar from './components/navBar';
import AppFooter from './components/footer';

import Home from './components/Home/Home';
import Teams from './components/Teams';
// import About from './components/body';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      news:[]
    };
  }

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
    }

    handleSubmit(e){
      console.log(e);
      axios.post("http://localhost:5000/get", e);
    }


  render() {
    return (
      <Router>
        <div>
          <AppNavBar />
         
    <Route exact path="/" render={() =><Home item={this.state.news} onClick={this.handleSubmit}/>}/>
            {/* <Route path="/team" component={Teams} /> */}
        {/* <Route path="/news" component={News} /> */}
        <AppFooter/>
      </div>
    </Router>
    );
  }
}
export default App;