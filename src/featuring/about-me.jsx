import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import MeImg from './me.png'
import {GeoAltFill, Google, Linkedin, Mailbox, Phone, PhoneFill, PinMap, PinMapFill} from "react-bootstrap-icons";

function AboutMeSection() {
    return (
        <Container>
            <Row className={'align-items-center'}>
                <Col md={8}>
                    <Row>
                        <Col>
                            <GeoAltFill/> Leduc, Alberta, Canada
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1> Hi, I am Eduard, a Software Engineer </h1>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <div className='mt-5'></div>
                            <Button>
                                Email Me
                            </Button>
                        </Col>
                    </Row> */}

                </Col>
                <Col md={4}><Image src={MeImg} rounded fluid/></Col>
            </Row>
            <Row className='align-items-end'>
                <Col>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="https://www.linkedin.com/in/eduardbraun" target="_blank" ><Linkedin size={20}/> eduardbraun </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link disabled eventKey="link-1"><PhoneFill size={20}/> +491778778165</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link disabled eventKey="link-2"><Google size={20}/> eduardbraun913@gmail.com</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMeSection;