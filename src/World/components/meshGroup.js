import { createCone } from "./cone.js";
import { createSphere } from "./sphere.js";
import { Group, MathUtils } from "/node_modules/three/build/three.module.js";

function createGroup() {
  const group = new Group();
  group.tick = (delta) => {};
  return group;
}
function createMeshGroup() {
  const group = new Group();
  const sphere = new createSphere(0.2, 16, "indigo");
  const cone = new createCone(0.2, 16, "red");
  const radiansPerSecond = MathUtils.degToRad(30);

  // Definir variables para el centro del círculo y el radio
  const centerX = 0; // Coordenada X del centro
  const centerY = 0; // Coordenada Y del centro
  const radius = 2; // Radio del círculo

  let angle = 0; // Ángulo inicial
  let moveGgroupCircle = () => {
    // Calcular la nueva posición usando coseno y seno
    const x = centerX + radius * Math.cos(MathUtils.degToRad(angle));
    const y = centerY + radius * Math.sin(MathUtils.degToRad(angle));
    group.position.set(x,y);
    // Aumentar el ángulo para la siguiente iteración (esto controla la velocidad del movimiento)
    angle += 2; // Puedes ajustar la velocidad cambiando este valor
  };
  group.tick = (delta) => {
    // group.position.z += Math.cos(2 * Math.PI * delta);
    // moveGgroupCircle();
    group.rotation.z -= delta * radiansPerSecond;
  };
  group.add(cone);
  let counter = 0;
  for (let i = 0; i < 1; i += 0.002) {
    let x = Math.cos(2 * Math.PI * i);
    let y = Math.sin(2 * Math.PI * i);
    let z = i * 5;
    let clonedMesh;
    if (Math.floor(counter / 10) % 2 === 0) {
      clonedMesh = cone.clone(); // Colocar un cono
      y += 0.5 * i;
    } else {
      clonedMesh = sphere.clone(); // Colocar una esfera
    }

    clonedMesh.position.set(x, y, z);
    clonedMesh.scale.multiplyScalar(0.01 + i);
    group.add(clonedMesh);
    counter++;
  }
    group.rotation.y += Math.PI /2;
    group.position.x -= 5.8;
    group.position.y += 1;
  return group;
}

export { createMeshGroup, createGroup };
