export default class Bait{

    constructor(gameHeight, gameWidth, snakeBody){

        this.baitWidth = 20;
        this.baitHieght = 20;
        this.X_points = [];
        this.Y_points = [];
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.snakeBody = snakeBody;
        this.y = 0;
        this.x = 0;        
        
        this.setPosition("X");
        this.setPosition("Y");
    }

    remove = () => {
        let area = document.querySelector("#area");
        let bait = document.querySelector("#bait");
        area.removeChild(bait);
    }

    drew = () => {

        let area = document.querySelector("#area");
        let y = this.Y_points[Math.floor(Math.random() * this.Y_points.length)];
        let x = this.X_points[Math.floor(Math.random() * this.X_points.length)];
        
        for(let idx = 0; idx < this.snakeBody.length; idx++) {

            if(x === this.snakeBody[idx].x && y === this.snakeBody[idx].y){
                return this.drew(this.snakeBody);
            }
        }

        this.y = this.Y_points[Math.floor(Math.random() * this.Y_points.length)];
        this.x = this.X_points[Math.floor(Math.random() * this.X_points.length)];

        let div = document.createElement("div");
        div.setAttribute("id", "bait");
        div.setAttribute("style", `top: ${this.y}px; left: ${this.x}px`);
        area.appendChild(div);
    }

    setPosition = (position) => {
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