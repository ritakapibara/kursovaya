import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./PerItem";

const DeviceList = observer(() => {
    const {item} = useContext(Context)
    return (
        <Row className="d-flex">
        {item.items.map(item =>
            <DeviceItem key={item.id} item={item}/>
        )}
        
    </Row>
    );
});

export default DeviceList;