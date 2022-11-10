import { GLTFLoader } from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/GLTFLoader.js';

export function LoadStatic(URL){

    let loader = new GLTFLoader();
    loader.load( URL, function ( gltf ) {

        window.threeCore.scene.add( gltf.scene );

        window.RenderFrame;

    } );
}
export async function LoadAnimated( URL,pos=[0,0,0]){
   
    let loader = await new GLTFLoader();
    loader.load( URL, function ( gltf ) {

       const model =  gltf.scene;
       model.position.set(pos[0],pos[1],pos[2]);
        
       window.threeCore.scene.add( gltf.scene );
       

        
      let  mixer =  new window.threeCore.THREE.AnimationMixer( gltf.scene );
        mixer.clipAction( gltf.animations[ 0 ] ).play();
        threeCore.MixerList.push(mixer);
        
        window.RenderFrame;
      
        
    },
    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}, );

   
   
}