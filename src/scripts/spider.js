export default class Spider{
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.x_move = 4;
        this.radius = 10;
        this.color = "brown";
    }

    draw = function(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    move() {
        this.x += this.x_move;
    }

    update() {
        this.x_move = -this.x_move;
        this.y += 20;
    }
}