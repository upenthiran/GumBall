export function CreatePolyCircle({radius =10 , segments =32, thetaStart =0, thetaLength =10,color= 0xffff00,rotation=0}){
const geometry = new window.threeCore.THREE.CircleGeometry( radius, segments,thetaStart,thetaLength );
const material = new window.threeCore.THREE.MeshPhongMaterial( { color: color , depthWrite: false} );
const circle = new window.threeCore.THREE.Mesh( geometry, material );
circle.rotation.x = - Math.PI / 2;
circle.receiveShadow = true;
 return circle;
}
export function CreateGroundPlan(size_x=5000,size_y=5000)
{
    const mesh = new window.threeCore.THREE.Mesh( new window.threeCore.THREE.PlaneGeometry( size_x,size_y ), new window.threeCore.THREE.MeshStandardMaterial( { color: new threeCore.THREE.Color( "hsl(278, 20%, 50%)"),roughness :1, depthWrite: false } ) );
				mesh.rotation.x = - Math.PI / 2;
				mesh.receiveShadow = true;
                return mesh;
}