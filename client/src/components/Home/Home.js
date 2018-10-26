import Footer from '../footer';
import Content from './HomeItems';
import Content2 from './HomeItems2';
import Content3 from './HomeItems3';
import React, { Component } from 'react';

import axios from 'axios';
import './Home.css'

const Home = props =>{
  const news = props.item;
  let res;

  if(news.length>0){
    res = news.map((res) => <Content item={res} onClick={props.onClick}/>);
  }

  return(
    <div>
      {res}
    </div>
  );
};

export default Home;