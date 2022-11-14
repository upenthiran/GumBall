export function cameraAnimate() {
    // Camera will lerp closer to target on each frame
    
    window.threeCore.camera.position.lerp(new window.threeCore.THREE.Vector3(5,5,5), 0.01);
    window.RenderFrame
    requestAnimationFrame(cameraAnimate);
}