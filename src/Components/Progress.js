import "./Index.css"
import * as THREE from 'three'

import { CgMenuGridR } from "react-icons/cg";
import { MdKeyboardBackspace } from "react-icons/md"
import { IoHome } from 'react-icons/io5'
import { AiFillSetting } from 'react-icons/ai'
import Home from "./Home";

localStorage.setItem('Pause', 'No')
function StartPage() {
    return (
        <div id="Parent">
            <div id="GameGUI" className="hide">
            <CgMenuGridR className="hover hunPix show alignLeftFull" title="pause" onClick={() => {
              document.getElementById('pauseScreen').setAttribute('class', 'bgTrasparentGrey hover show')
              localStorage.setItem('Pause', 'Yes')
            }}></CgMenuGridR>
            <div className="bgTrasparentGrey hover hide" id="pauseScreen" style={{width: window.innerWidth, height: window.innerHeight- 1, marginTop: "0px"}}>
                <h1 className="prominent">Paused</h1>
                <p className="centre" onClick={() => {
                    document.getElementById('pauseScreen').setAttribute('class', 'bgTrasparentGrey hover hide')
                    localStorage.setItem('Pause', 'No')
                }}>Back to game<MdKeyboardBackspace className="hunPix R_TO_H"></MdKeyboardBackspace></p>
                <p className="centre">Home <IoHome className="hunPix R_TO_H" onClick={() => {
                    document.getElementById('canvas').setAttribute('class', 'hide')
                    document.getElementById('Home').setAttribute('class', 'show')
                    document.getElementById('GameGUI').setAttribute('class', 'hide')
                    document.getElementById('canvas').setAttribute('class', 'hide')
                }}></IoHome></p>
                <p className="centre">Settings <AiFillSetting className="hunPix R_TO_H"></AiFillSetting></p>
            </div>
            </div>

            <div id="Home" className="show">
                <Home></Home>
            </div>
        </div>
    )
}

export default StartPage