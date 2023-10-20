import {
  Mesh,
  Color,
  MeshBasicMaterial,
  CylinderGeometry,
} from "/node_modules/three/build/three.module.js";
import { createMaterial, loadTexture } from "./material.js";

function createCylinder(
  args = {
    radiusTop: 8,
    radiusBottom: 8,
    color: "papayawhip",
    height: 1,
    radialSegments: 7,
  }
) {
  const { radiusTop, radiusBottom, color, height, radialSegments } = args;
  const material = createMaterial(color);
  // const emissiveMap = loadTexture("/assets/textures/uv-test-bw.png");
  // material.lightMap = emissiveMap;
  const geometry = new CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments
  );
  const cylinder = new Mesh(geometry, material);
  cylinder.tick = (delta) => {}
  return cylinder;
}

export { createCylinder };
