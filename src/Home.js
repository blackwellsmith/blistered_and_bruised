import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Chris from './assets/chris.jpg'
import { Layout } from "./Layout"

export const Home = () => (
    <div className="Home">
        <Layout>
        <h2>Are you Bruised?</h2>
        <p>Everyone has a story.</p>
        <Row> 
        <Col xs={6} md={2}>    
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        <p>blah</p>
        </Col> 
        <Col xs={6} md={2}> 
        <br></br>            
        <div><Image className="circle" src={Chris} roundedCircle /></div>
        </Col>            
        </Row> 
        <div>What is yours?</div>
        <br></br>    
        </Layout>
    </div>
)