
import { RenderPass } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://unpkg.com/three@0.146.0/examples/jsm/postprocessing/UnrealBloomPass.js';


export function PPVFX_Bloom(){

    
    const renderScene = new RenderPass( window.threeCore.scene,  window.threeCore.camera );

const bloomPass = new UnrealBloomPass( new window.threeCore.THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
bloomPass.threshold = 0.5;
bloomPass.strength =1.5;
bloomPass.radius =0.5;
window.threeCore.renderer.toneMappingExposure = Math.pow(1, 8.0 );
//window.composer = 
window.composer.addPass( renderScene );
window.composer.addPass( bloomPass );
console.log("runing Composer");
console.log(window.composer);

}
