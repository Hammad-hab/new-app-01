import * as THREE from 'three'
function Initalize() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5
    camera.position.x = 38
    camera.rotation.y = 65
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('style', 'background-color: skyblue;')
    function Animation(innerFunc) {
        requestAnimationFrame(Animation)
        if (typeof innerFunc === 'function') {
            innerFunc()
        }
        renderer.render(scene, camera)

    }

    window.addEventListener('mousemove', (x) => {
        camera.rotation.y = (0.001 * x.clientX)
    })
    return {
        Scene: function () { return scene },
        Camera: function () { return camera },
        Renderer: function () { return renderer },
        AnimationLoop: function () { return Animation }
    }
}

export default Initalize