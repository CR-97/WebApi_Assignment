import Footer from '../footer';
import Content from './HomeItems';
import Content2 from './HomeItems2';
import Content3 from './HomeItems3';
import React, { Component } from 'react';

import {
  Container, Row, Col
} from 'reactstrap';

import './Home.css'

const Home = props =>{
  const news = props.item;
  const report = props.item2;
  const item3 = props.item3;
  let res ,res2, res3;

  if(news.length>0){
    res = news.map((res) => 
    <Content item={res} onClick={props.onClick}/>
    );
  }

  if(report.length>0){
    res2 = report.map((res2) => 
    <Content2 item2={res2} onClick={props.onClick}/>
    );
  }

  if(item3.length>0){
    res3 = item3.map((res3) => 
    <Content3 item3={res3} onClick={props.onClick}/>
    );
  }

  return(
    <div>
       <Container>
        <h1>Top Headlines</h1>
      </Container>
      <Container>
        <Row>
        {res}{res2}{res3}
        </Row>
      </Container>
    </div>
  );
};

export default Home;