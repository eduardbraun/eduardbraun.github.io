import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

function Experience(props) {
    console.log(props.summaryList)


    const listItems = props.summaryList.map((summary) =>
        <li>{summary}</li>
    );

    return (
        <div>
            <Row>
                <Col md={8}>
                    <p className='text-start fs-5 m-0 p-0'>{props.companyName}</p>
                    <p className='text-start fs-6 m-0 p-0 fw-semibold'>{props.position}</p>
                </Col>
                <Col md={4}>
                    <p className='text-end fs-5 m-0 p-0'>{props.location}</p>
                    <p className='text-end fs-6 m-0 p-0'>{props.duration}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-start'>
                        <ul>
                            {listItems}
                        </ul>
                    </p>
                </Col>
            </Row>
        </div>
    );
}


function Experiences() {


    let dmgMoriExperienceList = ['Promoted within 12 months due to strong performance and organizational impact - ahead of schedule by 6 months.', 'Worked with Product managers to re-architect the Digital Twin Desktop App as a SaaS application running in the cloud,\n' +
    'boosting revenue from SaaS by 5%.', 'Re-designed simulation microservices with smaller docker container sizes which reduced operation costs by 50%.', 'Built automated CI/CD pipelines on Azure for containerized applications using Docker and Kubernetes.'];
    let canfieldExperienceList = ['Implemented feature tool that enabled customers to convert over from competitors and increasing customer conversion by 20%.', 'Improved the OpenCV face detection speed, therefor reducing patient screening time by 10%.', 'Collaborated with an agile team of 6, and helped prioritize and scope feature request to ensure that the biggest\n' +
    'impact features were worked on first.']
    let phasonExperienceList = ['Build RESTful APIs and complex reports with ChartJS that enabled customers to spot failures and boost efficiency by 15%.', 'Tested software for bugs and operating speed, fixing bugs and documenting processes to increase efficiency by 10%.', 'Working in an Agile team environment to provide solutions by gathering requirements from the business users and\n' +
    'turning it into user-friendly web applications used by customers.']
    let rimmerTechExperienceList = ['Teamed up with current clients to understand needs for improved functionality, and communicated with engineers\n' +
    'and clients to develop enhancements that boosted client satisfaction by 15%.', 'Developed with team of 6 a cloud based SaaS seed management solution to make Farmers efficient in\n' +
    'keeping track of their inventory, sales and customers by 30%.', 'Utilized Google Cloud tools to provide a stable testing environment and deployments.']
    let friesensExperienceList = ['Assigned to product team, and participated in designing improved Angular components increasing customer satisfaction by 10%.', 'Diagnosed issues causing slow speeds in applications, and documented the process to making the\n' +
    'database query system robust.']

    let dmgMori = <Experience companyName="DMG Mori" location="Bielefeld, Germany" position="Senior Software Engineer"
                              duration='Jan. 2021 - Current' summaryList={dmgMoriExperienceList}/>
    let canfield = <Experience companyName="Canfield Scientific" location="Bielefeld, Germany"
                               position="Senior Software Engineer" duration='Oct. 2018 - Jan. 2021'
                               summaryList={dmgMoriExperienceList}/>
    let phason = <Experience companyName="Phason Electronics" location="Winnipeg, Canada" position="Software Engineer"
                             duration='Oct. 2017 - Oct. 2018' summaryList={dmgMoriExperienceList}/>
    let rimmerTech = <Experience companyName="Rimmer Technology Partners" location="Glenboro, Canada"
                                 position="Software Engineer" duration='Apr. 2017 - Oct. 2017'
                                 summaryList={dmgMoriExperienceList}/>
    let friesens = <Experience companyName="Friesens Inc." location="Altona, Canada"
                               position="Junior Software Developer" duration='Apr. 2016 - Oct. 2016'
                               summaryList={dmgMoriExperienceList}/>

    return (
        <Container>
            <h1>Experiences</h1>
            <Row>
                <Col>
                    {dmgMori}
                </Col>
            </Row>
            <Row>
                <Col>
                    {canfield}
                </Col>
            </Row>
            <Row>
                <Col>
                    {phason}
                </Col>
            </Row>
            <Row>
                <Col>
                    {rimmerTech}
                </Col>
            </Row>
        </Container>
    );
}

export default Experiences;