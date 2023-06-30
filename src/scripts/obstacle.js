export default class Obstacle{
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.color = "#003049";
        this.counter = 0;
    }

    draw = function(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}