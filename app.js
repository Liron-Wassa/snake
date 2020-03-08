import Snake from './snake.js';
import Input from './input.js';
import Game from './game.js';
import Bait from './bait.js';

const gameHeight = document.querySelector("#area").clientHeight;
const gameWidth = document.querySelector("#area").clientWidth;
let points = document.querySelector("#points");
let bestScore = document.querySelector("#best");
let gameOver = document.querySelector("#gameOver");
let created = document.querySelector("#created");
let resetBtnContainer = document.querySelector("#resetBtnContainer");
let resetBtn = document.querySelector("#resetBtn");
let best = localStorage.getItem("score") || 0;
let score = 0;

let game = new Game();
let snake = new Snake(gameHeight, gameWidth, game);
let bait = new Bait(gameHeight, gameWidth, snake);
new Input(snake, restart, gameLoop);

function restart() {
    score = 0;
    points.textContent = score;
    game.state = game.running;
    snake.restart();
    bait.restart();
    gameLoop();
}

snake.drew();
bait.drew();

function gameLoop() {

    console.log("game running");
    gameOver.style.display = "none";
    created.style.display = "none";
    resetBtnContainer.style.display = "none";
    resetBtn.style.display = "none";
    
    let gameId = setInterval(function() {
                
        if(game.state === game.running){
            
            snake.move();

                if(bait.x === snake.body[0].x && bait.y === snake.body[0].y){

                score += 10;
                points.textContent = score;
                score > best ? localStorage.setItem("score", score) : null;
                bait.remove();
                snake.addBodyPart();
                bait.drew();
            }
            
        }
        else if(game.state === game.over){
           
            best = localStorage.getItem("score") || 0;
            bestScore.textContent = best;
            gameOver.style.display = "block";
            created.style.display = "block";
            resetBtnContainer.style.display = "flex";
            resetBtn.style.display = "block";
            clearInterval(gameId);
        }

    }, 130);
}