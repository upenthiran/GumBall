import { GLTFLoader } from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/DRACOLoader'
let modelLoaded =0;
let modelloading =0;
 var Slids =[];

var SlidNumber=0;
export function LoadStatic(URL){

    let loader = new GLTFLoader();
    loader.load( URL, function ( gltf ) {

        window.threeCore.scene.add( gltf.scene );

        window.RenderFrame;

    } );
}
export async function LoadAnimated( URL,pos=[0,0,0],castShadow =true){
 // totalLoadIdem++;
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('./Model/cash/')
  
    let loader = await new GLTFLoader();
    loader.setDRACOLoader(dracoLoader)
    
   await loader.load( URL, function ( gltf ) {
       const model =  gltf.scene;
      
       model.traverse( function ( object ) {

        if ( object.isMesh )
         {
            object.castShadow = true;
            object.receiveShadow = true;
        
           // console.log("boj shadow : "+  object.castShadow);
        }

    } );

       
       model.position.set(pos[0],pos[1],pos[2]);
        
       window.threeCore.scene.add( model );
       

       if(gltf.animations. length>=1){
      let  mixer =  new window.threeCore.THREE.AnimationMixer( gltf.scene );
     for (let i = 0; i < gltf.animations.length; i++) {
      mixer.clipAction(gltf.animations[i]).play();
      
     }
       // mixer.clipAction( gltf.animations[ 0 ] ).play();
       // mixer.clipAction( gltf.animations[ 1 ] ).play();
        threeCore.MixerList.push(mixer);
      }
        
        
        window.RenderFrame;
      
        
    },
    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}, );

   
   
}
export async function LoadCompressedAnimated( URL,pos=[0,0,0],castShadow =true){
 // totalLoadIdem++;
 let given = false;

  let loader = await new GLTFLoader(window.threeCore.manager);
  loader.load( URL, function ( gltf ) {
     const model =  gltf.scene;
    
     model.traverse( function ( object ) {

      if ( object.isMesh )
       {
          object.castShadow = true;
          object.receiveShadow = true;
      
          console.log("boj shadow : "+  object.castShadow);
      }

  } );

     
     model.position.set(pos[0],pos[1],pos[2]);
      
     window.threeCore.scene.add( model );
     

     if(gltf.animations. length>=1){
    let  mixer =  new window.threeCore.THREE.AnimationMixer( gltf.scene );
   for (let i = 0; i < gltf.animations.length; i++) {
    mixer.clipAction(gltf.animations[i]).play();
    
   }
     // mixer.clipAction( gltf.animations[ 0 ] ).play();
     // mixer.clipAction( gltf.animations[ 1 ] ).play();
      threeCore.MixerList.push(mixer);
    }
      
      
      window.RenderFrame;
    
      
  },
  function ( xhr ) {
    if(!given){
      modelLoaded++;
      
      given =true;
    }
    modelloading += ( xhr.loaded / xhr.total * 100 );
  //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  console.log( modelloading );
  console.log( modelLoaded );
 

},
console.log( "LOAded " )

);

 
 
}


function getSlidPotion(){
  let pos = [(Slids.length *20), 0, 0];
  return pos;
}