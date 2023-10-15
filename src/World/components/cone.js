import {
  Mesh,
  Color,
  MeshBasicMaterial,
  ConeGeometry,
} from "/node_modules/three/build/three.module.js";
import { createMaterial, loadTexture } from "./material.js";

function createCone(radius = 1, segments = 16, _color = "papayawhip") {
  const material = createMaterial(_color);
  // const emissiveMap = loadTexture("/assets/textures/uv-test-bw.png");
  // material.lightMap = emissiveMap;
  const geometry = new ConeGeometry(radius,1, segments, segments);
  const cone = new Mesh(geometry, material);
  return cone;
}

export { createCone };
