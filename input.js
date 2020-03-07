export default class Input{

    constructor(snake){

        document.body.addEventListener("keydown", function(e){

            if(e.keyCode === 37 && snake.direction !== "RIGHT"){
                snake.direction = "LEFT";
            }
            else if(e.keyCode === 38 && snake.direction !== "DOWN"){
                snake.direction = "UP";
            }
            else if(e.keyCode === 39 && snake.direction !== "LEFT"){
                snake.direction = "RIGHT";
            }
            else if(e.keyCode === 40 && snake.direction !== "UP"){
                snake.direction = "DOWN";
            }
        });
    }
}