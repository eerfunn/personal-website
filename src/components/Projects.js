import React from 'react'
import projectA from '../assets/images/marketplace-portfolio.jpeg'
import projectB from '../assets/images/secondhand-portfolio.png'
import projectC from '../assets/images/cuberun.png'
import projectD from '../assets/images/bcr-portfolio.png'
import projectE from '../assets/images/cafein-portfolio.png'
import projectF from '../assets/images/website-portfolio.png'
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap'
import { Project } from './Project'

export const Projects = () => {
    const projects = [
        {
            title: "Marketplace",
            description: "Marketplace built with Laravel",
            imgUrl: projectA,
            projUrl: ''
        },
        {
            title: "Second Hand",
            description: "Marketplace built by me and my team, use MERN and Scrum",
            imgUrl: projectB,
            projUrl: ''
        }
        ,
        {
            title: "Cuberun",
            description: "Game built with Unity Game Engine ",
            imgUrl: projectC,
            projUrl: ''
        },
         {
            title: "Binar Car Rental",
            description: "Car rental landing page with HTML, CSS, JS",
            imgUrl: projectD,
            projUrl: ''
        },
        {
            title: "Cafein",
            description: "Coffee shop company profile, built with CodeIgniter, and Bootstrap",
            imgUrl: projectE,
            projUrl: ''
        }
        ,
        {
            title: "Personal Website",
            description: "Built with React.js",
            imgUrl: projectF,
            projUrl: ''
        }
    ]
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Below few of my completed projets</p>
                <Tab.Container id='project-tabs text-align-center' defaultActiveKey='first'>
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Page 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Page 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Page 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first' >
                            <Row >
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <Project key={index} {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            This is page 2.
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            This is page 3.
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                
                </Col>
            </Row>
        </Container>
    </section>
  )
}
