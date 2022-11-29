export function CreateHemiLight()
{
    const hemiLight = new window.threeCore.THREE.HemisphereLight( 0x9ec3ff, 0x282466 );
hemiLight.position.set( 0, 30,30 );
hemiLight.intensity =(1);
return  hemiLight;
}

export function CreateDirectionalLight(pos={x:1, y:1, z:1},color=0xffff,intensity=0.75, castShadow=true,){
    const dirLight = new window.threeCore.THREE.DirectionalLight(color);
    const params = { 
        'intensity': intensity,
        'castShadow': castShadow,
        'near': 0.01,
        'far': 1000,
        'right': 20,
        'left': -20,
        'top': 20,
        'bottom': -20,
        'width': 1080,
        'height': 1080,
        'radius': 5,
        'blurSamples':10,
        'bias': 0.5,
     };
    let DIrectionalLightObjectr ={'light':dirLight,'para':params};


    dirLight.position.set(pos.x,pos.y,pos.z );
    Dlightupdate(DIrectionalLightObjectr);

    return dirLight;
}
export function CreateSpotLight(pos={x:1, y:1, z:1},color=0xffff,intensity=0.75, castShadow=true, angle=(Math.PI / 2),penumbra=0.4){
    const spotLigt = new window.threeCore.THREE.SpotLight(color);
    const params = { 
        'intensity': intensity,
        'castShadow': castShadow,
        'near': 0.01,
        'far': 2000,
        'right': 20,
        'left': -20,
        'top': 20,
        'bottom': -20,
        'width': 1080,
        'height': 1080,
        'radius': 5,
        'blurSamples':10,
        'bias': 0.5,
     };
    let DIrectionalLightObjectr ={'light':spotLigt,'para':params};


    spotLigt.position.set(pos.x,pos.y,pos.z );
    Dlightupdate(DIrectionalLightObjectr);
    spotLigt.angle = angle;
    spotLigt.penumbra = penumbra;
    
    return spotLigt;
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