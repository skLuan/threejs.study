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
function createDefaultSphere(
  args = { radius: 1, segments: 16, color: "papayawhip" }
) {
  // args.mt === null || args.mt === undefined ? (args.mt = _mt) : "";
  // args.width === null || args.width === undefined ? (args.width = _mt) : "";
  // args.height === null || args.height === undefined ? (args.height = _mt) : "";
  // args.segments === null || args.segments === undefined ? (args.segments = _mt) : "";
  const stringMat = "/assets/textures/uv-test-col.png";
  const material = createMaterial(args.color);
  console.log(material);
  // const emissiveMap = loadTexture("/assets/textures/uv-test-bw.png");
  // material.lightMap = emissiveMap;
  const geometry = new SphereGeometry(
    args.radius,
    args.segments,
    args.segments
  );
  const sphere = new Mesh(geometry, material);
  sphere.tick = (delta) => {};
  return sphere;
}

export { createSphere, createDefaultSphere };
