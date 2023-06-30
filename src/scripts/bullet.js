class Bullet{
    constructor (options){
        this.x = options.x;
        this.y = options.y;
        this.color = 'green';
    }

    move() {
        this.y -= 10;
    }

    draw = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 10, 10);
    }
}

export default Bullet;