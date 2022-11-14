import * as int from './Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as cameraANI from './Lib/cameraMove.js';


int.CreateOrbitCamera();

RGBLoader.CreateHDR({ URL: 'hdr/blueSky.hdr' });
GLTFLOADER.LoadSLid('Model/xmas-Tree.gltf');
GLTFLOADER.LoadSLid('Model/xmas-Tree.gltf');

const hemiLight = Lights.CreateHemiLight();
window.threeCore.scene.add(hemiLight);

//window.threeCore.camera.position.learp(new window.threeCore.THREE.Vector3(1, 2, 3) ,0.1 )

const dirLight = Lights.CreateDirectionalLight({ x: -2, y: 1.5, z: -1 }, 0xffff);
//const dirLight0 = Lights.CreateDirectionalLight({x:0,y:2,z:0},0xDABDFC);
window.threeCore.scene.add(dirLight);

const mesh = GEO.CreateGroundPlan();


window.threeCore.scene.add(mesh);
cameraANI.cameraAnimate();
//cameraANI.MaincameraAnimation(0,0,0);

nextButton();


Window.animateTime;


function nextButton()
{
    document.getElementById("NextBTN").onclick = function() { 
      let slid= GLTFLOADER.increseSlidNumber();
      console.log(slid);
      var slidTarget = new window.threeCore.THREE.Vector3(slid.posArray[0],slid.posArray[1],slid.posArray[2]);
        cameraANI.MaincameraAnimation(slidTarget );
        window.threeCore.controls.target.set(slid.posArray[0],slid.posArray[1],slid.posArray[2]);


     }
}