const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 200;

let scaleRatio = null;

function setScreen() {
    scaleRatio = getScaleRatio();
    canvas.width = GAME_WIDTH*scaleRatio;
    canvas.height = GAME_HEIGHT*scaleRatio;
}

setScreen();

window.addEventListener("resize", setScreen());

function getScaleRatio(){
    const screenHieght = window.innerHeight;
    const screenWidth = window.innerWidth;
    if (screenWidth/screenHieght < GAME_WIDTH/GAME_HEIGHT) {
        return screenWidth / GAME_WIDTH;
    } else {
        return screenHieght/GAME_HEIGHT;
    }
}
function clearScreen() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function gameLoop (){
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);