import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";


function Dashboard() {

    return (

        <div className='page vertically-center'>
            <div className="container">
                <div className='justify-content-center align-items-center'>
                    <Row>
                        <Col>

                            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Quality Assurance</Card.Title>
                                    <Link to="/qualityAssurance">
                                        Quality Assurance
                                    </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Track Stock</Card.Title>
                                    <Link to="/stocktrackmain">
                                        Track Stock
                                    </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Folklift Management</Card.Title>
                                    <Link to="/forkLift">
                                        Track Stock
                                    </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Product Distribution</Card.Title>
                                    <Link to="/productDistribution">
                                        Track Stock
                                    </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Vehicle Management</Card.Title>
                                    <Link to="/vehicleManagement">
                                        Track Stock
                                    </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>

                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Employee Tracking</Card.Title>
                                    <Link to="/employeeTracking">
                                        Track Stock
                                    </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <div className="container text-center mt-5">
                        <Link to="/login">
                            <Button>Navigate to Login</Button>
                        </Link>
                    </div>
                </div >
            </div>
        </div>

        // <div>
        //     <Navbar bg="light" expand="lg">
        //         <Container>
        //             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <Nav.Link href="#home">Home</Nav.Link>
        //                     <Nav.Link href="#link">Link</Nav.Link>
        //                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                         <NavDropdown.Divider />
        //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                     </NavDropdown>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>









    )

}


export default Dashboard