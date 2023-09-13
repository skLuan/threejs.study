import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

let camera;
let renderer;
let scene;
class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = new createCube();
    const cube2 = new createCube();
    const sphere = new createSphere();
    scene.add(cube2);
    cube2.position.set(-1,1,0);
    // scene.add(sphere);

    const resizer = new Resizer(container,camera,renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}

export { World };
