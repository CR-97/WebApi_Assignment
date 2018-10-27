import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

import {
  Fa,CardImage
} from 'mdbreact';

const SavedItems = props =>{

  function handleSubmit(){
    props.onClick({
      title: props.item.title,
    });
  }

  return(
  
    <Col sm="4">
      <Card>
          <CardImage top src={props.item.imageUrl} overlay="white-slight" hover waves alt="Card image cap"/>
        <CardBody>
          <CardTitle>{props.item.title}</CardTitle>
          <hr />
          <CardText>{props.item.desc}</CardText>
          <Fa icon="share-alt"></Fa><a href={props.item.url}  className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
        </CardBody>
      </Card>
    <br/>
  </Col>
  );
};

export default SavedItems;




{/* <Card id="size">
      <CardImg top width="100%" src={props.item.imageUrl} alt={props.item.title} />
    <CardBody>
      <CardTitle>{props.item.title}</CardTitle>
      <CardSubtitle id="subtitle">{props.item.desc}</CardSubtitle>
      <CardText>{props.item.content}</CardText>
    </CardBody>
    <CardFooter>
      <Button id="save_btn"onClick={handleSubmit}>Delete</Button>
      <Button id="read-btn" href={props.item.url} target="_blank">Read More</Button>
    </CardFooter>
    </Card> */}