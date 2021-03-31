
/* Import everything we need from Three.js */

import * as THREE from 'three';
import threeCore from './core/threeCore.js';

//

const cube = new THREE.Mesh(
	new THREE.BoxGeometry(),
	new THREE.MeshNormalMaterial()
);

threeCore.scene.add( cube );

threeCore.addCallback( () => {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

});

//

threeCore.loop();
