import Snake from './snake.js';
import Input from './input.js';
import Game from './game.js';
import Bait from './bait.js';

const gameHeight = document.querySelector("#area").clientHeight;
const gameWidth = document.querySelector("#area").clientWidth;
let points = document.querySelector("#points");
let gameOver = document.querySelector("#gameOver");
let created = document.querySelector("#created");
let btnContainer = document.querySelector("#btnContainer");
let resetBtn = document.querySelector("#resetBtn");
let score = 0;

let game = new Game();
let snake = new Snake(gameHeight, gameWidth, game);
let bait = new Bait(gameHeight, gameWidth, snake.body);
new Input(snake);


const gameLoop = () => {

    console.log("game running");
    
    snake.drew();
    bait.drew();
    
    let gameId = setInterval(() => {
                
        if(game.state === game.running){
            
            snake.move();

            if(bait.x === snake.body[0].x && bait.y === snake.body[0].y){

                score += 10;        
                points.textContent = score;
                bait.remove();
                snake.addBodyPart();
                bait.drew();
            }
            
        }
        else if(game.state === game.over){
            gameOver.style.display = "block";
            created.style.display = "block";
            btnContainer.style.display = "flex";
            resetBtn.style.display = "block";
            clearInterval(gameId);
        }

    }, 130);
}

gameLoop();