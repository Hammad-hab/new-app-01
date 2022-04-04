import * as THREE from 'three'
import BuildingTexture from './Skins/BuildingFront.webp'
import RoadTexture from './Skins/RoadSkin.jpeg'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import ProgressBar from './Progress'
import Helpers from './Helpers'
var ObjectArray = []
localStorage.setItem('Loaded?', 'no')
var AccelrationSpeed = 0
var FallingSpeed = 0
function AddToArray(item) { ObjectArray.push(item) }

function Objects(scene, camera) {
    var WALL_MAT = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(BuildingTexture),
        side: THREE.DoubleSide
    })
    var WALL_RIGHT_GEO = new THREE.BoxGeometry(100, 10)

    var WALL_RIGHT = new THREE.Mesh(WALL_RIGHT_GEO, WALL_MAT)

    var WALL_LEFT_GEO = new THREE.BoxGeometry(100, 10)
    var WALL_LEFT = new THREE.Mesh(WALL_LEFT_GEO, WALL_MAT)
    WALL_LEFT.position.z += 10

    var ROAD_GEO = new THREE.BoxGeometry(100, 1, 10)
    var ROAD_MAT = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(RoadTexture),
        side: THREE.DoubleSide
    })

    var ROAD = new THREE.Mesh(ROAD_GEO, ROAD_MAT)
    ROAD.position.z += 5
    ROAD.position.y -= 5
    scene.add(WALL_RIGHT, WALL_LEFT, ROAD)
    var Loader = new FBXLoader()
    var Light = new THREE.DirectionalLight()
    scene.add(Light)
    Loader.load(require('./Models/Car.fbx'), (fbx) => {
        fbx.scale.set(0.01, 0.01, 0.01)
        fbx.position.y -= 53.2
        fbx.position.z += 20
        fbx.position.x += 100
        scene.add(fbx)

        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "w":
                   
                        fbx.position.x -= AccelrationSpeed
                        camera.position.x -= AccelrationSpeed
                        AccelrationSpeed += 0.1
                    
                    break

            }
            console.log(e)
        })

        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "w":
                    setInterval(() => {
                        if (AccelrationSpeed >= 0) {
                            fbx.position.x -= AccelrationSpeed
                            camera.position.x -= AccelrationSpeed
                            AccelrationSpeed -= 0.1
                        } else if (AccelrationSpeed < 0) {
                            AccelrationSpeed = 0
                        }
                    }, 100)
                    break
            }
        })
       
        return ObjectArray
    })
}

export default Objects