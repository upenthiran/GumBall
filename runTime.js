import * as int from'./Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as PPVFX from './Lib/ppVFX.js';



int.CreateOrbitCamera();


RGBLoader.CreateHDR({URL:'hdr/blueSky.hdr'});

const hemiLight = Lights.CreateHemiLight();
window.threeCore.scene.add( hemiLight );

const dirLight = Lights.CreateDirectionalLight( {x:-3.5,y:3,z:-1}, 0xeeeeee,1);
window.threeCore.scene.add( dirLight );
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
GLTFLOADER.LoadAnimated('Model/chrismas_Card/test2.gltf',[0,-0,0]);
//GLTFLOADER.LoadAnimated('Model/ddd.gltf',[0,0,0]);
GLTFLOADER.LoadAnimated('Model/people/ppl.gltf',[4,0,0]);
GLTFLOADER.LoadAnimated('Model/people/ppl1.gltf',[4,0,2]);
GLTFLOADER.LoadAnimated('Model/people/ppl2.gltf',[4,0,-2]);
GLTFLOADER.LoadAnimated('Model/people/ppl3.gltf',[-4,0,-2]);
GLTFLOADER.LoadAnimated('Model/people/ppl4.gltf',[-4,0,-1]);
GLTFLOADER.LoadAnimated('Model/people/ppl5.gltf',[-2,0,3]);
GLTFLOADER.LoadAnimated('Model/people/ppl6.gltf',[2,0,3]);
GLTFLOADER.LoadAnimated('Model/people/ppl7.gltf',[1,0,4]);
GLTFLOADER.LoadAnimated('Model/people/ppl8.gltf',[1,0,-4]);
GLTFLOADER.LoadAnimated('Model/people/ppl9.gltf',[-1,0,-4]);
GLTFLOADER.LoadAnimated('Model/people/ppl10.gltf',[0,0,-4]);
GLTFLOADER.LoadAnimated('Model/people/ppl11.gltf',[-3,0,5]);
GLTFLOADER.LoadAnimated('Model/people/ppl12.gltf',[1.5,0,-3]);
GLTFLOADER.LoadAnimated('Model/people/ppl13.gltf',[0,0,3]);
GLTFLOADER.LoadAnimated('Model/people/ppl14.gltf',[-3,0,0]);
GLTFLOADER.LoadAnimated('Model/people/ppl15.gltf',[3,0,-2.5]);
GLTFLOADER.LoadAnimated('Model/people/ppl16.gltf',[2.5,0,2.5]);

Window.animateTime;
 

