import * as int from'./Lib/int.js';
import * as RGBLoader from './Lib/RGBELoader.js';
import * as GLTFLOADER from './Lib/GLTFLoader.js';
import * as GEO from './Lib/Geometry.js';
import * as Lights from './Lib/Light.js';
import * as PPVFX from './Lib/ppVFX.js';



int.CreateOrbitCamera();

	/* 			gui.add( saoIntensity, 'saoIntensity', 0, 1 );
				gui.add( saoScale, 'saoScale', 0, 10 );
				gui.add( saoKernelRadius, 'saoKernelRadius', 1, 100 );
				gui.add( saoMinResolution, 'saoMinResolution', 0, 1 );
				gui.add( saoBlur, 'saoBlur' );
				gui.add( saoBlurRadius, 'saoBlurRadius', 0, 200 );
				gui.add( saoBlurStdDev, 'saoBlurStdDev', 0.5, 150 );
				gui.add( saoBlurDepthCutoff, 'saoBlurDepthCutoff', 0.0, 0.1 ); */
RGBLoader.CreateHDR({URL:'hdr/blueSky.hdr'});

const hemiLight = Lights.CreateHemiLight();
window.threeCore.scene.add( hemiLight );

const dirLight = Lights.CreateDirectionalLight( {x:-3.5,y:3,z:-1}, 0xeeeeee,0.1);
//const dirLight0 = Lights.CreateDirectionalLight({x:0,y:2,z:0},0xDABDFC);
window.threeCore.scene.add( dirLight );
PPVFX.PPVFX_Bloom();
PPVFX.PPVFX_SAO();
PPVFX.PPVFX_boka();
const mesh = GEO.CreateGroundPlan();


window.threeCore.scene.add( mesh );


/* for (let i = 0; i < 4; i++) {

    const xval = Math.random()*3;
    const yval = Math.random()*3;
    GLTFLOADER.LoadAnimated('Model/m3.gltf',[xval,0,yval]);
} */
GLTFLOADER.LoadAnimated('Model/chrismas_Card/test2.gltf',[0,-0,0]);

Window.animateTime;
 

