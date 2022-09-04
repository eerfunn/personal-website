import React from 'react'
import { Col } from 'react-bootstrap'

export const Project = ({title, description, imgUrl, projUrl}) => {
  return (
    <Col>
        <a href={projUrl} className='project-card-link'>
            <div className='proj-imgbx'>
            <img className='img-portfolio' src={imgUrl} alt='Project' />
            <div className='proj-txtx '>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </a>
    </Col>
  )
}
