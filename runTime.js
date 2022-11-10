import './int.js';
import * as RGBLoader from './RGBELoader.js';
import * as GLTFLOADER from './GLTFLoader.js';
import * as GEO from './Geometry.js';


RGBLoader.CreateHDR('hdr/studio.hdr');
const directionalLight = new window.threeCore.THREE.DirectionalLight( 0xffffff, 0.1 );
window.threeCore.scene.add( directionalLight );
window.threeCore.scene.add(GEO.CreatePolyCircle(5));
 
for (let i = 0; i < 4; i++) {

    const xval = Math.random()*10;
    const yval = Math.random()*10;
    GLTFLOADER.LoadAnimated('Model/m3.gltf',[xval,0,yval]);
} 


Window.animateTime;
 
;
