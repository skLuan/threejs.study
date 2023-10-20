import { Group, AxesHelper, GridHelper } from "/node_modules/three/build/three.module.js"
const helpers = () => {
    const helpers = new Group();
    const gridHelper = new GridHelper();
    const axesHelper = new AxesHelper(5);
    axesHelper.position.y += 1
    helpers.add(gridHelper,axesHelper);
    return helpers;
}

export {helpers}