import Spider from "./spider";
import * as helper_functions from "./helper_functions";

export default class Spiders {
    constructor(options) {
        this.x = helper_functions.getRandomInt(200, 500);
        this.y = 0;
        this.spiders = [];
        this.direction = Math.pow(-1, helper_functions.getRandom(2));

        this.initialize();
    }

    initialize() {
        for (let i = 0; i < 10; i++) {
            const newSpider = new Spider({
                x: this.x + 20 * i * this.direction,
                y: this.y,
                direction: this.direction
            })

            this.spiders.push(newSpider);
        }
    }

    destroy(spider) {
        const foundIdx = this.spiders.indexOf(spider);
        this.spiders.splice(foundIdx, 1);
    }

    draw(ctx) {
        this.spiders.forEach(spider => {
            if (spider.x > 680 || spider.x < 0) {
                spider.update();
            }
            spider.move();
            spider.draw(ctx);
        });
    }
}

