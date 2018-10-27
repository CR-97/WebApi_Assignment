import MatchContent from './MatchesItems';
import React, { Component } from 'react';

import {
  Container, Row, Col
} from 'reactstrap';


const Matches = props =>{
  const match = props.item;
  let res;

  if(match.length>0){
    res = match.map((res) => 
    <MatchContent item={res}/>
    );
  }

  return(
    <div>
       <Container>
        <h1>Today Matches</h1>
      </Container>
      <Container>
        {res}
      </Container>
    </div>
  );
};

export default Matches;