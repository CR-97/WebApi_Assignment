import React, { Component } from 'react';
import {
  
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import {
  Fa,CardImage,Button
} from 'mdbreact';

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
    <Button className="btn-circle btn-xl float-left" id="btn-save"  onClick={handleSubmit}><Fa className="fa-lg" icon="plus"/></Button>
          <a href={props.item3.url} target="_blank" className="black-text d-flex justify-content-end" id="read-more"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
    </CardFooter>
    </Card>
    <br/>
  </Col>
  );
};

export default HomeItems3;


