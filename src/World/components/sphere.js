import {
  Mesh,
  Color,
  MeshBasicMaterial,
  SphereGeometry,
} from "/node_modules/three/build/three.module.js";
import { createMaterial, loadTexture } from "./material.js";

function createSphere(radius = 1, segments = 16, _color = "papayawhip") {
  const material = createMaterial(_color, "/assets/textures/uv-test-col.png");
  const emissiveMap = loadTexture("/assets/textures/uv-test-bw.png");
  material.lightMap = emissiveMap;
  const geometry = new SphereGeometry(radius, segments, segments);
  const sphere = new Mesh(geometry, material);
  return sphere;
}

export { createSphere };
