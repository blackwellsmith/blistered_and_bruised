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
            <div>
              <audio src={MySound} preload="auto" controls loop /><p>Song</p>
            </div>
            <div>
              <audio src={Hart} preload="auto" controls loop /><p>Hart Island</p>
            </div>
            <div>
              <audio src={Droney} preload="auto" controls autoPlay loop /><p>Frikkle</p>
            </div>
          </div>
        </ButtonToolbar>
        <p>Someones Been Poisoned <a href="https://soundcloud.com/christuco"><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.worldvectorlogo.com%2Flogos%2Fsoundcloud.svg&imgrefurl=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Fsoundcloud&tbnid=I7trRazQT5equM&vet=12ahUKEwiWvKrBnPfoAhUKQ1MKHV7MBK8QMygBegUIARCYAg..i&docid=6TpAS8XM3S-wkM&w=2500&h=1425&q=soundcloud%20logo&ved=2ahUKEwiWvKrBnPfoAhUKQ1MKHV7MBK8QMygBegUIARCYAg"/></a></p>
        <p>Sound by Chris Cohen</p>
      </Layout>    
      </div>       
   )

