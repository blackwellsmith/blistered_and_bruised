import React from 'react'
import { Layout } from "./Layout"
import MySound from "./assets/sounds/mainSound.mp3"
import Hart from "./assets/sounds/hartIsland.mp3"
import Droney from "./assets/sounds/droney.mp3"

export const Audio = () => (
    <div className="Audio">
        <Layout>
          <div className="Audio">
            <audio src={MySound} preload="auto" controls loop /><p>Song</p>
          </div>
          <div>
            <audio src={Hart} preload="auto" controls loop /><p>Hart Island story time</p>
          </div>
          <div>
            <audio src={Droney} preload="auto" controls autoPlay loop /><p>Frikkle</p>
          </div>
        </Layout>    
      </div>       
   )

