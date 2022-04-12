import * as THREE from 'three'
import BuildingTexture from './Skins/BuildingFront.webp'
import RoadTexture from './Skins/RoadSkin.jpeg'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as CANNON from 'cannon-es'
localStorage.setItem('Loaded?', 'no')
var AccelrationSpeed = 0
var keyDown = false
var Step = 1 / 60
const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, -10, 0)
})
const THE_CONSTANT_OF_STRIGHTNESS_NEG = -4.71239
const THE_CONSTANT_OF_STRIGHTNESS_POS = 4.71239

var Event;
function Objects(scene, camera) {
    var Light = new THREE.DirectionalLight('white', 10)
    scene.add(Light)
    camera.rotation.y = THE_CONSTANT_OF_STRIGHTNESS_NEG

    // adding the Road
    var ROAD_GEO = new THREE.BoxGeometry(1000, 1, 50)
    var ROAD_MAT = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(RoadTexture),side: THREE.DoubleSide})
    var ROAD = new THREE.Mesh(ROAD_GEO, ROAD_MAT)
    ROAD.position.z += 25
    ROAD.position.y -= 5
    scene.add(ROAD)
    // Initializing Physics
     
    var ROADphysics = new CANNON.Body({
     shape: new CANNON.Box(new CANNON.Vec3(1000, 1, 50)),
     type: CANNON.Body.STATIC,
    })
    world.addBody(ROADphysics)
    var CarPhysics = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(0.01,0.01, 0.01)),
        mass: 10,
        position: new CANNON.Vec3(1, 50, 0)
        
    })
    world.addBody(CarPhysics)
    // Adding the Car
    var Loader = new FBXLoader()   
    Loader.load(require('./Models/Cool.fbx'), (fbx) => {
        fbx.position.y -= 0.5
        fbx.rotation.y = THE_CONSTANT_OF_STRIGHTNESS_NEG
        fbx.position.z += 25
        camera.position.z += 25
        scene.add(fbx)
        var KeyControler = (e) => {
            if (localStorage.getItem('Pause') === 'No') {
            switch (e.key) {
            case "w":
            
            var Vec = new THREE.Vector3
            fbx.getWorldDirection(Vec)
            fbx.position.addScaledVector(Vec, (1 * AccelrationSpeed))
            CarPhysics.velocity = new CANNON.Vec3(1,1,1)
            
            AccelrationSpeed += 0.1
            keyDown = true
            break
            case "s":
            var Vec = new THREE.Vector3
            fbx.getWorldDirection(Vec)
            fbx.position.addScaledVector(Vec, (-1 * AccelrationSpeed))
            CarPhysics.position.addScaledVector(Vec, (-1 * AccelrationSpeed))
            // camera.position.addScaledVector(Vec, (-1 * AccelrationSpeed))
            AccelrationSpeed += 0.1
            keyDown = true
            break
            default:
            break
            }
        } else return false
        }
       
        fbx.scale.set(0.01, 0.01, 0.01)
   
        document.addEventListener('keydown', KeyControler)
        document.getElementById('RotationArea').addEventListener('mousemove', (x) => {
            if (localStorage.getItem('Pause') === 'No') fbx.rotation.y = (x.clientX * 0.1); CarPhysics.rotation.y = (x.clientX * 0.1);
        })
        document.addEventListener('keyup', (e) => { keyDown = false; Event = e.key; CarPhysics.velocity = new CANNON.Vec3(0,0,0)})
        setInterval(() => {
            if (AccelrationSpeed >= 0 && keyDown === false) {
                if (Event === "w") {
                var Vec = new THREE.Vector3
                fbx.getWorldDirection(Vec)
                    fbx.position.addScaledVector(Vec, (1 * AccelrationSpeed))
                    // CarPhysics.position.addScaledVector(Vec, (1 * AccelrationSpeed))
                    // camera.position.addScaledVector(Vec, (1 * AccelrationSpeed))
                    console.log(
                        CarPhysics.position.addScaledVector(Vec, (1 * AccelrationSpeed))
                    )
                AccelrationSpeed -= 0.1
              } 
              else {
                var Vec = new THREE.Vector3
                fbx.getWorldDirection(Vec)
                fbx.position.addScaledVector(Vec, (-1 * AccelrationSpeed))
                CarPhysics.position.addScaledVector(Vec, (-1 * AccelrationSpeed))
                // camera.position.addScaledVector(Vec, (-1 * AccelrationSpeed))
                AccelrationSpeed -= 0.1
              }
            }
           
        }, 100)
          function Func() {
            requestAnimationFrame(Func)
            world.step(Step)
            ROAD.position.copy(ROADphysics.position)
            ROAD.quaternion.copy(ROADphysics.quaternion)
            fbx.position.copy(CarPhysics.position)
            fbx.quaternion.copy(CarPhysics.quaternion)
            // if (keyDown === false) {

            // }
           }
       Func()
        
    })
  
}

export default Objects