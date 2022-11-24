let reqAnimationId;
let  pos = new window.threeCore.THREE.Vector3(5,5,5);
let timescale = 0.01
export function cameraAnimate() {
  
     window.threeCore.camera.position.lerp(pos, timescale);
    window.RenderFrame
  
    console.log(  window.threeCore.camera.position.getSpeedSquared);
    requestAnimationFrame(cameraAnimate);
}
export function MaincameraAnimation(slid)
{
    var slidTarget = new window.threeCore.THREE.Vector3(slid.posArray[0],slid.posArray[1]+2,slid.posArray[2]+2);
   window.threeCore.controls.target.set(slid.posArray[0],3,0);
    pos =slidTarget;
}