export default class Snake{

    constructor(gameHeight, gameWidth, game){

        this.game = game;
        this.snakePreviousPosition = [];
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.isCrushed = false;
        this.direction = "UP";
        this.step = 20;
        this.body = [
            // {x: 0, y: (this.gameHeight - (this.step * 20))},
            // {x: 0, y: (this.gameHeight - (this.step * 19))},
            // {x: 0, y: (this.gameHeight - (this.step * 18))},
            // {x: 0, y: (this.gameHeight - (this.step * 17))},
            // {x: 0, y: (this.gameHeight - (this.step * 16))},
            // {x: 0, y: (this.gameHeight - (this.step * 15))},
            // {x: 0, y: (this.gameHeight - (this.step * 14))},
            // {x: 0, y: (this.gameHeight - (this.step * 13))},
            // {x: 0, y: (this.gameHeight - (this.step * 12))},
            // {x: 0, y: (this.gameHeight - (this.step * 11))},
            // {x: 0, y: (this.gameHeight - (this.step * 10))},
            // {x: 0, y: (this.gameHeight - (this.step * 9))},
            // {x: 0, y: (this.gameHeight - (this.step * 8))},
            // {x: 0, y: (this.gameHeight - (this.step * 7))},
            // {x: 0, y: (this.gameHeight - (this.step * 6))},
            {x: 0, y: (this.gameHeight - (this.step * 5))},
            {x: 0, y: (this.gameHeight - (this.step * 4))},
            {x: 0, y: (this.gameHeight - (this.step * 3))},
            {x: 0, y: (this.gameHeight - (this.step * 2))},
            {x: 0, y: (this.gameHeight - this.step)}
        ];
    }

    restart() {

        this.body = [
            {x: 0, y: (this.gameHeight - (this.step * 5))},
            {x: 0, y: (this.gameHeight - (this.step * 4))},
            {x: 0, y: (this.gameHeight - (this.step * 3))},
            {x: 0, y: (this.gameHeight - (this.step * 2))},
            {x: 0, y: (this.gameHeight - this.step)}
        ];
        
        this.direction = "UP";
        this.snakePreviousPosition = [];
        this.isCrushed = false;
        this.remove();
        this.drew();
    }

    remove() {
        let area = document.querySelector("#area");
        let body = document.querySelectorAll(".body");

        for (let idx = 0; idx < body.length; idx++) {
            area.removeChild(body[idx]);
        }
    }

    addBodyPart() {
        this.body.push({x: this.body[this.body.length - 1].x, y: this.body[this.body.length - 1].y});
        this.remove();
        this.drew();
    }

    drew() {
        let area = document.querySelector("#area");

        for (let idx = 0; idx < this.body.length; idx++) {            
            let div = document.createElement("div");
            if(idx === 0){
                let span = document.createElement("span");
                span.setAttribute("class", "eyes");
                div.appendChild(span);
                div.setAttribute("id", "head");
                span = document.createElement("span");
                span.setAttribute("class", "eyes");
                div.appendChild(span);
            }
            div.setAttribute("class", "body");
            div.setAttribute("style", `top: ${this.body[idx].y}px; left: ${this.body[idx].x}px`);
            area.appendChild(div);
        }
    }
    
    savePreviousPosition() {
        for (let idx = 0; idx < this.body.length - 1; idx++) {
            this.snakePreviousPosition[idx] = this.body[idx];
        }
    }

    updatePosition() {
        let bodyPart = document.querySelectorAll(".body");

        for (let idx = 0; idx < this.snakePreviousPosition.length; idx++) {

            this.body[idx + 1] = this.snakePreviousPosition[idx];
            bodyPart[idx + 1].style.top = this.snakePreviousPosition[idx].y + "px";
            bodyPart[idx + 1].style.left = this.snakePreviousPosition[idx].x + "px";
        }
    }

    collisionDetection(snakeHead, snakeBody) {
        for (let idx = 0; idx < snakeBody.length; idx++) {
            if((snakeHead.x === snakeBody[idx].x) && (snakeHead.y === snakeBody[idx].y)){                
                this.game.state = this.game.over;
                this.isCrushed = true;
            }
        }
                
        if((snakeHead.x > this.gameWidth - this.step || snakeHead.x < 0) ||
           (snakeHead.y > this.gameHeight - this.step || snakeHead.y < 0)) {

            this.game.state = this.game.over;
            this.isCrushed = true;
        }
    }

    move() {
        
        const bodyPart = document.querySelector(".body");
        const snakeHead = {...this.body[0]};
        this.collisionDetection(this.body[0], this.snakePreviousPosition);
        
        if(!this.isCrushed){
            if(this.direction === "UP"){
                this.savePreviousPosition();
                bodyPart.style.top = `${snakeHead.y -= this.step}px`;
                this.body[0] = snakeHead;
                this.updatePosition();
            }
            else if(this.direction === "RIGHT"){
                this.savePreviousPosition();
                bodyPart.style.left = `${snakeHead.x += this.step}px`;
                this.body[0] = snakeHead;
                this.updatePosition();
            }
            else if(this.direction === "DOWN"){
                this.savePreviousPosition();
                bodyPart.style.top = `${snakeHead.y += this.step}px`;
                this.body[0] = snakeHead;
                this.updatePosition();
            }
            else if(this.direction === "LEFT"){
                this.savePreviousPosition();
                bodyPart.style.left = `${snakeHead.x -= this.step}px`;
                this.body[0] = snakeHead;
                this.updatePosition();
            }
        }
    }
}