import { RGBELoader } from 'three/addon/loaders/RGBELoader.js';
export function CreateHDR({URL, BackGround = true, BGLight =true, HDR=false} ){

    if(HDR){
    new RGBELoader().load( URL, function ( texture ) {

        texture.mapping =  window.threeCore.THREE.EquirectangularReflectionMapping;
        if(BackGround){
            window.threeCore.scene.background = texture;
            window.threeCore.scene.backgroundBlurriness = 0.1;
        }
       if(BGLight){
        window.threeCore.scene.environment = texture;
       }
     window.threeCore.renderer.toneMappingExposure = 0.5;
        window.RenderFrame;
    });

    }else{
        new window.threeCore.THREE.TextureLoader().load( URL, function ( texture ) {

            texture.mapping =  window.threeCore.THREE.EquirectangularReflectionMapping;
            if(BackGround){
                window.threeCore.scene.background = texture;
                window.threeCore.scene.backgroundBlurriness = 0.1;
            }
           if(BGLight){
            window.threeCore.scene.environment = texture;
           }
         window.threeCore.renderer.toneMappingExposure = 0.5;
            window.RenderFrame;
        });

    }
}
