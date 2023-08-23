import Board from "./board.js";
import Spiders from "./spiders.js";
import Player from './player';
import Obstacles from "./obstacles.js";
import Pause from "./pause.js";
import GameOver from "./gameover.js";
import GameWin from "./gamewin.js";
import { getDistance, getHorizontalDistance } from "./helper_functions";

export default class GameView {
    constructor(options) {
        this.board = new Board();
        this.board2 = new Board();
        this.spiders = new Spiders();
        this.player = new Player();
        this.obstacles = new Obstacles();
        this.pause = new Pause();
        this.gameove = new GameOver();
        this.gamewin = new GameWin();
        this.points = 0;
        this.gamestatus = "active"
        this.userpoints = document.getElementById("playerscore");
    }
    

    checkCollision() {
        this.player.bullets.forEach(bullet => {
            this.obstacles.obstacles.forEach(obstacle => {
                const [x1, y1] = [obstacle.x, obstacle.y];
                const [x2, y2] = [bullet.x, bullet.y];
                const dist = getDistance(x1, y1, x2, y2);
                if (dist <= 10) {
                    this.obstacles.hit(obstacle);
                    this.points++;
                    this.player.destroy(bullet);
                }
            });

            this.spiders.spiders.forEach(spider => {
                const [x1, y1] = [spider.x, spider.y];
                const [x2, y2] = [bullet.x, bullet.y];
                const dist = getDistance(x1, y1, x2, y2);
                if (dist <= 10) {
                    this.spiders.destroy(spider);
                    this.player.destroy(bullet);
                    this.obstacles.newBlock(x1, y1);
                    this.points += 10;
                    if (this.spiders.spiders.length === 0) {
                        this.points += 100;
                        this.gamestatus = "win"
                    }
                } 
            })
        });

        this.spiders.spiders.forEach(spider => {
            this.obstacles.obstacles.forEach(obstacle => {
                const [x1, y1] = [obstacle.x, obstacle.y]; 
                const [x2, y2] = [spider.x, spider.y];
                const dist = getHorizontalDistance(x1, y1, x2, y2);
                if (dist >= 0 && dist <= 20) {
                    spider.y += 20;
                    spider.x_move = -spider.x_move
                } else if (dist >= -20 && dist <= 0) {
                    spider.y += 20;
                    spider.x_move = -spider.x_move

                }
            });

            this.spiders.spiders.forEach(spider2 => {
                const [x1, y1] = [spider.x, spider.y];
                const [x2, y2] = [spider2.x, spider2.y];
                const dist = getHorizontalDistance(x1, y1, x2, y2);
                if (spider != spider2 && y1 === y2 && dist % 20 != 0) {
                    spider.y += 20;
                }
            })

        });

    }

    gameover() {
        this.spiders.spiders.forEach(spider => {
            if (spider.y > 620) {
                window.cancelAnimationFrame
                this.gamestatus = "over"
            }
        });
    }
    
    draw(ctx) {
        this.userpoints.textContent = `SCORE: ${this.points}`;
        ctx.clearRect(0, 0, 700, 700);

        if (this.player.pause) {
                this.pause.draw(ctx);
        } else if (this.gamestatus === "over") {
            this.gameove.draw(ctx);
        } else if (this.gamestatus === "win") {
            this.gamewin.draw(ctx);
        } else {
            this.board.draw(ctx);
            this.board2.drawLine(ctx);
            this.obstacles.draw(ctx);
            this.player.draw(ctx);
            this.spiders.draw(ctx);
            this.checkCollision();
            this.gameover();
        }

        requestAnimationFrame(this.draw.bind(this, ctx));
    }
    
}