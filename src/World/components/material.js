import { TextureLoader, MeshStandardMaterial } from "/node_modules/three/build/three.module.js";
function createMaterial(_color = null, _map = null) {
  // create a texture loader.
  const textureLoader = new TextureLoader();
  let args = {};
  _color !== null ? (args.color = _color) : "";
  if (_map !== null) {
    const texture = textureLoader.load(_map);
    args.map = texture;
  }

  const material = new MeshStandardMaterial(args);
  return material;
}
export {createMaterial}