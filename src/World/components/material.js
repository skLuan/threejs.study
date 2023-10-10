import { TextureLoader, MeshStandardMaterial } from "/node_modules/three/build/three.module.js";
function createMaterial(_color = null, _map = null) {
  const textureLoader = new TextureLoader();
  // create a texture loader.
  let args = {};
  _color !== null ? (args.color = _color) : "";
  if (_map !== null) {
    const texture = textureLoader.load(_map);
    args.map = texture;
  }
  
  const material = new MeshStandardMaterial(args);
  return material;
}

function loadTexture(imgUrl = ''){
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(imgUrl);
  return texture;
}
export { createMaterial, loadTexture };