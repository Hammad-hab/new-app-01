import './App.css';
import * as THREE from "three"
import Initalize from './Components/Init';
import StartPage from './Components/Progress';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Objects from './Components/Objects';
function App() {
  // alert('cool')
  var _return = Initalize(),
    scene = _return.Scene(),
    camera = _return.Camera(),
    renderer = _return.Renderer(),
    Loop = _return.AnimationLoop(),
    Append = _return.Appender()
  var Controls = new OrbitControls(camera, renderer.domElement)
  var Interval = setInterval(() => {
    if (localStorage.getItem('done') === 'true') {
      Objects(scene, camera)
      Append()
      clearInterval(Interval)
    }
  }, 100);

  Loop()

  // Append()
  return (
    <>
      <StartPage />
    </>
  )
}

export default App



var Shader = /* glsl */ ""