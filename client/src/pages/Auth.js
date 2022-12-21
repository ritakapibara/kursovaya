import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE 
  console.log(location)
  
  return (
    <Container className = "d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}>
    <Card style={{width: 600}} className="p-5">
        <h2>{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email адрес</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <Row className="d-flex justify-content-between mb-3 pl-3 pr-3">
      {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
           <Button variant="outline-success" type="submit" className="mt-3">
           {isLogin ? 'Войти' : 'Регистрация'}
      </Button>
           
           </Row>
        </Form>
    </Card>  
    </Container>
  );
};

export default Auth;
