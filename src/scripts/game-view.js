import Board from "./board.js";
import Spiders from "./spiders.js";
import Player from './player';
import Obstacles from "./obstacles.js";
import { getDistance } from "./helper_functions";

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
                    // obstacle.color = "red";
                    this.obstacles.destroy(obstacle);
                }
            });

        });
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