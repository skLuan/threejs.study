import {
  Mesh,
  Color,
  MeshBasicMaterial,
  SphereGeometry,
} from "/node_modules/three/build/three.module.js";
import { createMaterial, loadTexture } from "./material.js";

function createSphere() {
  const material = createMaterial(
    "papayawhip",
    "/assets/textures/uv-test-col.png"
  );
  const emissiveMap = loadTexture("/assets/textures/uv-test-bw.png");
  material.lightMap = emissiveMap;
  const geometry = new SphereGeometry(0.5, 32);
  const sphere = new Mesh(geometry, material);
  return sphere;
}

export { createSphere };
