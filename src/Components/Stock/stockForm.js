import React, { useState } from 'react';
import '../../App.css';
import { Table, Container, Navbar, Row, Col, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { async } from '@firebase/util';
import StockDataService from '../../Util/StockContext';

// https://www.youtube.com/watch?v=cXWDQhzC3do

function stockForm() {

    // States
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [status, setStatus] = useState("");

    // ---------------- Handling Form Submit START ----------------
    const handleSubmit =   async (e) => {

        e.preventDefault();  // prevents the page refreshing on submit

        const newStock = {
            name,
            description,
            quantity,
            category,
            brand,
            status
        };
        console.log(newStock);

        try {
            await StockDataService.addStocks(newStock);

        } catch (err) {
            console.log("There is an error")
        }


        // Emptying the form fields
        setName("");
        setDescription("");
        setQuantity("");
        setCategory("");
        setBrand("");
        setStatus("");

    };
    // ---------------- Handling Form Submit END ----------------




    return (

        <div className='page vertically-center'>
            <div className="container">
                <div className='background-overlay d-flex justify-content-center align-items-center pb-4'>
                    <div className="container text-center mt-5 dashboard-content">
                        <h1>Track Stock</h1>
                    </div>
                </div>

                {/* ---------- Stock Form START ---------- */}
                <Form onSubmit={handleSubmit} className='rounded p-4 p-sm-4 login-form'>
                    <h1 className='font-weight-bold text-center pb-4 login-form-header'>
                        Track Stock Form
                    </h1>

                    <Row>
                        <Col>
                            <Form.Group className="mb-4" controlId="formProductName">
                                <Form.Label>Product Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-4" controlId="formProductDesc">
                                <Form.Label>Description</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4" controlId="formProductQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="number"
                                        placeholder="Quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            {/* -------------- Category Dropdown START -------------- */}
                            <Form.Group className="mb-3" controlId="formProductCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    aria-label="Categories"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="Mobile Phones">Mobile Phones</option>
                                    <option value="Books">Books</option>
                                    <option value="Tools">Tools</option>
                                </Form.Select>
                            </Form.Group>
                            {/* -------------- Category Dropdown END -------------- */}
                        </Col>
                        <Col>
                            <Form.Group className="mb-4" controlId="formProductBrand">
                                <Form.Label>Brand</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Brand"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* -------------- Status Dropdown START -------------- */}
                            <Form.Group className="mb-3" controlId="formProductStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    aria-label="Status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                    <option value="Very Low">Very Low</option>
                                </Form.Select>
                            </Form.Group>
                            {/* -------------- Status Dropdown END -------------- */}
                        </Col>
                    </Row>

                    <div className="d-grid gap-2">
                        <Button variant="success" type="Submit" className="insert-btn">
                            Insert
                        </Button>
                    </div>

                </Form>
                {/* ---------- Stock Form START ---------- */}

                <div className="container text-center mt-5">
                    <Row>
                        <Col>
                            <Link to="/stockTag">
                                <Button variant="secondary">Navigate to Stock Level Page</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>

            </div>
        </div>

    )
}

export default stockForm