

import * as THREE from 'three';
//import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
import { EffectComposer } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/EffectComposer.js';
import { OrbitControls } from 'three/addon/controls/OrbitControls.js';
import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
const stats = new Stats();
const clock = new THREE.Clock();
window.threeCore ={}
window.threeCore.THREE=THREE;


window.threeCore.MixerList=[];



			init();
			//render();
			window.RenderFrame

function init() {

			
				const NextBUT = document.createElement( 'button' );
				document.body.appendChild( container );



				
				CreateScene();
                CreateCamera();
				CreateRender();
				Createcomposer();
			
				container.appendChild( threeCore.renderer.domElement );
				//CreateOrbitCamera();
				window.addEventListener( 'resize', onWindowResize );

			}

   function CreateScene()
   {
	threeCore.scene = new THREE.Scene();
	
	//threeCore.scene.background = new threeCore.THREE.Color( 0.05, 0.05, 0.3 );

   }
   function CreateCamera()
   {
	threeCore.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 120 );
				threeCore.camera.position.set( - 1.8, 20, 40 );
				
			//	threeCore.scene.fog = new THREE.Fog( new THREE.Color("hsl(238, 57%, 10%)"),90, 100 );
   }
   function CreateRender()
   {
	console.log("crating Redere");
	threeCore.renderer = new THREE.WebGLRenderer( { antialias: true , alpha: true  } );
	threeCore.renderer.setPixelRatio( window.devicePixelRatio );
	threeCore.renderer.setSize( window.innerWidth, window.innerHeight );
	threeCore.renderer.toneMapping = THREE.ACESFilmicToneMapping;
	threeCore.renderer.toneMappingExposure = 1;
	threeCore.renderer.outputEncoding = THREE.sRGBEncoding;
	threeCore.renderer.shadowMap.enabled = true;
	threeCore.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 // the default
	
   }
   function Createcomposer()
   {
	console.log("crating Composer");
	window.composer=new EffectComposer( window.threeCore.renderer );
   }
 export  function CreateOrbitCamera()
   {
	threeCore.controls = new OrbitControls(  window.threeCore.camera,  window.threeCore.renderer.domElement );
				threeCore.controls.addEventListener( 'change', render ); // use if there is no animation loop
				threeCore.controls.minDistance = 10;
				threeCore.controls.maxDistance = 80;
				
				threeCore.controls.maxPolarAngle = Math.PI / 2;
				threeCore.controls.target.set( 0, 3, 0);
				threeCore.controls.update();
   }
			
export function animate( ) {

    requestAnimationFrame( animate );

				const delta = clock.getDelta();

                for ( const mixer of threeCore.MixerList ) mixer.update( delta );
				if(threeCore.controls!=null)
				{
					threeCore.controls.update();
				}
				

				stats.update();
				
				threeCore.renderer.render(  threeCore.scene,  threeCore.camera );
				window.composer.render();
				console.log('render composer');

}

		function onWindowResize() {

				threeCore.camera.aspect = window.innerWidth / window.innerHeight;
				threeCore.camera.updateProjectionMatrix();

				threeCore.renderer.setSize( window.innerWidth, window.innerHeight );

			//	render();

			}


     	function render() {

				window.threeCore.renderer.render(  window.threeCore.scene,  window.threeCore.camera );

			}
			var animateTime =animate( );
			var RenderFrame = render();
    //export{THREE,camera, scene, renderer,controls}
