export default class Input{

    constructor(snake, restart, gameLoop){

        let buttons = document.querySelectorAll(".btns");
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

        for (let idx = 0; idx < buttons.length; idx++) {
            buttons[idx].addEventListener("click", function(e){
                if(snake.snakePreviousPosition[0]){
                    if(e.target.id === "up" && snake.direction !== "DOWN"){
                        if(snake.snakePreviousPosition[0].y === snake.body[0].y){
                            snake.direction = "UP";
                        }
                    }
                    else if(e.target.id === "right" && snake.direction !== "LEFT"){
                        if(snake.snakePreviousPosition[0].x === snake.body[0].x){
                            snake.direction = "RIGHT";
                        }
                    }
                    else if(e.target.id === "down" && snake.direction !== "UP"){
                        if(snake.snakePreviousPosition[0].y === snake.body[0].y){
                            snake.direction = "DOWN";
                        }
                    }
                    else if(e.target.id === "left" && snake.direction !== "RIGHT"){
                        if(snake.snakePreviousPosition[0].x === snake.body[0].x){
                            snake.direction = "LEFT";
                        }
                    }
                }
            });
        }
    }
}