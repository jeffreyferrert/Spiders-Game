import Obstacle from "./obstacle";
import * as helper_functions from "./helper_functions";

export default class Obstacles {
    constructor(options) {
        this.obstacles = [];
        this.initialize();
    }

    initialize() {
        for (let i = 0; i < 20; i++) {
            const newObstacle = new Obstacle({
                x: helper_functions.getRandomInt(20, 680), //multiples of 20
                y: helper_functions.getRandomInt(20, 640)
            })

            if (!this.obstacles.includes(newObstacle)) {
                this.obstacles.push(newObstacle);
            }
        }
    }

    hit(obstacle, bullet) {
        obstacle.counter++;
        switch (obstacle.counter++) {
            case 1:
                obstacle.color = "#fcbf49";
                break;
            case 3:
                obstacle.color = "#f77f00";
                break;
            case 5:
                obstacle.color = "#d62828";
                break;
            case 7:
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