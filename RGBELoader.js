import { RGBELoader } from 'three/addon/loaders/RGBELoader.js';
export function CreateHDR(THREE ,scene,URL ){
    new RGBELoader()

    .load( URL, function ( texture ) {

        texture.mapping = THREE.EquirectangularReflectionMapping;

        scene.background = texture;
        scene.environment = texture;

        window.RenderFrame;
    } );


}
