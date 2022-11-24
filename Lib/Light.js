export function CreateHemiLight()
{
    const hemiLight = new window.threeCore.THREE.HemisphereLight( 0x6FD8FF, 0x444444 );
hemiLight.position.set( 0, 30,30 );
hemiLight.intensity =(0.3);
return  hemiLight;
}

export function CreateDirectionalLight(pos={x:1, y:1, z:1},color=0xffff){
    const dirLight = new window.threeCore.THREE.DirectionalLight(color);
    dirLight.position.set(pos.x,pos.y,pos.z );
    dirLight.intensity =0.2;
    
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 500;
    dirLight.shadow.camera.right = 17;
    dirLight.shadow.camera.left = - 17;
    dirLight.shadow.camera.top	= 17;
    dirLight.shadow.camera.bottom = - 17;
    dirLight.shadow.mapSize.width = 512;
    dirLight.shadow.mapSize.height = 512;
    dirLight.shadow.radius = 100;
    dirLight.shadow.blurSamples=1;
    dirLight.shadow.bias = - 0.0005;
   // dirLight.shadow.camera.
    return dirLight;
}