import * as int from './Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as cameraANI from './Lib/cameraMove.js';


int.CreateOrbitCamera();

RGBLoader.CreateHDR({ URL: 'hdr/blueSky.hdr' });
GLTFLOADER.LoadAnimated('Model/xmas-Tree.gltf', [0, -0.2, 0]);
GLTFLOADER.LoadAnimated('Model/xmas-Tree.gltf', [20, -0.2, 0]);

const hemiLight = Lights.CreateHemiLight();
window.threeCore.scene.add(hemiLight);

//window.threeCore.camera.position.learp(new window.threeCore.THREE.Vector3(1, 2, 3) ,0.1 )

const dirLight = Lights.CreateDirectionalLight({ x: -2, y: 1.5, z: -1 }, 0xffff);
//const dirLight0 = Lights.CreateDirectionalLight({x:0,y:2,z:0},0xDABDFC);
window.threeCore.scene.add(dirLight);

const mesh = GEO.CreateGroundPlan();
cameraANI.MaincameraAnimation(new window.threeCore.THREE.Vector3(5, 10, 5));

document.getElementById("NextBTN").onclick = function () {
     cameraANI.MaincameraAnimation(new window.threeCore.THREE.Vector3(25, 0, 5)); 
     window.threeCore.controls.target.set( 20, 3, 0);
    }

window.threeCore.scene.add(mesh);


Window.animateTime;


