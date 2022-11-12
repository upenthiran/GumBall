export function CreatePolyCircle({radius =10 , segments =32, thetaStart =0, thetaLength =10,color= 0xffff00,rotation=0}){
const geometry = new window.threeCore.THREE.CircleGeometry( radius, segments,thetaStart,thetaLength );
const material = new window.threeCore.THREE.MeshPhongMaterial( { color: color , depthWrite: false} );
const circle = new window.threeCore.THREE.Mesh( geometry, material );
circle.rotation.x = - Math.PI / 2;
circle.receiveShadow = true;
 return circle;
}