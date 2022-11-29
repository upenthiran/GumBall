import * as int from'./Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as PPVFX from './Lib/ppVFX.js';



int.CreateOrbitCamera();


RGBLoader.CreateHDR({URL:'hdr/blueSky.png'},false);

/*  const hemiLight = Lights.CreateHemiLight();
window.threeCore.scene.add( hemiLight ); */ 
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
PPVFX.PPVFX_Bloom();
//PPVFX.PPVFX_SAO();
PPVFX.PPVFX_boka();
const mesh = GEO.CreateGroundPlan();


window.threeCore.scene.add( mesh );


/* for (let i = 0; i < 4; i++) {

    const xval = Math.random()*3;
    const yval = Math.random()*3;
    GLTFLOADER.LoadAnimated('Model/m3.gltf',[xval,0,yval]);
} */
//GLTFLOADER.LoadAnimated('Model/AR/AR-and.gltf',[0,-0,0]);


 GLTFLOADER.LoadAnimated('Model/chrismas_Card/test2.gltf',[0,-0,0]);

GLTFLOADER.LoadCompressedAnimated('Model/talk_Group/GP0.glb',[0,0,0]);
/* let pp1 = GLTFLOADER.LoadAnimated('Model/people/ppl.gltf',[4,0,0]);

let pp2 =GLTFLOADER.LoadAnimated('Model/people/ppl1.gltf',[4,0,2]);
let pp3 =GLTFLOADER.LoadAnimated('Model/people/ppl2.gltf',[4,0,-2]);
let pp4 =GLTFLOADER.LoadAnimated('Model/people/ppl3.gltf',[-4,0,-2]);
let pp5 =GLTFLOADER.LoadAnimated('Model/people/ppl4.gltf',[-4,0,-1]);
let pp6 =GLTFLOADER.LoadAnimated('Model/people/ppl5.gltf',[-2,0,3]);
let pp7 =GLTFLOADER.LoadAnimated('Model/people/ppl6.gltf',[2,0,3]);
let pp8 =GLTFLOADER.LoadAnimated('Model/people/ppl7.gltf',[1,0,4]);
let pp9 =GLTFLOADER.LoadAnimated('Model/people/ppl8.gltf',[1,0,-4]);
let pp10= GLTFLOADER.LoadAnimated('Model/people/ppl9.gltf',[-1,0,-4]);
let pp11=GLTFLOADER.LoadAnimated('Model/people/ppl10.gltf',[0,0,-4]);
let pp12=GLTFLOADER.LoadAnimated('Model/people/ppl11.gltf',[-3,0,5]);
let pp13=GLTFLOADER.LoadAnimated('Model/people/ppl12.gltf',[1.5,0,-3]); 
let pp14=GLTFLOADER.LoadAnimated('Model/people/ppl13.gltf',[0,0,3]);
let pp15=GLTFLOADER.LoadAnimated('Model/people/ppl14.gltf',[-3,0,0]);
let pp16=GLTFLOADER.LoadAnimated('Model/people/ppl15.gltf',[3,0,-2.5]);
let pp17=GLTFLOADER.LoadAnimated('Model/people/ppl16.gltf',[2.5,0,2.5]); 

await tree1();
await pp1();
await pp2();
await pp3();
await pp4();
await pp5();
await pp6();
await pp7();
await pp8();
await pp9();
await pp10();
await pp11();
await pp12();
await pp13();
await pp14();
await pp15();
await pp16();
await pp17(); */

Window.animateTime;
 

