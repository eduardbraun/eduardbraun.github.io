import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import AboutMe from "./featuring/about-me";
import {Nav} from "react-bootstrap";
import Experiences from "./experiences/experiences";
import Education from "./education/education";

const NavBar = () => {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            {/*<Nav.Item>*/}
            {/*    <Nav.Link href="/home"><h3>Eduard</h3></Nav.Link>*/}
            {/*</Nav.Item>*/}
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Experiences</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Skills</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}


const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <AboutMe/>
                    </div>
                    <div className="section">
                        <Education/>
                    </div>
                    <div className="section">
                        <Experiences/>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Fullpage/>
        </div>
    );
}

export default App;
