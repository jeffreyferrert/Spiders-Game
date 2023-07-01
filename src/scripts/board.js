class Board{
    constructor(options){
        this.color = 'black';
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, 700, 700);
    }

    drawLine(ctx){
        ctx.fillStyle = "gray"
        ctx.fillRect(0, 640, 700, 1);

    }
}

export default Board