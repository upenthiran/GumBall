import { GLTFLoader } from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/GLTFLoader.js';

export function LoadStatic(scene ,URL){

    let loader = new GLTFLoader();
    loader.load( URL, function ( gltf ) {

        scene.add( gltf.scene );

        window.RenderFrame;

    } );
}
export async function LoadAnimated(THREE, scene ,URL,MIXterList,pos=[0,0,0]){
    let mixer
    let loader = await new GLTFLoader();
    loader.load( URL, function ( gltf ) {

       const model =  gltf.scene;
       model.position.set(pos[0],pos[1],pos[2]);
        
        scene.add( gltf.scene );
       

        
        mixer =  new THREE.AnimationMixer( gltf.scene );
        mixer.clipAction( gltf.animations[ 0 ] ).play();
        MIXterList.push(mixer);
        
        window.RenderFrame;
      
        
    } );

   
   ;
}