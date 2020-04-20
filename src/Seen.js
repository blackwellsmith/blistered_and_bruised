import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Layout } from "./Layout"
import Heart from './assets/heart.jpeg'
import HeartSquare from './assets/heartSquare.jpg'
import Ear from './assets/ears.jpeg'
import Face from './assets/face.jpeg'
import Afro from './assets/afro.jpeg'
import Horn from './assets/horn.jpeg'
import Commodity from './assets/commodity.jpg'
import Screwball from './assets/screwball.jpg'
import Unknown from './assets/unknown.jpg'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Mouth from './assets/mouth.jpeg'
import Image from 'react-bootstrap/Image'

export const Seen = () => (
    <div className="Seen">
      <Layout>
        <div className="layout">
            <h2>Have you seen these people?</h2>
            <h3>They have been missing since before they appeared...</h3>
            </div>
            <ButtonToolbar className="bt">
            <Row> 
            <Col xs={6} md={2}>    
            <div className="ImageContainer"><Image className="ImageLong" src={Mouth} rounded /></div>
            <div className="ImageContainer"><Image className="ImageLong" src={Face} rounded /></div>
            <div className="ImageContainer"><Image className="ImageLong" src={Ear} rounded /></div>
            <div className="ImageContainer"><Image className="ImageLong" src={Heart} rounded /></div>
            <div className="ImageContainer"><Image className="ImageLong" src={Afro} rounded /></div>
            <div className="ImageContainer"><Image className="ImageLong" src={Horn} rounded /></div>
            <div className="ImageContainer2"><Image className="Image" src={HeartSquare} rounded /></div>
            <div className="ImageContainer2"><Image className="Image" src={Commodity} rounded /></div>
            <div className="ImageContainer2"><Image className="Image" src={Screwball} rounded /></div>
            <div className="ImageContainer2"><Image className="Image" src={Unknown} rounded /></div>
            </Col> 
            </Row>
            </ButtonToolbar>   
            <p>The Chris Cohen Collection Baton Rouge, LA</p>
        
       
        </Layout>
        </div>
)