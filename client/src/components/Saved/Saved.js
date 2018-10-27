import Footer from '../footer';
import SavedContent from './SavedItems';
import React, { Component } from 'react';

import {
  Container, Row, Col
} from 'reactstrap';


const Saved = props =>{
  const saveditem = props.item;
  let res;

  if(saveditem.length>0){
    res = saveditem.map((res) => 
    <SavedContent item={res} onClick={props.onClick}/>
    );
  }

  

  return(
    <div>
      <Container>
        <h1>Saved Headlines</h1>
      </Container>
      <Container>
        <Row>
        {res}
        </Row>
      </Container>
    </div>
  );
};

export default Saved;