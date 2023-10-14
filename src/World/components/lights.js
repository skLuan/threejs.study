import {
  DirectionalLight,
  Color,
  PointLight,
  AmbientLight,
  HemisphereLight,
} from "/node_modules/three/build/three.module.js";

function createDirectionalLight(intensity = 5, _color = "white") {
  const color = new Color(_color);
  const light = new DirectionalLight(color.getHex, intensity);
  light.position.set(10, 10, 10);
  return light;
}

function createPointLight() {
  const _color = "fuchsia";
  const color = new Color(_color);
  const light = new PointLight(color.getHexString, 500);
  light.position.set(4, 10, 10);
  return light;
}

function createAmbientLight(
  ambientIntensity = 2,
  hemisphereIntensity = 2,
  _color = "white"
) {
  const color = new Color(_color);
  const ambientLight = new AmbientLight(color.getHexString, ambientIntensity);
  const hemisphereLight = new HemisphereLight(
    color.getHexString,
    hemisphereIntensity
  );
  return { ambientLight, hemisphereLight };
}

export { createDirectionalLight, createPointLight, createAmbientLight };
