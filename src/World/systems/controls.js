import { randFloat } from "/node_modules/three/src/math/MathUtils.js";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import { Vector3 } from "/node_modules/three/build/three.module.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  //   controls.dampingFactor = 0.01;
  //   controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  const speed = 1;
  //   controls.minDistance = 5;
  //   controls.maxDistance = 20;
  let isAnimating = false;
  let startTime;

  let randomX = randFloat(1, 10);
  let randomY = randFloat(1, 10);
  let randomZ = randFloat(1, 10);
  let targetPosition = new Vector3(randomX, randomY, randomZ);
  let beforePos = camera.position.clone();
  controls.tick = () => {
    if (isAnimating) {
      const currentTime = Date.now();
      const duration = 1000;
      const progress = (currentTime - startTime) / duration; // Calcula el progreso de la animación
      if (progress < 1) {
        // Interpola la posición de la cámara
        const newPosition = new Vector3().lerpVectors(
          beforePos,
          targetPosition,
          progress
        );
        camera.position.copy(newPosition);
        controls.update();
      } else {
        // La animación ha terminado
        camera.position.copy(targetPosition);
        controls.update();
        isAnimating = false;
      }
    }
    controls.update();
  };
  window.addEventListener("keypress", (e) => {
    switch (e.key) {
      case "u" || "U":
        controls.autoRotateSpeed += speed;
        break;
      case "j" || "J":
        controls.autoRotateSpeed -= speed;
        break;
      default:
        break;
    }
  });
  const btnNewPos = () => {
    const button = document.getElementById("btn-cameraPos");
    button.addEventListener("click", () => {
      // Dentro de la función de clic del botón
      beforePos = camera.position.clone();
      randomX = randFloat(1, 10);
      randomY = randFloat(1, 10);
      randomZ = randFloat(1, 10);
      targetPosition = new Vector3(randomX, randomY, randomZ);
      isAnimating = true;
      startTime = Date.now();
      controls.update();
    });
  };
  btnNewPos();
  // controls.actions = () => {

  // }
  return controls;
}

export { createControls };
