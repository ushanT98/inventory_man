import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container, Navbar, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../Assets/img/logo.png';


function Welcome() {

    // AOS Animation Initialization
    useEffect(() => {
        AOS.init({
            duration : 1500
        });
        AOS.refresh();
    }, []);

    return (

        <section id="hero">
            <div className="hero-container">
                <a href="index.html" className="hero-logo" data-aos="zoom-in">
                    <img src={Logo} alt="" />
                </a>
                <h1 data-aos="zoom-in">Welcome To Warehouse Management System</h1>
                <h2 data-aos="fade-up">
                    Manage your warehouse with us!
                </h2>
                {/* <a
                    data-aos="fade-up"
                    data-aos-delay={200}
                    href="#about"
                    className="btn-get-started scrollto"
                >
                    <Link to="/login">
                        <Button>Navigate to Login</Button>
                    </Link>
                </a> */}
                <Link to="/login">
                    <Button data-aos="fade-up" data-aos-delay={200} className="btn-get-started scrollto">View Dashboard</Button>
                </Link>
            </div>
        </section>

    )


}


export default Welcome