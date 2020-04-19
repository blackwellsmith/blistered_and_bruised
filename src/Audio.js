import React from 'react'
import MySound from "./assets/sounds/mainSound.mp3"
import Hart from "./assets/sounds/hartIsland.mp3"
import Droney from "./assets/sounds/droney.mp3"

export const Audio = () => (
      <div className="Audio">
        <div>
          <audio src={MySound} preload="auto" controls autoPlay loop />
        </div>
        <div>
          <audio src={Hart} preload="auto" controls autoPlay loop />
        </div>
        <div>
          <audio src={Droney} preload="auto" controls autoPlay loop />
        </div>
      </div>       
   )

