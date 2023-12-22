import {GLTFLoader} from 'node_modules/three/examples/jsm/loaders/GLTFLoader.js';

async function loadBirds () {
    const loader = new GLTFLoader();
    const loadedData = await loader.loadASync('');
}
export {loadBirds}