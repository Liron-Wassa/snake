export default class Input{

    constructor(snake, restart, gameLoop){

        let upBtn = document.querySelector("#up");
        let leftBtn = document.querySelector("#left");
        let downBtn = document.querySelector("#down");
        let rightBtn = document.querySelector("#right");
        let startBtn = document.querySelector("#startBtn");

        document.body.addEventListener("keydown", function(e){
            
            if(snake.snakePreviousPosition[0]){

                if(e.keyCode === 37 && snake.direction !== "RIGHT"){
                    if(snake.snakePreviousPosition[0].x === snake.body[0].x){
                        snake.direction = "LEFT";
                    }
                }
                else if(e.keyCode === 38 && snake.direction !== "DOWN"){
                    if(snake.snakePreviousPosition[0].y === snake.body[0].y){
                        snake.direction = "UP";
                    }
                }
                else if(e.keyCode === 39 && snake.direction !== "LEFT"){
                    if(snake.snakePreviousPosition[0].x === snake.body[0].x){
                        snake.direction = "RIGHT";
                    }
                }
                else if(e.keyCode === 40 && snake.direction !== "UP"){
                    if(snake.snakePreviousPosition[0].y === snake.body[0].y){
                        snake.direction = "DOWN";
                    }
                }
            }
        });

        startBtn.addEventListener("click", function(){
            startBtn.style.display = "none";
            gameLoop();
        });

        resetBtn.addEventListener("click", function(){
            restart();
        });

        if(snake.snakePreviousPosition[0]){
            upBtn.addEventListener("click", function(){
                if(snake.snakePreviousPosition[0].y === snake.body[0].y){
                    snake.direction = "UP";
                }
            });

            leftBtn.addEventListener("click", function(){
                if(snake.snakePreviousPosition[0].x === snake.body[0].x){
                    snake.direction = "LEFT";
                }
            });

            downBtn.addEventListener("click", function(){
                if(snake.snakePreviousPosition[0].y === snake.body[0].y){
                    snake.direction = "DOWN";
                }
            });

            rightBtn.addEventListener("click", function(){
                if(snake.snakePreviousPosition[0].x === snake.body[0].x){
                    snake.direction = "RIGHT";
                }
            });
        }
    }
}