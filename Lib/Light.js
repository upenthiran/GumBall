export function CreateHemiLight()
{
    const hemiLight = new window.threeCore.THREE.HemisphereLight( 0x6FD8FF, 0x444444 );
hemiLight.position.set( 0, 30,30 );
hemiLight.intensity =(0.9);
return  hemiLight;
}

export function CreateDirectionalLight(pos={x:1, y:1, z:1},color=0xffff,intensity=0.25){
    const dirLight = new window.threeCore.THREE.DirectionalLight(color);
    const params = { 
        'intensity': intensity,
        'castShadow': true,
        'near': 0.1,
        'far': 500,
        'right': 17,
        'left': -17,
        'top': 17,
        'bottom': -17,
        'width': 512,
        'height': 512,
        'radius': 100,
        'blurSamples':1,
        'bias': - 0.0005,
     };
    let DIrectionalLightObjectr ={'light':dirLight,'para':params};


    dirLight.position.set(pos.x,pos.y,pos.z );
    Dlightupdate(DIrectionalLightObjectr);

    return dirLight;
}


function Dlightupdate(lightObject){
    const dirLight = lightObject.light;
    const params=lightObject.para;
    dirLight.intensity = params.intensity;
    dirLight.castShadow = params.castShadow;
    dirLight.shadow.camera.near =params.near;
    dirLight.shadow.camera.far = params.far;
    dirLight.shadow.camera.right =params.right;
    dirLight.shadow.camera.left =params.left;
    dirLight.shadow.camera.top	= params.top;
    dirLight.shadow.camera.bottom = params.bottom;
    dirLight.shadow.mapSize.width = params.width;
    dirLight.shadow.mapSize.height = params.height;
    dirLight.shadow.radius =params.radius;
    dirLight.shadow.blurSamples=params.blurSamples;
    dirLight.shadow.bias = params.bias;
}