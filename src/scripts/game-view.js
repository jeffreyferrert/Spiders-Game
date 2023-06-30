import Board from "./board.js";
import Spiders from "./spiders.js";
import Player from './player';
import Obstacles from "./obstacles.js";
import Obstacle from "./obstacle.js";  //crea 1 bloque
import { getDistance, getHorizontalDistance } from "./helper_functions";

export default class GameView {
    constructor(options) {
        this.board = new Board();
        this.spiders = new Spiders();
        this.player = new Player();
        this.obstacles = new Obstacles();
    }

    checkCollision() {
        this.player.bullets.forEach(bullet => {
            this.obstacles.obstacles.forEach(obstacle => {
                const [x1, y1] = [obstacle.x, obstacle.y];
                const [x2, y2] = [bullet.x, bullet.y];
                const dist = getDistance(x1, y1, x2, y2);
                if (dist < 20) {
                    this.obstacles.hit(obstacle);
                    this.player.destroy(bullet);
                }
            });

            this.spiders.spiders.forEach(spider => {
                const [x1, y1] = [spider.x, spider.y];
                const [x2, y2] = [bullet.x, bullet.y];
                const dist = getDistance(x1, y1, x2, y2);
                if (dist < 20) {
                    this.spiders.destroy(spider);
                    this.player.destroy(bullet);
                    this.newBlock(x1, y1);
                } 
            })
        });

        this.spiders.spiders.forEach(spider => {
            this.obstacles.obstacles.forEach(obstacle => {
                const [x1, y1] = [obstacle.x, obstacle.y]; 
                const [x2, y2] = [spider.x, spider.y];
                const dist = getHorizontalDistance(x1, y1, x2, y2);
                if (dist > 0 && dist < 30) {
                    console.log('derecha');
                    spider.y += 20;
                } else if (dist > -10 && dist < 0) {
                    console.log('izquierda');
                    spider.y += 20;

                }
            })
        });

    }

    newBlock(x1, y1) {
        let x = Math.floor(x1/20)*20;
        let y = Math.floor(y1/20)*20;
        const newObstacle = new Obstacle({x: x, y: y});
        this.obstacles.obstacles.push(newObstacle)
    }
    
    draw(ctx) {
        ctx.clearRect(0, 0, 700, 700);

        this.board.draw(ctx);
        this.obstacles.draw(ctx);
        this.player.draw(ctx);
        this.spiders.draw(ctx);

        this.checkCollision();
        requestAnimationFrame(this.draw.bind(this, ctx));
    }
    
}