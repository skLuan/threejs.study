import {
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
} from "../../../node_modules/three/build/three.module.js";

function createCube() {
const material = new MeshBasicMaterial();
const geometry = new BoxGeometry(2 ,2, 2);
  const cube = new Mesh(geometry, material);
  return cube;
}

export { createCube };