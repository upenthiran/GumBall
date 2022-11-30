import * as int from'./Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as PPVFX from './Lib/ppVFX.js';

console.log(int.platform);
CreateLigting();
crateModel();
int.CreateOrbitCamera();
CratePPVFX();
CrateEnvironment();




Window.animateTime;
 
function CreateLigting() {
    const targetObject = new window.threeCore.THREE.Object3D();
targetObject.position.set(0,8,0);

window.threeCore.scene.add(targetObject);
const dirLight = Lights.CreateDirectionalLight( {x:-0.5,y:10,z:10}, 0xffffff,0.8,true,Math.PI/3,0.3);
const backblue = Lights.CreateSpotLight( {x:0,y:6,z:-5}, 0x75b8ff,20.8,false,Math.PI/3,0.3);
const sideorange = Lights.CreateSpotLight( {x:20,y:4,z:-1}, 0xff9c40,50.8,false,Math.PI/3,0.3);
const frontHilight = Lights.CreateSpotLight( {x:-8,y:5,z:10}, 0xffffff,40.1,false,Math.PI/3,0.3);

backblue.target  = targetObject;
sideorange.target  = targetObject;
frontHilight.target = targetObject;




window.threeCore.scene.add( dirLight );
window.threeCore.scene.add( backblue );
window.threeCore.scene.add( frontHilight );
window.threeCore.scene.add( sideorange );
}
function CratePPVFX(){
    PPVFX.PPVFX_Bloom();
    //PPVFX.PPVFX_SAO();
    PPVFX.PPVFX_boka();
}
function CrateEnvironment(){
    RGBLoader.CreateHDR({URL:'hdr/blueSky.png'},false);


    const mesh = GEO.CreateGroundPlan();
    
    
    window.threeCore.scene.add( mesh );
}

function crateModel()
{

    GLTFLOADER.LoadAnimated('Model/chrismas_Card/test2.gltf',[0,-0,0]);

    GLTFLOADER.LoadCompressedAnimated('Model/talk_Group/GP0.glb',[0,0,0]);
}