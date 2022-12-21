import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BaseComponent from "bootstrap/js/dist/base-component";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React,{ useContext } from "react";

const TypeBar = observer( () => {
    const {item} = useContext(Context)
    
    return (
        <ListGroup>
            {item.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === item.setSelectedType.id}
                    onClick={() => item.setSelectedType(type)}
                    key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
        </ListGroup>
    )
});

export default TypeBar;