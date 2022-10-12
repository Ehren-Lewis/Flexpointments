import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import barberImage from "../../assets/images/barberLanding.avif";

const About = () => {

    const imageTextStyle = {
        position: "absolute",
        top: "74%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
        color: "#9CB4FD",
        fontSize: "3.2rem",
    }


    return (
        <>
        <div className="wrapper">
        <img src={barberImage} alt="barber shop background" style={{height: "93vh", width: "100%", overflow: "hidden"}}/>
        <h1 className="text-center" style={imageTextStyle}>Helping Local Barbershops Empower Their People</h1>
        
        </div>

        <Container fluid>

        <Row>

        <Col>

        <h2 className="text-center mt-3"><u>Who Are We?</u></h2>

        </Col>

        </Row>

        <Row>

        <Col xs={12} lg={6} className="border d-flex justify-content-center">

        <p className="w-50">The people here at flexpointments are just like you. We all are human and we all need haircuts
            </p>
        </Col>

        <Col  lg={6} className="d-sm-none d-lg-block"></Col>

        </Row>

        <Row>

            <h2 className="text-center">What We Stand For</h2>
        </Row>

        <Row>

            <Col>

                <p>Flexpointments is here to make booking appointments easier for everyone. Flexpointments is used as the
                    medium between a business and it's customers to make eveything as smooth as possible.
                    </p>

            </Col>
        </Row>

        <Row>
            <h2 className="text-center"> How We Help Businesses</h2>
        </Row>

        <Row>
            <Col>
                <p>
                    We here at flexpointments allow business to partner with us to provide all the information
                    that your customers would ask for in person. We offer scheduling so that you can manage
                    what barber is there what day, as well as employee management available at all times.
                </p>
            </Col>
        </Row>

        <Row>
            <h2>How We Help The People</h2>
        </Row>

        <Row>
            <Col>
                <p>
                    Our goal is to make appointment scheudling as easy as possible. With our service, if a person cancels their appointment
                    that is closer to today than yours, you will be sent an email regarding a new slot that is open. Users can opt out of this
                    feature as well so they only have to worry about what they schedule!
                </p>
            </Col>
        </Row>

        </Container>

        </>
    )
}

export default About;