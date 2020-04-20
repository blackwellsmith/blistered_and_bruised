import React from 'react'
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
            <div className="ImageContainer"><Image className="ImageLong" src={Mouth} rounded /></div>
            <Image className="ImageLong" src={Face} rounded />
            <Image className="ImageLong" src={Ear} rounded />
            <Image className="ImageLong" src={Heart} rounded />
            <Image className="ImageLong" src={Afro} rounded />
            <Image className="ImageLong" src={Horn} rounded />
            <Image className="Image" src={HeartSquare} rounded />
            <Image className="Image" src={Commodity} rounded />
            <Image className="Image" src={Screwball} rounded />
            <Image className="Image" src={Unknown} rounded />
            </ButtonToolbar>   
            <p>The Chris Cohen Collection Baton Rouge, LA</p>
        
       
        </Layout>
        </div>
)