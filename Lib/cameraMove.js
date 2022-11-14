let reqAnimationId;
let  pos = new window.threeCore.THREE.Vector3(5,5,5);
let timescale = 0.01
export function cameraAnimate() {
    // Camera will lerp closer to target on each frame
  
     window.threeCore.camera.position.lerp(pos, timescale);
    window.RenderFrame
    requestAnimationFrame(cameraAnimate);
}
export function MaincameraAnimation(_pos)
{
    pos =_pos;
   window.threeCore.controls.target.set(_pos);

    



}