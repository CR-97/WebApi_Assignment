import React, { Component } from 'react';
import {
  Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';


const HomeItems2 = props =>{

  function handleSubmit(){
    props.onClick({
      title: props.item2.title,
      url: props.item2.url,
      image: props.item2.urlToImage,
      desc: props.item2.description
    });
  }

  return(
    <Col sm="4">
    <Card id="size">
      <CardImg top width="100%" src={props.item2.urlToImage} alt={props.item2.title} />
    <CardBody>
      <CardTitle>{props.item2.title}</CardTitle>
      <CardSubtitle id="subtitle">{props.item2.description}</CardSubtitle>
      <CardText>{props.item2.content}</CardText>
    </CardBody>
    <CardFooter>
      <Button id="save_btn"onClick={handleSubmit}>Save</Button>
      <Button id="read-btn" href={props.item2.url} target="_blank">Read More</Button>
    </CardFooter>
    </Card>
    <br/>
  </Col>
  );
};

export default HomeItems2;



