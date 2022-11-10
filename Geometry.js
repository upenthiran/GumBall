export function CreatePolyCircle(radius =10 , segments =32, thetaStart =0, thetaLength =10,color= 0xffff00){
const geometry = new window.threeCore.THREE.CircleGeometry( radius, segments,thetaStart,thetaLength );
const material = new window.threeCore.THREE.MeshBasicMaterial( { color: color } );
const circle = new window.threeCore.THREE.Mesh( geometry, material );
 return circle;
}