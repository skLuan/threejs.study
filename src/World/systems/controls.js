import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
//   controls.dampingFactor = 0.01;
//   controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  const speed = 1;
//   controls.minDistance = 5;
//   controls.maxDistance = 20;
  controls.tick = () => controls.update();
  window.addEventListener("keypress", (e) => {
    switch (e.key) {
      case "u" || "U":
        console.log('sisaaaa');
        controls.autoRotateSpeed += speed;
        break;
      case "j" || "J":
        controls.autoRotateSpeed -= speed;
        break;
      default:
        break;
    }
  });
  return controls;
}

export { createControls };
