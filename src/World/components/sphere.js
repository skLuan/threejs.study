import {
  Mesh,
  Color,
  MeshBasicMaterial,
SphereGeometry,
} from "../../../node_modules/three/build/three.module.js";

function createSphere() {
  const _color = "papayawhip";
  const color = new Color(_color);
const material = new MeshBasicMaterial({'color': color});
// const material = new MeshBasicMaterial();
const geometry = new SphereGeometry(2 ,5, 4);
  const sphere = new Mesh(geometry, material);
  return sphere;
}

export { createSphere };