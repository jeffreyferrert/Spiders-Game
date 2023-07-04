export default class Spider{
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.x_move = 5 * options.direction;
        this.image = new Image();
        this.image.src = './src/assets/centipede.png';

    }

    draw = function(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 20, 20);
    }

    move() {
        this.x += this.x_move;
    }

    update() {
        this.x_move = -this.x_move;
        this.y += 20;
    }
}