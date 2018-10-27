import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const MatchesItems = props =>{

  // function handleSubmit(){
  //   props.onClick({
  //     title: props.item.title,
  //   });
  // }

  return(
    <Col sm="4">
    <Card id="size">
      <CardImg top width="100%" src={props.item.imageUrl} alt={props.item.title} />
    <CardBody>
      <CardTitle>{props.item.title}</CardTitle>
      <CardSubtitle id="subtitle">{props.item.desc}</CardSubtitle>
      <CardText>{props.item.content}</CardText>
    </CardBody>
    <CardFooter>
      <Button id="save_btn">Delete</Button>
      <Button id="read-btn" href={props.item.url} target="_blank">Read More</Button>
    </CardFooter>
    </Card>
    <br/>
  </Col>
  );
};

export default MatchesItems;




