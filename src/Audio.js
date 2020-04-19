import React from 'react'
import { Layout } from "./Layout"
import MySound from "./assets/sounds/mainSound.mp3"
import Hart from "./assets/sounds/hartIsland.mp3"
import Droney from "./assets/sounds/droney.mp3"
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

export const Audio = () => (
    <div className="Audio">
      <Layout>
      <div className="layout">
        <h2>Feel free to make some noise</h2>
      </div>
      <ButtonToolbar className="bt">
          <div>
            <audio src={MySound} preload="auto" controls loop /><p>Song</p>
          </div>
          <div>
            <audio src={Hart} preload="auto" controls loop /><p>Hart Island story time</p>
          </div>
          <div>
            <audio src={Droney} preload="auto" controls autoPlay loop /><p>Frikkle</p>
          </div>
          </ButtonToolbar>
        </Layout>    
      </div>       
   )

