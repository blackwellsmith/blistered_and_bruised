import React from 'react'
import MySound from "./assets/sounds/mainSound.mp3"

class MySound extends React.Component {
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render() {
        return (
            <div>
        <audio className="audio-element">
          <source src={MySound}></source>
        </audio>
      </div>
       )
   }
}
export default MySound