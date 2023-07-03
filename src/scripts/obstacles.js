import Obstacle from "./obstacle";
import * as helper_functions from "./helper_functions";

export default class Obstacles {
    constructor(options) {
        this.obstacles = [];
        this.initialize();
    }

    initialize() {
        for (let i = 0; i < 35; i++) {
            const newObstacle = new Obstacle({
                x: helper_functions.getRandomInt(20, 680),
                y: helper_functions.getRandomInt(0, 620)
            })

            if (!this.obstacles.includes(newObstacle)) {
                this.obstacles.push(newObstacle);
            }
        }
    }

    newBlock(x1, y1) {
        let x = Math.floor(x1/20)*20;
        let y = Math.floor(y1/20)*20;
        const newObstacle = new Obstacle({x: x, y: y});
        this.obstacles.push(newObstacle)
    }

    hit(obstacle) {
        switch (obstacle.counter++) {
            case 0:
                obstacle.image.src = './src/assets/mushroom2.png';
                break;
            case 1:
                obstacle.image.src = './src/assets/mushroom3.png';
                break;
            case 2:
                obstacle.image.src = './src/assets/mushroom4.png';
                break;
            case 3:
                this.destroy(obstacle);
                break;
        } 
    }

    destroy(obstacle) {
        const foundIdx = this.obstacles.indexOf(obstacle);
        this.obstacles.splice(foundIdx, 1);
    }

    draw(ctx) {
        this.obstacles.forEach(obstacle => {
            obstacle.draw(ctx)
        })
    }
}