import * as int from'./Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as PPVFX from './Lib/ppVFX.js';

const listOfPPLGroup = [
    "Model/talk_Group/GP0.gltf",
    "Model/talk_Group/GP1.gltf",
    "Model/talk_Group/GP2.gltf",
]
Arbutton();
console.log(int.platform);
CreateLigting();
crateModel();
int.CreateOrbitCamera();
CratePPVFX();
CrateEnvironment();




Window.animateTime;
 
function CreateLigting() {
    const targetObject = new window.threeCore.THREE.Object3D();
targetObject.position.set(0,8,0);

window.threeCore.scene.add(targetObject);
const dirLight = Lights.CreateDirectionalLight( {x:-0.5,y:10,z:10}, 0xffffff,0.8,true,Math.PI/3,0.3);
const backblue = Lights.CreateSpotLight( {x:0,y:6,z:-5}, 0x75b8ff,20.8,false,Math.PI/3,0.3);
const sideorange = Lights.CreateSpotLight( {x:20,y:4,z:-1}, 0xff9c40,50.8,false,Math.PI/3,0.3);
const frontHilight = Lights.CreateSpotLight( {x:-8,y:5,z:10}, 0xffffff,40.1,false,Math.PI/3,0.3);

backblue.target  = targetObject;
sideorange.target  = targetObject;
frontHilight.target = targetObject;




window.threeCore.scene.add( dirLight );
window.threeCore.scene.add( backblue );
window.threeCore.scene.add( frontHilight );
window.threeCore.scene.add( sideorange );
}
function CratePPVFX(){
    PPVFX.PPVFX_Bloom();
    //PPVFX.PPVFX_SAO();
    PPVFX.PPVFX_boka();
}
function CrateEnvironment(){
    RGBLoader.CreateHDR({URL:'hdr/blueSky.png'},false);


    const mesh = GEO.CreateGroundPlan();
    
    
    window.threeCore.scene.add( mesh );
}

function crateModel()
{
    GLTFLOADER.LoadCompressedAnimated('Model/chrismas_Card/test2.gltf',[0,-0,0]);

   /*  if(int.platform!=="Win32"){
        listOfPPLGroup.forEach(path => {
            GLTFLOADER.LoadCompressedAnimated(path,[0,0,0]);
            
        });
    }else{ */
        const randomIndex = Math.floor(Math.random() * listOfPPLGroup.length);
        console.log(randomIndex);
        GLTFLOADER.LoadCompressedAnimated(listOfPPLGroup[randomIndex],[0,0,0]);
        

 //   }
   
}
function Arbutton(){
    const AR_button = document.getElementById('AR_BT');
    AR_button.textContent = int.platform;
    AR_button.addEventListener("click", function() {
    if(int.platform==="Android")
    {
      
      
           window.location = "intent://arvr.google.com/scene-viewer/1.0?file=http://192.168.1.86:8080/Model/AR/AR-and.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;"
        
    }else if(int.platform==="iOS"){
        window.location ="Model/AR/AR-ios.usdz";
    }else{
        window.location ="https://www.google.com.au/"
    }
});
}