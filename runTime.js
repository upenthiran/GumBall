import './int.js';
import * as RGBLoader from './RGBELoader.js';
import * as GLTFLOADER from './GLTFLoader.js';



RGBLoader.CreateHDR('hdr/studio.hdr');
 
for (let i = 0; i < 10; i++) {

    const xval = Math.random()*3;
    const yval = Math.random()*3;
    GLTFLOADER.LoadAnimated('Model/m3.gltf',[xval,0,yval]);
} 


Window.animateTime;
 
;
