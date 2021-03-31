
import * as THREE from 'three';

export default {
	useControls: true,
	sceneBackColor: 0x505050,
	cameraFOV: 75,
	cameraMinPlane: 0.1,
	cameraFarPlane: 1000,
	cameraInitPos: new THREE.Vector3( 0, 0, -10 ),
	cameraInitTarget: new THREE.Vector3( 0, 0, 0 )
}