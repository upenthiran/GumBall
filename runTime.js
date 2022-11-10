import * as INT from './int.js';
import * as RGBLoader from './RGBELoader.js';
import * as GLTFLOADER from './GLTFLoader.js';



RGBLoader.CreateHDR(INT.THREE,INT.scene,'hdr/studio.hdr');

for (let i = 0; i < 10; i++) {

    const xval = Math.random()*3;
    const yval = Math.random()*3;
    GLTFLOADER.LoadAnimated(INT.THREE,INT.scene,'Model/m3.gltf',INT.MixerList,[xval,0,yval]);
}



INT.animate();

;
