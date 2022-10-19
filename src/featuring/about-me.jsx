import {Button, Col, Container, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import MeImg from './me.png'

function AboutMeSection() {
    return (
        <Container>
            <Row className={'align-items-center'}>
                <Col md={8} >
                    <Row>
                        <Col>
                            <h1> Hi, I am Eduard, a Software Engineer </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='mt-5'></div>
                            <Button>
                                Email Me
                            </Button>
                        </Col>
                    </Row>

                </Col>
                <Col md={4}><Image src={MeImg} rounded fluid/></Col>
            </Row>
        </Container>
    );
}

export default AboutMeSection;