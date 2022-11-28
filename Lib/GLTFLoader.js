import { GLTFLoader } from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/GLTFLoader.js';

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
   
    let loader = await new GLTFLoader();
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

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}, );

   
   
}
export async function LoadSLid( URL,castShadow =true){
   
  let loader = await new GLTFLoader();
  loader.load( URL, function ( gltf ) {
     const model =  gltf.scene;
    
     model.traverse( function ( object ) {

      if ( object.isMesh )
       {
          object.castShadow = true;
          object.receiveShadow = true;
          
      }

  } );

     let pos =getSlidPotion();
     let Slid = {posArray:pos}
     model.position.set(pos[0],pos[1],pos[2]);
     Slids.push(Slid);
     console.log(pos[0],pos[1],pos[2]);
      
     window.threeCore.scene.add( model );
     

     if(gltf.animations. length>=1){
    let  mixer =  new window.threeCore.THREE.AnimationMixer( gltf.scene );
    
     // mixer.clipAction( gltf.animations[ 0 ] ).play();
      mixer.clipAction( gltf.animations[ 2 ] ).play();
      threeCore.MixerList.push(mixer);
    }
      
      
      window.RenderFrame;
    
      
  },
  function ( xhr ) {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

}, );

}
export function increseSlidNumber()
{ 
 let totalSliders =0;
 totalSliders =Slids.length;

  if(totalSliders>0){
   let tempSlidnumber = (SlidNumber+1)% totalSliders;
    SlidNumber=tempSlidnumber;

  }else{
    SlidNumber=0;
  }
  console.log(SlidNumber);
  return Slids[SlidNumber];

}
function getSlidPotion(){
  let pos = [(Slids.length *20), 0, 0];
  return pos;
}