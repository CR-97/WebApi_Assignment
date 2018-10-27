import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import {
  Fa,CardImage,Button
} from 'mdbreact';


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
      <Button className="btn-circle btn-xl float-left" id="btn-save"  onClick={handleSubmit}><Fa className="fa-lg" icon="plus"/></Button>
          <a href={props.item.url} target="_blank" className="black-text d-flex justify-content-end" id="read-more"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
    </CardFooter>
    </Card>
    <br/>
  </Col>
  );
};

export default HomeItems;




