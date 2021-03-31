
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import params from '../data/params.js';

//

window.addEventListener( 'resize', onWindowResize, false );

//

const scene = new THREE.Scene();

updateBackground( params.sceneBackColor );

//

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;

document.body.appendChild( renderer.domElement );

//

const camera = new THREE.PerspectiveCamera(
	params.cameraFOV,
	window.innerWidth/window.innerHeight,
	params.cameraMinPlane,
	params.cameraFarPlane
);

camera.position.copy( params.cameraInitPos );

camera.lookAt( params.cameraInitTarget );

//

let controls;

if ( params.useControls ) {

	controls = new OrbitControls(
		camera,
		renderer.domElement
	);

	camera.position.copy( params.cameraInitPos );

	controls.target.copy( params.cameraInitTarget );

	controls.update();

}

//

function updateBackground( color ) {

	if ( !color ) return

	if ( scene.background ) {

		scene.background.set( color );

	} else {

		scene.background = new THREE.Color( color );

	}

}

function render() {

	renderer.render(
		Scene.threeScene,
		Camera.threeCamera
	);

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	
	camera.updateProjectionMatrix();

	renderer.setSize(
		window.innerWidth,
		window.innerHeight
	);

}

//

function loop() {

	requestAnimationFrame( loop );

	renderer.render( scene, camera );

	if ( params.useControls ) {

		controls.update();

	}

}

//

export default {
	scene,
	camera,
	renderer,
	loop
}