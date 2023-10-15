import {
  Mesh,
  MeshMatcapMaterial,
  MeshStandardMaterial,
  BoxGeometry,
  MathUtils,
} from "/node_modules/three/build/three.module.js";
import { createMaterial, loadTexture } from "./material.js";
function gradosARadianes(grados) {
  return MathUtils.degToRad(grados);
}
const _mt = 1.5;

function miniCube() {
  // -------- mini cube
  const geometryMini = new BoxGeometry(0.4, 0.4, 0.4);
  const materialMini = createMaterial('pink');
  const texture = loadTexture("/assets/textures/uv-test-bw.png");
  materialMini.metalnessMap = texture;
  materialMini.metalness = 0.5;
  const miniCube = new Mesh(geometryMini, materialMini);

  miniCube.position.set(0, 2, 0);
  miniCube.rotation.set(gradosARadianes(30), 0, -1);

  miniCube.tick = (delta) => {
    const rotation = gradosARadianes(360);
    miniCube.rotation.z -= rotation * delta;
    miniCube.rotation.x -= rotation * delta;
    miniCube.rotation.y -= rotation * delta;

    // miniCube.position.x += 1*delta;
  };
  return miniCube;
}



function createCube(texture = "/assets/textures/uv-test-bw.png") {
  const material = createMaterial(
    "cornsilk",
    texture
  );
  const geometry = new BoxGeometry(_mt, _mt, _mt);
  const cube = new Mesh(geometry, material);

  cube.tick = (delta) => {
    const rotation = gradosARadianes(3.6);
    cube.rotation.z += rotation * delta;
    cube.rotation.x += rotation * delta;
    cube.rotation.y += rotation * delta;
  };
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "l":
        break;

      default:
        break;
    }
  });

  cube.rotation.set(gradosARadianes(45), gradosARadianes(45), 0);
  cube.add(miniCube());
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

export { createCube, createBasicCube, miniCube };
