import * as THREE from 'three'
import * as CANNON from 'cannon-es'

const Cannon = {
    WORLD: new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.81,0)
    }),
   BODIES:{GROUND: {
       BODY: new CANNON.Body({
         shape: new CANNON.Box(new CANNON.Vec3(100,1,100)),
         type: CANNON.Body.STATIC
       })
    }
}
}
export default Cannon