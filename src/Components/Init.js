import * as THREE from 'three'
// import negx from './Texture/negx.jpg'
// import negy from './Texture/negy.jpg'
// import negz from './Texture/negz.jpg'

// import posx from './Texture/posx.jpg'
// import posy from './Texture/posy.jpg'
// import posz from './Texture/posz.jpg'

var append = false
function Initalize() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5
    camera.position.x = 38
    camera.rotation.y = 65
    camera.position.y = 6
//   scene.background  = new THREE.CubeTextureLoader().load([
//       posx, negx, 
//       posy, negy,
//       posz, negz
//   ])

    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    function Append (){
    if (append === false) {
        append = true
        renderer.domElement.setAttribute('id', 'canvas')
        document.body.appendChild(renderer.domElement);
        // renderer.domElement.setAttribute('style', 'background-color: skyblue;')
    }
}
    function Animation(innerFunc) {
        requestAnimationFrame(Animation)
        if (typeof innerFunc === 'function') {
            innerFunc()
        }
        renderer.render(scene, camera)
    }

   
    return {
        Scene: function () { return scene },
        Camera: function () { return camera },
        Renderer: function () { return renderer },
        AnimationLoop: function () { return Animation },
        Appender: function () { return Append }
    }
}

export default Initalize