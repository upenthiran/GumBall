import { RGBELoader } from 'three/addon/loaders/RGBELoader.js';
export function CreateHDR(URL ){
    new RGBELoader()

    .load( URL, function ( texture ) {

        texture.mapping =  window.threeCore.THREE.EquirectangularReflectionMapping;

        window.threeCore.scene.background = texture;
        window.threeCore.scene.environment = texture;

        window.RenderFrame;
    } );


}
