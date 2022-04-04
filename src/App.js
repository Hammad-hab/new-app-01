import './App.css';
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import EarthSkin from "./Components/Skins/EarthSkin.jpeg"
import Initalize from './Components/Init';
import Objects from './Components/Objects.js'
function App() {
  var _return = Initalize(),
    scene = _return.Scene(),
    camera = _return.Camera(),
    renderer = _return.Renderer(),
    Loop = _return.AnimationLoop()
  Objects(scene, camera)

  Loop(function () {
    // Will be added
  })
}


export default App