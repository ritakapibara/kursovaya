import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const ItemPage = () => {
    const item = {
    id: "123456",
    name:"Клетчатка сибирская Правильное Похудение 2.0 с пребиотиками",
    price:50,
    desc:"Плавное снижение и эффективное удержание оптимального веса с заботой о своём здоровье.",
    img:"images/img1.jpg",
    }

  return (
    <Container>
      <Row className="mt-2">
      <Col md ={4}>
      <Image width={300} height={300} src={item.img}/>
      </Col>
      <Col md ={4}>
        <Row className='d-flex'><div>{item.name}</div>
        <div>{item.price} TMT</div></Row>
        
      </Col>
      <Col md ={4}>
        <Button variant="outline-success" type="submit" size="lg">Add to basket</Button>
      </Col>
      </Row>
    </Container>
  );
};

export default ItemPage;