import { createDefaultCube } from "../cube.js";
import { createCylinder } from "../cylinder.js";
import { createDefaultSphere } from "../sphere.js";
import {
  Group,
  MathUtils,
  Vector3,
} from "/node_modules/three/build/three.module.js";

let grados = 30;

class Train extends Group {
  constructor() {
    super();
    this.meshes();
  }
  tick(delta) {
    this.children.forEach((mesh) => {
      mesh.tick(delta);
    });
  }
  meshes() {
    const cabin = createDefaultCube({ color: "red", height: 3 });
    const motor = createCylinder({
      color: "blue",
      height: 3.5,
      radialSegments: 16,
    });
    const chimney = createCylinder({
      color: "indigo",
      height: 1,
      radialSegments: 16,
      radiusTop: 0.5,
      radiusBottom: 0.2,
    });
    const scale = 0.1;
    // chimney.scale.set(scale, scale, scale);
    chimney.position.y += 1.5;
    chimney.position.x += 3;
    cabin.position.y += 0.8;
    motor.rotation.z = -Math.PI / 2;
    motor.position.x += 2.3;
    motor.position.y += 0.1;
    this.add(cabin, motor, chimney, this.wheels());
    chimney.add(this.smoke());
    chimney.tick = (delta) => {
      chimney.children.forEach((mesh) => {
        mesh.tick(delta);
      });
    };

    motor.material.flatShading = true;
    motor.material.needsUpdate = true;
    cabin.material.flatShading = true;
    cabin.material.needsUpdate = true;
  }
  wheels() {
    const group = new Group();
    group.tick = (delta) => {
      group.children.forEach((wheel) => {
        wheel.tick(delta);
      });
    };
    const wheel = this.wheel();
    wheel.position.z = 1;
    group.add(wheel);
    const ww = wheel.clone();
    for (let i = 0; i < 3; i++) {
      let w;
      i == 0 ? (ww.position.x += 0.4) : "";
      w = ww.clone();
      w.tick = (delta) => {
        w.rotation.y += MathUtils.degToRad(grados) * delta;
      };
      const scale = 0.5;
      w.scale.set(scale, scale, scale);
      const pos = new Vector3(1.2 * (i + 1), -0.5, 0);
      w.position.add(pos);
      group.add(w);
    }
    const otherSite = group.clone();
    otherSite.tick = (delta) => {
      otherSite.children.forEach((wheel) => {
        if (wheel.tick == null || wheel.tick == undefined) {
          wheel.tick = (delta) => {
            wheel.rotation.y += MathUtils.degToRad(grados) * delta;
          };
        }
        wheel.tick(delta);
      });
    };
    otherSite.position.z -= 2;
    group.add(otherSite);
    return group;
  }
  wheel() {
    const wheel = createCylinder({
      color: "black",
      height: 0.3,
      radialSegments: 16,
    });
    wheel.tick = (delta) => {
      wheel.rotation.y += MathUtils.degToRad(grados) * delta;
    };
    wheel.rotation.x = -Math.PI / 2;
    wheel.position.x -= 0.3;
    return wheel;
  }
  smoke() {
    const group = new Group();
    const originalSphere = new createDefaultSphere({
      color:'grey',
      radius: 0.2,
      segments:6,
    });
    originalSphere.material.flatShading = true;
    originalSphere.material.needsUpdate = true;
    
    group.add(originalSphere);
    group.position.y += 1;
    // group.position.x ;
    group.tick = (delta) => {
      group.children.forEach((mesh) => {
        mesh.tick(delta);
      });
    };
    return group;
  }
}

export { Train };
