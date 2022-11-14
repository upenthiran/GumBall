import { RGBELoader } from 'three/addon/loaders/RGBELoader.js';
export function CreateHDR({URL, BackGround = true, BGLight =true} ){
    new RGBELoader().load( URL, function ( texture ) {

        texture.mapping =  window.threeCore.THREE.EquirectangularReflectionMapping;
        if(BackGround){
            window.threeCore.scene.background = texture;
            window.threeCore.scene.backgroundBlurriness = 10;
        }
       if(BGLight){
        window.threeCore.scene.environment = texture;
       }
        
        window.RenderFrame;
    });


}
