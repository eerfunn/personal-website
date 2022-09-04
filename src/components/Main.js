import {React, useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/images/header-img.svg'
export const Main = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const wordsToType = ['Full Stack Web Developer   ', 'Weeb   ','Data Analyst   ', 'Software Engineer   ']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200)

    useEffect(() => {
        let wordTyper = setInterval(()=>{
            typing();
        }, delta)
        return () => {
            clearInterval(wordTyper)
        }
    }, [text])
    const typing = () =>{
        let i = loopNum % wordsToType.length
        let fullWord = wordsToType[i]
        let updatedWord = isDeleting ? fullWord.substring(0, text.length -1 ) : fullWord.substring(0, text.length + 1 ) 
        
        setText(updatedWord)

        if(!isDeleting && updatedWord === fullWord){
            setIsDeleting(true)
            setDelta(100)
        }else if(isDeleting && updatedWord === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(300)
        }
    }

    return (
    <section className='main' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='main-header'>Welcome to my Portofolio</span>
                    <h1>{`Hi, I'm Irfan Nada. I'm a `}<span className='wrap'>{text}</span></h1>
                    <p>I'm final year computer science student, have interest in full stack development, data analyst, animanga, and game.</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
