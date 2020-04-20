import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Chris from './assets/chris.jpg'
import { Layout } from "./Layout"

export const Home = () => (
    <div className="Home">
        <Layout>
        <h2>What do you do?</h2>
        <p>Call poison control.</p>
        <Row> 
        <Col xs={6} md={2}>    
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        </Col> 
        <Col xs={6} md={2}> 
        <br></br>            
        <div><Image className="circle" src={Chris} roundedCircle /></div>
        </Col>            
        </Row> 
        <div>1-800-222-1222</div>
        <br></br>    
        </Layout>
    </div>
)