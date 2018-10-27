import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const HomeItems = props =>{

  function handleSubmit(){
    props.onClick({
      title: props.item.title,
      url: props.item.url,
      image: props.item.urlToImage,
      desc: props.item.description
    });
  }

  return(
    <Col sm="4">
    <Card id="size">
      <CardImg top width="100%" src={props.item.urlToImage} alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.item.title}</CardTitle>
      <CardSubtitle id="subtitle">{props.item.description}</CardSubtitle>
      <CardText>{props.item.content}</CardText>
    </CardBody>
    <CardFooter>
      <Button id="save_btn"onClick={handleSubmit}>Save</Button>
      <Button id="read-btn" href={props.item.url} target="_blank">Read More</Button>
    </CardFooter>
    </Card>
    <br/>
  </Col>
  );
};

export default HomeItems;




