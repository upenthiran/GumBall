

import * as THREE from 'three';
//import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';

import { OrbitControls } from 'three/addon/controls/OrbitControls.js';
import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
const stats = new Stats();
const clock = new THREE.Clock();

export const MixerList=[];
let camera, scene, renderer,controls ;


			init();
			render();

			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
				camera.position.set( - 1.8, 0.6, 2.7 );

				scene = new THREE.Scene();
                

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;
				renderer.outputEncoding = THREE.sRGBEncoding;
				container.appendChild( renderer.domElement );

				 controls = new OrbitControls( camera, renderer.domElement );
				controls.addEventListener( 'change', render ); // use if there is no animation loop
				controls.minDistance = 2;
				controls.maxDistance = 10;
				controls.target.set( 0, 1, - 0.2 );
				controls.update();

               
            

				window.addEventListener( 'resize', onWindowResize );

			}

            
export function animate( ) {

    requestAnimationFrame( animate );

				const delta = clock.getDelta();

                for ( const mixer of MixerList ) mixer.update( delta );

				controls.update();

				stats.update();

				renderer.render( scene, camera );

}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}


     		function render() {

				renderer.render( scene, camera );

			}

			var RenderFrame = render();
    export{THREE,camera, scene, renderer,controls}
