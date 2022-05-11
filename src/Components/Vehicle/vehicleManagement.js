import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Navbar, Row, Col, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function vehicleManagement() {

    return (


        <div className='page vertically-center'>
            <div className="container">
                <div className='background-overlay d-flex justify-content-center align-items-center'>

                    <div className="container text-center mt-5 dashboard-content">
                        <h1>Vehicle Management</h1>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>

                <div className="container text-center mt-5">
                    <Link to="/dashboard">
                        <Button>Navigate to Dashboard</Button>
                    </Link>
                </div>

            </div>
        </div>


    )

}


export default vehicleManagement