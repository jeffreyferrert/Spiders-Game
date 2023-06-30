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
                x: helper_functions.getRandomInt(30, 670), //multiples of 20
                y: helper_functions.getRandomInt(20, 650)
            })

            if (!this.obstacles.includes(newObstacle)) {
                this.obstacles.push(newObstacle);
            }
        }
    }

    destroy(obstacle) {
        const foundIdx = this.obstacles.indexOf(obstacle);
        // console.log(foundIdx);
        this.obstacles.splice(foundIdx, 1);
    }

    draw(ctx) {
        this.obstacles.forEach(obstacle => {
            obstacle.draw(ctx)
        })
    }
}