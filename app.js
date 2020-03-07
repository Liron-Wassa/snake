import Snake from './snake.js';
import Input from './input.js';
import Game from './game.js';
import Bait from './bait.js';

const gameHeight = document.querySelector("#area").clientHeight;
const gameWidth = document.querySelector("#area").clientWidth;

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
                bait.remove();
                snake.addBodyPart();
                bait.drew();
            }
            
        }
        else if(game.state === game.over){
            clearInterval(gameId);
        }

    }, 130);
}

gameLoop();