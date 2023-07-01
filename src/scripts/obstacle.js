export default class Obstacle{
    constructor (options) {
        this.x = options.x;
        this.y = options.y;
        this.image = new Image();
        this.image.src = './src/assets/mushroom1.png';
        this.counter = 0;
    }

    draw = function(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 20, 20);
    }
}