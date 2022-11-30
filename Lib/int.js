

import * as THREE from 'three';
//import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
import { EffectComposer } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/EffectComposer.js';
import { OrbitControls } from 'three/addon/controls/OrbitControls.js';
import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
//import Stats from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/stats.module.js';
const stats = new Stats();
const clock = new THREE.Clock();
window.threeCore ={}
window.threeCore.THREE=THREE;
export const platform =  getMobileOperatingSystem();
window.threeCore.manager = new window.threeCore.THREE.LoadingManager();
window.threeCore.MixerList=[];


			init();
			//render();
			window.RenderFrame
			//console.log( getMobileOperatingSystem());

function init() {

			
				const NextBUT = document.createElement( 'button' );
				document.body.appendChild( container );
				
				container.appendChild( stats.dom );


				
				CreateScene();
                CreateCamera();
				CreateRender();
				Createcomposer();
			
				container.appendChild( threeCore.renderer.domElement );
				//CreateOrbitCamera();
				window.addEventListener( 'resize', onWindowResize );

			}


const bar = document.getElementById("progress-bar");
const loadinscreen = document.getElementById("LoadingScreen");

			window.threeCore.manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

				console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
			
			};
			
			window.threeCore.manager.onLoad = function ( ) {
			
				console.log( 'Loading complete!');
				loadinscreen.style.display ="none";
				bar.style.display ="none";
			
			};
			
			
			window.threeCore.manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
			
				//console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
				console.log( 'Loading '+ ((itemsLoaded / itemsTotal)*100) + ' %' );
				bar.value = (itemsLoaded / itemsTotal)*100;
			};
			
			window.threeCore.manager.onError = function ( url ) {
			
				console.log( 'There was an error loading ' + url );
			
			};
			
			




function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
	
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "PC";


	}

   function CreateScene()
   {
	threeCore.scene = new THREE.Scene();
	
	//threeCore.scene.background = new threeCore.THREE.Color( 0.05, 0.05, 0.3 );

   }
   function CreateCamera()
   {
	threeCore.camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.02, 220 );
				threeCore.camera.position.set( - 1.8, 20, 80 );
				
			//	threeCore.scene.fog = new THREE.Fog( new THREE.Color("hsl(238, 57%, 10%)"),90, 100 );
   }
   function CreateRender()
   {
	console.log("crating Redere");
	threeCore.renderer = new THREE.WebGLRenderer( { antialias: true , alpha: true  } );
	threeCore.renderer.setPixelRatio( window.devicePixelRatio );
	threeCore.renderer.setSize( window.innerWidth, window.innerHeight );
	threeCore.renderer.physicallyCorrectLights = true;
	threeCore.renderer.toneMapping = THREE.ACESFilmicToneMapping;
	threeCore.renderer.toneMappingExposure = 0.01;
	threeCore.renderer.gammaFactor = 2;
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
				threeCore.controls.minDistance = 15;
				threeCore.controls.maxDistance = 30;
				
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
				//console.log('render composer');

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
