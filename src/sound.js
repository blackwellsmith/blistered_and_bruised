import React from 'react'
import Sound from 'react-sound'

class MySound extends React.Component {
    render() {
        return (
            <Sound
            url="./assets/sounds/mainSound.mp3"
            playStatus={Sound.status.PLAYING}
            playFromPosition={300 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          /> 
       )
   }
}
export default MySound