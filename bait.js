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
        this.y = 0;
        this.x = 0;        
        
        this.setPosition("X");
        this.setPosition("Y");
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

        let y = this.Y_points[Math.floor(Math.random() * this.Y_points.length)];
        let x = this.X_points[Math.floor(Math.random() * this.X_points.length)];
        
        for(let idx = 0; idx < this.snakeBody.length; idx++) {

            if(x === this.snakeBody[idx].x && y === this.snakeBody[idx].y){

                y = this.Y_points[Math.floor(Math.random() * this.Y_points.length)];
                x = this.X_points[Math.floor(Math.random() * this.X_points.length)];
                idx = 0;
            }
        }

        return {x, y};
    }

    drew() {

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
            for(let idx = 20; idx < this.gameWidth; idx += 20){
                this.X_points.push(idx);
            }
        }
        else if(position === "Y"){
            for(let idx = 20; idx < this.gameHeight; idx += 20){
                this.Y_points.push(idx);
            }
        }
    }
}