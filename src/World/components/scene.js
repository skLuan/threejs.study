import {
  Color,
  Scene,
} from "../../../node_modules/three/build/three.module.js";

function createScene(){
const _color = 'skyblue';

const scene = new Scene();
scene.background = new Color(_color);
return scene;
}
export {createScene}