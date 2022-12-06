
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Auth = () => {
  return (
    <Container className = "d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}>
    <Card style={{width: 600}} className="p-5">
        <h2>Авторизация</h2>
        <Form className="d-flex flex-column">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email адрес</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Создать аккаунт
      </Button>
        </Form>
    </Card>  
    </Container>
  );
};

export default Auth;
