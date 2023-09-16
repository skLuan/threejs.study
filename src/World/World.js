import { createCamera } from "./components/camera.js";
import { createCube, createBasicCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";
import {
  createDirectionalLight,
  createPointLight,
} from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

let camera;
let renderer;
let scene;
let light;
class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    light = createDirectionalLight();
    const pointLightOne = createPointLight();
    container.append(renderer.domElement);

    const cube = new createCube();
    const basicCube = new createBasicCube();
    const sphere = new createSphere();
    basicCube.position.set(1.5, 0, 0);
    cube.position.set(-1.5, 0, 0);
    scene.add(cube, basicCube, pointLightOne);
    // scene.add(sphere);

    const resizer = new Resizer(container,camera,renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };
