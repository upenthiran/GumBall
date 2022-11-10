

import * as THREE from 'three';
//import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';

import { OrbitControls } from 'three/addon/controls/OrbitControls.js';
import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
const stats = new Stats();
const clock = new THREE.Clock();
window.threeCore ={}
window.threeCore.THREE=THREE;

window.threeCore.MixerList=[];



			init();
			render();

			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				threeCore.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
				threeCore.camera.position.set( - 1.8, 0.6, 2.7 );

				threeCore.scene = new THREE.Scene();
                

				threeCore.renderer = new THREE.WebGLRenderer( { antialias: true } );
				threeCore.renderer.setPixelRatio( window.devicePixelRatio );
				threeCore.renderer.setSize( window.innerWidth, window.innerHeight );
				threeCore.renderer.toneMapping = THREE.ACESFilmicToneMapping;
				threeCore.renderer.toneMappingExposure = 1;
				threeCore.renderer.outputEncoding = THREE.sRGBEncoding;
				container.appendChild( threeCore.renderer.domElement );

				threeCore.controls = new OrbitControls(  window.threeCore.camera,  window.threeCore.renderer.domElement );
				threeCore.controls.addEventListener( 'change', render ); // use if there is no animation loop
				threeCore.controls.minDistance = 2;
				threeCore.controls.maxDistance = 10;
				threeCore.controls.target.set( 0, 1, - 0.2 );
				threeCore.controls.update();

               
            

				window.addEventListener( 'resize', onWindowResize );

			}

            
export function animate( ) {

    requestAnimationFrame( animate );

				const delta = clock.getDelta();

                for ( const mixer of threeCore.MixerList ) mixer.update( delta );

				threeCore.controls.update();

			//	stats.update();

				threeCore.renderer.render(  threeCore.scene,  threeCore.camera );

}

			function onWindowResize() {

				threeCore.camera.aspect = window.innerWidth / window.innerHeight;
				threeCore.camera.updateProjectionMatrix();

				threeCore.renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}


     		function render() {

				window.threeCore.renderer.render(  window.threeCore.scene,  window.threeCore.camera );

			}
			var animateTime =animate( );
			var RenderFrame = render();
    //export{THREE,camera, scene, renderer,controls}
