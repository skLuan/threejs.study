import {
  Mesh,
  MeshMatcapMaterial,
  MeshStandardMaterial,
  BoxGeometry,
} from "../../../node_modules/three/build/three.module.js";
function gradosARadianes(grados) {
  return (grados * Math.PI) / 180;
}
const _mt = 1.5;
function createCube() {
  const _color = "cornsilk";
  const material = new MeshStandardMaterial({ color: _color });
  const geometry = new BoxGeometry(_mt, _mt, _mt);
  const cube = new Mesh(geometry, material);
  cube.rotateX(gradosARadianes(45));
  cube.rotateY(gradosARadianes(45));
  // cube.rotateZ(gradosARadianes(45));
  return cube;
}
function createBasicCube() {
  const material = new MeshMatcapMaterial();
  const geometry = new BoxGeometry(_mt, _mt, _mt);
  const cube = new Mesh(geometry, material);
  cube.rotateX(gradosARadianes(45));
  cube.rotateY(gradosARadianes(45));
  return cube;
}

export { createCube, createBasicCube };
