import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as CANNON from 'cannon-es'
import Cannon from './CANNONWorld'
localStorage.setItem('Loaded?', 'no')
var Step = 1 / 60
const THE_CONSTANT_OF_STRIGHTNESS_NEG = -4.71239
const THE_CONSTANT_OF_STRIGHTNESS_POS = 4.71239
function Objects(scene, camera) {
    camera.position.set(0, 10, -15)
    var DirectionalLight = new THREE.DirectionalLight("white", 5)
    var DirectionalLightHelper = new THREE.DirectionalLightHelper(DirectionalLight)
    scene.add(DirectionalLight, DirectionalLightHelper)
    const Loaders = {
        TL: new THREE.TextureLoader,
        FL: new FBXLoader,
        GL: new GLTFLoader
    }
    const Ground_Geometry = new THREE.BoxGeometry(150,1, 150)
    const Wall_Geometry = new THREE.BoxGeometry(150, 150,1)
    const Ground_Material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: Loaders.TL.load(require('./Texture/Plank.jpg'))
    })
    DirectionalLight.position.x += 100
    DirectionalLight.position.y += 100
    const Wall_Material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: Loaders.TL.load(require('./Texture/Walls.jpg'))
    })
    const Ground = new THREE.Mesh(Ground_Geometry, Ground_Material)
    const Roof = new THREE.Mesh(Ground_Geometry, Ground_Material)
    const WALL_RIGHT = new THREE.Mesh(Wall_Geometry, Wall_Material)
    const WALL_LEFT = new THREE.Mesh(Wall_Geometry, Wall_Material)
    const WALL_BACK = new THREE.Mesh(Wall_Geometry, Wall_Material)
    // const WALL_LEFT = new THREE.Mesh(Wall_Geometry, Wall_Material)
    WALL_RIGHT.position.y += 50
    WALL_LEFT.position.y += 50
    WALL_BACK.position.y += 50
    WALL_BACK.rotation.y += THE_CONSTANT_OF_STRIGHTNESS_NEG
    Roof.position.y += 125

    WALL_LEFT.position.z -= 75
    WALL_RIGHT.position.z += 75

    WALL_BACK.position.x -= 75
    Ground.rotation.x = THE_CONSTANT_OF_STRIGHTNESS_NEG

    scene.add(Ground, Roof, WALL_RIGHT, WALL_LEFT, WALL_BACK)
    Cannon.WORLD.addBody(Cannon.BODIES.GROUND.BODY)
    function Animation() {
        requestAnimationFrame(Animation)
        Ground.position.copy(Cannon.BODIES.GROUND.BODY.position)
        Ground.quaternion.copy(Cannon.BODIES.GROUND.BODY.quaternion)
    }
    Animation()

    Loaders.GL.load(require('./Models/Sofa.glb'), (glb) => {scene.add(glb.scene)})
    Loaders.GL.load(require('./Models/Table.glb'), (glb) => {scene.add(glb.scene)})
    Loaders.GL.load(require('./Models/Lamp.glb'), (glb) => {scene.add(glb.scene)})
    
}

export default Objects
