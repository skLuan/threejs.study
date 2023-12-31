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
import { helpers } from "./systems/helpers.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";
import { createGroup, createMeshGroup } from "./components/meshGroup.js";
import { Train } from "./components/Train/Train.js";

let camera;
let renderer;
let scene;
let light;
let loop;
let cubeGroup;
let train;
class World {
  constructor(container) {
    // -------------------------------- Helpers
    const helper = helpers();    

    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
    train = new Train();
    // -------------------------------- Lights    
    light = createDirectionalLight(8);
    light.position.set(0,5,1);
    camera.add(light);

    const {ambientLight, hemisphereLight } = createAmbientLight(8, 5);
    const pointLightOne = createPointLight();
    // -------------------------------- Loop Init    
    loop = new Loop(camera, scene,renderer);
    // ----------------------------------------------- Group
    const groupCircles = createMeshGroup();
    // -------------------------------- Controls    
    const controls = createControls(camera, renderer.domElement);
    // -------------------------------- Meshes    
    const cube = new createCube();
    const basicCube = new createCube("white","/assets/textures/uv-test-col.png");
    const sphere = new createSphere();
    cubeGroup = createGroup();
    basicCube.position.set(1.5, 0, 0);
    sphere.position.set(0,0,2)
    basicCube.add(sphere);
    cube.position.set(-1.5, 0, 0);
    cubeGroup.add(cube, basicCube);

    loop.updatables.push(controls, groupCircles, train);
    scene.add(camera, hemisphereLight, groupCircles, train, helper);
    // scene.add(sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  keyBoardKeys() {
      window.addEventListener("keypress", (e) => {
        // console.log(e.key);
        switch (e.key) {
          case " ":
            console.log("espacio");
            cubeGroup.visible = !cubeGroup.visible;
            break;
          default:
            break;
        }
      });
  }
  render() {
    renderer.render(scene, camera);
  }
  start() {
    this.keyBoardKeys();
    loop.start();
  }
  stop(){
    loop.stop();
  }
}

export { World };
