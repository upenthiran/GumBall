import * as int from'./Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';

//Create a WebGLRenderer and turn on shadows in the renderer


int.CreateOrbitCamera();

RGBLoader.CreateHDR('hdr/studio.hdr');

const hemiLight = new window.threeCore.THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 20, 0 );
window.threeCore.scene.add( hemiLight );

const dirLight = new window.threeCore.THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 3, 10, 10 );
dirLight.castShadow = true;
dirLight.shadow.camera.top = 20;
dirLight.shadow.camera.bottom = - 2;
dirLight.shadow.camera.left = - 2;
dirLight.shadow.camera.right =2;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 40;
window.threeCore.scene.add( dirLight );

//window.threeCore.scene.add(GEO.CreatePolyCircle({radius:5}));
 
const mesh = GEO.CreateGroundPlan();
				window.threeCore.scene.add( mesh );



for (let i = 0; i < 4; i++) {

    const xval = Math.random()*3;
    const yval = Math.random()*3;
    GLTFLOADER.LoadAnimated('Model/m3.gltf',[xval,0,yval]);
}




Window.animateTime;
 
;
