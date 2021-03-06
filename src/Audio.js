import React from 'react'
import { Layout } from "./Layout"
import BandCamp from "./assets/bandcamp.jpg"
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
            <div>
              <audio src={MySound} preload="auto" controls loop /><p>Nothing</p>
            </div>
            <div>
              <audio src={Hart} preload="auto" controls loop /><p>Hart Island</p>
            </div>
            <div>
              <audio src={Droney} preload="auto" controls autoPlay loop /><p>Droney</p>
            </div>
            <div>
              <p>Someone's Been Poisoned <a href="https://soundcloud.com/christuco"><img src="https://connect.soundcloud.com/2/btn-connect-sc-s.png" /> </a><a href="https://someonesbeenpoisoned.bandcamp.com/releases"><img src={BandCamp} /></a></p>
            </div> 
            <div>
              <p>Musings and poetry available at <a href="https://www.blurb.com/b/5209096-sporadic-life-with-a-hint-of-lung-cancer">blurb</a></p>
            </div>
            <div><p>Sound by Chris Cohen</p></div>
          </div>
        </ButtonToolbar>
        
        
      </Layout>    
      </div>       
   )

