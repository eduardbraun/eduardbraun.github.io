import {Col, Container, Row} from "react-bootstrap";
import React from "react";

function EducationItem(props) {

    return (<div>

        <Row>
            <Col md={8}>
                <p className='text-start fs-5 m-0 p-0'>{props.school}</p>
                <p className='text-start fs-6 m-0 p-0'>{props.degree}</p>
            </Col>
            <Col md={4}>
                <p className='text-end fs-5 m-0 p-0'>{props.location}</p>
                <p className='text-end fs-6 m-0 p-0'>{props.duration}</p>
            </Col>
        </Row>

    </div>);
}

function Education() {

    const brandon = <EducationItem school='Brandon University' location='Brandon, MB, Canada' degree='HON. B.S. IN COMPUTER SCIENCE AND MATHEMATICS' duration='Sep. 2012 - Apr. 2017'/>;
    const gvc = <EducationItem school='Garden Valley Collegiate' location='Winkler, MB, Canada' degree='High-school Diploma' duration='Sep. 2008 - Apr. 2012'/>;

    return (
        <Container>
            {brandon}
            {gvc}
        </Container>
    );
}

export default Education;