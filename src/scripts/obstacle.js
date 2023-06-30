export default class Obstacle{
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.color = "gray";
    }

    draw = function(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}