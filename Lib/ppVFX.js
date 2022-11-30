
import { RenderPass } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SAOPass } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/SAOPass.js';
import { GUI } from 'https://unpkg.com/three@0.146.0/examples/jsm/libs/lil-gui.module.min.js';
import { BokehPass } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/BokehPass.js';
export var saoPass;
const postprocessing = {
    focus:20,
    aperture:8* 0.00001,
    maxblur: 0.1

};

const effectController = {

    focus: 20,
    aperture:10* 0.00001,
    maxblur: 0.01

};



const renderScene = new RenderPass( window.threeCore.scene,  window.threeCore.camera );
//const gui = new GUI();


export function PPVFX_Bloom(edit =false){  
    
  const  bloomPass = new UnrealBloomPass( new window.threeCore.THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
if(edit){
    const params = {
        exposure: 1,
        bloomStrength: 1.8,
        bloomThreshold: 0,
        bloomRadius: 0
    };

    gui.add( params, 'bloomThreshold', 0.0, 1.0 ).onChange( function ( value ) {

        bloomPass.threshold = Number( value );

    } );

    gui.add( params, 'bloomStrength', 0.0, 3.0 ).onChange( function ( value ) {

        bloomPass.strength = Number( value );

    } );

    gui.add( params, 'bloomRadius', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {

        bloomPass.radius = Number( value );

    } );
}else{
    bloomPass.threshold = 0.7;
    bloomPass.strength =1.5;
    bloomPass.radius =0.5;
}


//window.threeCore.renderer.toneMappingExposure = Math.pow(1, 8.0 );
//window.composer = 
window.composer.addPass( renderScene );
window.composer.addPass( bloomPass );


}
export function PPVFX_SAO(edit=false)
{
    saoPass = new SAOPass( window.threeCore.scene,  window.threeCore.camera , false, true );
    if(edit){

        gui.add( saoPass.params, 'saoBias', - 1, 1 );
        gui.add( saoPass.params, 'saoIntensity', 0, 0.01 );
        gui.add( saoPass.params, 'saoScale', 0, 10 );
        gui.add( saoPass.params, 'saoKernelRadius', 1, 100 );
        gui.add( saoPass.params, 'saoMinResolution', 0, 0.05 );
        gui.add( saoPass.params, 'saoBlur' );
        gui.add( saoPass.params, 'saoBlurRadius', 0, 200 );
        gui.add( saoPass.params, 'saoBlurStdDev', 0.5, 150 );
        gui.add( saoPass.params, 'saoBlurDepthCutoff', 0.0, 0.1 );
    }else{
 //saoPass.params.output =SAOPass.OUTPUT.SAO;
  saoPass.params.saoBias = 0.5;
  saoPass.params.saoIntensity = 0.02;
  saoPass.params.saoScale =2;
  saoPass.params.saoKernelRadius = 90;
  saoPass.params.saoMinResolution =0.025;
  saoPass.params.saoBlur = true;
  saoPass.params.saoBlurRadius =15;
  saoPass.params.saoBlurStdDev = 10;
  saoPass.params.saoBlurDepthCutoff = 0.001; 
    }
   
    
   
 
    window.composer.addPass( saoPass );
}
export function PPVFX_boka(){
    initPostprocessing();
       
}
function initPostprocessing(edit=false) {

    postprocessing.composer = window.composer;
   

    postprocessing.bokeh  = new BokehPass( window.threeCore.scene,  window.threeCore.camera , {
        focus: postprocessing.focus,
        aperture: postprocessing.aperture,
        maxblur: postprocessing.maxblur
    } );
    
    if(edit){
        gui.add( effectController, 'focus', 1, 300.0, 10 ).onChange( matChanger );
        gui.add( effectController, 'aperture', 0, 10, 0.1 ).onChange( matChanger );
        gui.add( effectController, 'maxblur', 0.0, 0.01, 0.001 ).onChange( matChanger );
        gui.close();
    }
   

   // composer.addPass( renderPass );
    window.composer.addPass( postprocessing.bokeh  );

   

}
const matChanger = function ( ) {

    postprocessing.bokeh.uniforms[ 'focus' ].value = effectController.focus;
    postprocessing.bokeh.uniforms[ 'aperture' ].value = effectController.aperture * 0.00001;
    postprocessing.bokeh.uniforms[ 'maxblur' ].value = effectController.maxblur;

};
