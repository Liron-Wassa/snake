export default class Bait{

    constructor(gameHeight, gameWidth, snake){

        this.baitWidth = 20;
        this.baitHieght = 20;
        this.X_points = [];
        this.Y_points = [];
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.snakeBody = snake.body;
        this.step = snake.step;
        this.y = 20;
        this.x = 20;
    }

    restart() {
        this.snakeBody = [
            {x: 0, y: (this.gameHeight - (this.step * 5))},
            {x: 0, y: (this.gameHeight - (this.step * 4))},
            {x: 0, y: (this.gameHeight - (this.step * 3))},
            {x: 0, y: (this.gameHeight - (this.step * 2))},
            {x: 0, y: (this.gameHeight - this.step)}
        ];
        this.remove();
        this.drew();
    }

    remove() {
       
        let area = document.querySelector("#area");
        let bait = document.querySelector("#bait");
        area.removeChild(bait);
    }

    checkCollision() {
        
        for(let idx = 0; idx < this.snakeBody.length; idx++) {

            let X_index = this.X_points.indexOf(this.snakeBody[idx].x);
            let Y_index = this.Y_points.indexOf(this.snakeBody[idx].y);
                
            if(X_index !== -1){

                this.X_points.splice(X_index, 1);
            }
            if(Y_index !== -1){

                this.Y_points.splice(Y_index, 1);
            }
        }

        let y = this.Y_points[Math.floor(Math.random() * this.Y_points.length)];
        let x = this.X_points[Math.floor(Math.random() * this.X_points.length)];
        
        return {x, y};
    }

    drew() {

        this.setPosition("X");
        this.setPosition("Y");
        
        let area = document.querySelector("#area");
        let position = this.checkCollision();
                
        this.y = position.y;
        this.x = position.x;

        let div = document.createElement("div");
        div.setAttribute("id", "bait");
        div.setAttribute("style", `top: ${this.y}px; left: ${this.x}px`);
        area.appendChild(div);
    }

    setPosition(position) {
        if(position === "X") {
            for(let idx = 0; idx < this.gameWidth; idx += this.baitWidth){
                this.X_points.push(idx);
            }
        }
        else if(position === "Y"){
            for(let idx = 0; idx < this.gameHeight; idx += this.baitHieght){
                this.Y_points.push(idx);
            }
        }        
    }
}