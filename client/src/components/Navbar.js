import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import{Button} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'



const NavBar = observer(() => {
    const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{ color:'white'}} to ={SHOP_ROUTE}>Kletchatka store</NavLink>
            {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            className="ml-2"
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"} style={{marginLeft: 6}}>
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} >Авторизация</Button>
                    </Nav>
                }
        </Container>
      </Navbar>
   
  );
});

export default NavBar;
