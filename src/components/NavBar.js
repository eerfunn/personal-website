import {React, useState, useEffect} from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import linkedIn from '../assets/images/nav-icon1.svg'
import facebook from '../assets/images/nav-icon2.svg'
import instagram from '../assets/images/nav-icon3.svg'
import github from '../assets/images/github-logo.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled]  = useState(false)
    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
      }
      window.addEventListener("scroll", onScroll)
      return() => window.removeEventListener("scroll", onScroll)

    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><h1 className='irflogo'>IRF</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>    
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'?'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
             {/* <Nav.Link href="#whatilearn" className={activeLink === 'whatilearn'?'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whatilearn')}>What I Learn</Nav.Link> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social-contact mx-auto'>
                <a href="https://www.linkedin.com/in/irfannadabs/"><img src={linkedIn} alt='Linked In'/></a>
                <a href="https://www.facebook.com/profile.php?id=100078145747771"><img src={facebook} alt='Facebook'/></a>
                <a href="https://www.instagram.com/irfannbsin/"><img src={instagram} alt='Instagram'/></a>
                <a href="https://github.com/eerfunn"><img src={github} alt='GitHub'></img></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
