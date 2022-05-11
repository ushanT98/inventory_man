import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Navbar, Row, Col, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewEmployeeLogin() {

    return (

        <div className='page vertically-center'>
            <div className="container">
                <div className='background-overlay d-flex justify-content-center align-items-center'>

                    {/* -------------- Login Form START -------------- */}

                    <Form className='rounded p-4 p-sm-4 login-form'>
                        <h1 className='font-weight-bold text-center pb-4 login-form-header'>
                            Manager
                        </h1>

                        <Form.Group className="mb-3" controlId="formEID">
                            <Form.Label>Manager ID</Form.Label>
                            <Form.Control type="name" placeholder="Enter Employee ID" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>

                        <Button type="submit" className='btn-lg btn-dark login-btn'>
                            Login
                        </Button>
                    </Form>

                    {/* -------------- Login Form END -------------- */}

                </div>

                <div className="container text-center mt-5">
                    <Link to="/">
                        <Button>Navigate to Welcome</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button>Navigate to Dashboard</Button>
                    </Link>
                </div>

            </div>
        </div>

    )

}


export default NewEmployeeLogin