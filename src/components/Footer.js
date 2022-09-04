import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import linkedIn from '../assets/images/nav-icon1.svg'
import facebook from '../assets/images/nav-icon2.svg'
import instagram from '../assets/images/nav-icon3.svg'
import github from '../assets/images/github-logo.png'

export const Footer = () => {
  return (
   <footer className='footer'>
    <Container>
        <Row className='align-item-center'>
            <Col sm={6}>
                <h1 className='irflogo left-footer'>IRF</h1>
            </Col>
            <Col sm={6} className='right-footer'>
                 <a href="https://www.linkedin.com/in/irfannadabs/"><img src={linkedIn} alt='Linked In'/></a>
                <a href="https://www.facebook.com/profile.php?id=100078145747771"><img src={facebook} alt='Facebook'/></a>
                <a href="https://www.instagram.com/irfannbsin/"><img src={instagram} alt='Instagram'/></a>
                <a href="https://github.com/eerfunn"><img src={github} alt='GitHub'></img></a>
            </Col>
            <p>Copyright 2022</p>
        </Row>
    </Container>
   </footer>
  )
}
