import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typebar from "../components/Typebar"

import {observer} from "mobx-react-lite";

import DeviceList from '../components/ItemList';

const Shop = observer(() => {
  
  return (
      <Container>
          <Row className="mt-2">
              <Col md={3}>
                <Typebar/>
                
              </Col>
              <Col md={9}>
              <DeviceList/>
              </Col>
          </Row>
      </Container>
  );
});

export default Shop;