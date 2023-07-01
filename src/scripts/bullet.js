class Bullet{
    constructor (options){
        this.x = options.x;
        this.y = options.y;
        this.color = "#49fb35";
    }

    move() {
        this.y -= 5;
    }

    draw = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 10, this.y, 5, 5);
    }
}

export default Bullet;