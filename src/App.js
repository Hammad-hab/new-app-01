import './App.css';
import * as THREE from "three"
import Card from './Components/Card';
import HoverContent from './Components/HoverContent';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import EarthSkin from "./Components/Skins/EarthSkin.jpeg"
function App() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.setAttribute('style', 'z-index: 100;')
    document.body.appendChild(renderer.domElement);


    // OBJECTs
    var object = new THREE.SphereBufferGeometry()
    var material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(EarthSkin),
        side: THREE.DoubleSide
    })
    var Earth = new THREE.Mesh(object, material)
    scene.add(Earth)
    // var Controls = new OrbitControls(camera, renderer.domElement)
    function Animation() {
        requestAnimationFrame(Animation)
        Earth.rotation.z += 0.01
        Earth.rotation.y += 0.01
        renderer.render(scene, camera)
    }
    Animation()

    return (
        <>
            <Card />
            <HoverContent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam tortor in massa consectetur, non egestas metus egestas. Proin bibendum nunc nec lacus interdum, ac luctus odio dictum. Mauris vitae aliquet turpis. Donec at ante at elit facilisis egestas vel vitae dui. Donec rhoncus ipsum vel risus auctor, id molestie lorem laoreet. Quisque tellus augue, tempor a erat ac, malesuada lacinia libero. Integer vitae sagittis ante, non malesuada mi. Pellentesque nibh lacus, feugiat non venenatis quis, sollicitudin eget lorem. Integer et sodales mi. In convallis id enim imperdiet bibendum. Etiam faucibus neque vel semper elementum. Duis molestie commodo nibh egestas rutrum. Aenean finibus blandit rhoncus. Nam auctor lacinia convallis. Duis eget erat id orci accumsan vehicula dignissim ac enim. Aenean consectetur eros vitae orci sagittis, at fringilla neque sagittis.

In lobortis quam nisl, at dignissim nisl molestie sit amet. Proin in pharetra leo. Maecenas ultrices aliquam velit pretium consectetur. Pellentesque eu varius velit. Sed eu molestie diam. Proin pretium, dui accumsan dictum elementum, risus velit gravida est, eu sagittis felis risus eget elit. Pellentesque volutpat magna eget dui blandit, quis ultricies ex fermentum. In at mauris eget dui aliquet dictum vitae et lectus. Maecenas congue justo eget convallis sodales. Donec mi enim, vehicula vitae consequat eu, maximus vel arcu. Proin euismod fermentum quam, vel lacinia eros eleifend vel. Morbi auctor enim luctus suscipit imperdiet. Proin viverra, mi eget vestibulum vulputate, odio massa cursus lorem, id cursus purus risus vel nisi. Nam gravida in elit non tincidunt.

Quisque sagittis quam velit, eget vestibulum ex lacinia in. Vestibulum feugiat a turpis vitae viverra. Vivamus a quam volutpat, ultrices ipsum a, aliquam odio. Proin malesuada ac purus eget luctus. Duis lobortis ipsum eget nibh dictum, vulputate pellentesque arcu finibus. Donec id accumsan velit. Aliquam sed ligula nec leo dignissim sagittis. Fusce non sapien ut turpis pellentesque elementum eu ut lectus. Suspendisse et gravida massa. Donec interdum dignissim turpis, nec ultrices lectus ornare non. Aenean vulputate odio massa, non auctor mi molestie eget. Etiam tincidunt gravida luctus. Morbi consequat tincidunt sollicitudin. Sed egestas, sem a iaculis hendrerit, ipsum nulla fringilla lorem, suscipit porttitor mi massa in lorem."/>
        </>
    )
}


export default App