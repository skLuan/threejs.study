import { World } from "./World/World.js";

function main() {
    const container = document.querySelector("#scene-container");
    const btnRender = document.querySelector('#btn-render');

    const world = new World(container);
    btnRender.addEventListener('click', (e)=>{
        // console.log('sisa');
    });

    world.start();
}

main();