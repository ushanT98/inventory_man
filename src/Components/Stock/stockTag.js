import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Table, Container, Navbar, Row, Col, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import StockDataService from '../../Util/StockContext';
import React, { useState, useEffect } from 'react';
import StockList from './stockLevel';


function stockTag() {

    // State to grab the stock id
    const [stockId, setStockId] = useState("");

    const getStockIdHandler = (id) => {
        console.log("The id of doc to be edited: ", id);
        setStockId(id);
    }
    

    
    return (

        <div className='page vertically-center'>
            <Container>
                <Row>
                    <Col>
                        <StockList getStockId={getStockIdHandler} />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default stockTag