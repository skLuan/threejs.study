import {
  Mesh,
  Color,
  MeshBasicMaterial,
  SphereGeometry,
} from "/node_modules/three/build/three.module.js";
import { createMaterial } from "./material.js";
function createSphere() {
  const material = createMaterial(
    "papayawhip",
    "/assets/textures/uv-test-col.png"
  );
  const geometry = new SphereGeometry(0.5, 20, 5);
  const sphere = new Mesh(geometry, material);
  return sphere;
}

export { createSphere };
