import { createCamera } from "./components/camera.js";
import { createCube, createBasicCube, miniCube } from "./components/cube.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";
import {
  createAmbientLight,
  createDirectionalLight,
  createPointLight,
} from "./components/lights.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

let camera;
let renderer;
let scene;
let light;
let loop;
class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
    // -------------------------------- Lights    
    light = createDirectionalLight(8);
    light.position.set(0,5,1);
    camera.add(light);

    const {ambientLight, hemisphereLight } = createAmbientLight(8, 5);
    const pointLightOne = createPointLight();
    // -------------------------------- Loop Init    
    loop = new Loop(camera, scene,renderer);

    // -------------------------------- Controls    
    const controls = createControls(camera, renderer.domElement);
    // -------------------------------- Meshes    
    const cube = new createCube();
    const basicCube = new createCube("/assets/textures/uv-test-col.png");
    const sphere = new createSphere();
    basicCube.position.set(1.5, 0, 0);
    sphere.position.set(0,0,2)
    basicCube.add(sphere);
    cube.position.set(-1.5, 0, 0);
    loop.updatables.push(controls);
    scene.add(camera,cube, basicCube);
    // scene.add(sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  stop(){
    loop.stop();
  }
}

export { World };
