import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from '../utils/consts';

const DeviceItem = ({item}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} className = {"mt-3"} onClick ={() => navigate(ITEM_ROUTE +'/'+ item.id )}>
            
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
            <Image width={150} height={150} src={item.img}/>
            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
               <div>{item.name}</div> 
               <div>{item.price}TMT</div>
                </div>    
                <div></div>
            </Card>
        </Col>
    );
};

export default DeviceItem;