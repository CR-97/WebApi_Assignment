import React, { Component } from 'react';
import {
  
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const HomeItems3 = props =>{

  function handleSubmit(){
    props.onClick({
      title: props.item3.title,
      url: props.item3.url,
      image: props.item3.urlToImage,
      desc: props.item3.description
    });
  }

  return(
    <Col sm="4">
    <Card id="size">
      <CardImg top width="100%" src={props.item3.urlToImage} alt={props.item3.title} />
    <CardBody>
      <CardTitle>{props.item3.title}</CardTitle>
      <CardSubtitle id="subtitle">{props.item3.description}</CardSubtitle>
      <CardText>{props.item3.content}</CardText>
    </CardBody>
    <CardFooter>
      <Button id="save_btn"onClick={handleSubmit}>Save</Button>
      <Button id="read-btn" href={props.item3.url} target="_blank">Read More</Button>
    </CardFooter>
    </Card>
    <br/>
  </Col>
  );
};

export default HomeItems3;


