class Board{
    constructor(options){
        this.color = 'black';
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, 700, 700);
    }
}

export default Board