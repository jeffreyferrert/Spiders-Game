export default class Pause{
    constructor(options){
        this.color = 'brown';
        this.image = new Image();
        this.image.src = './src/assets/centipede.png';
    }

    draw(ctx){
        ctx.drawImage(this.image, 250, 160, 200, 200);

        ctx.fillStyle = this.color;
        ctx.font = "48px SF Atarian System";
        ctx.textAlign = "center";
        ctx.fillText("Game Paused", 350, 400);
        ctx.font = "35px SF Atarian System";
        ctx.fillText("Press 'p' to resume game", 350, 440);
        // ctx.fillRect(0, 0, 700, 700);
    }
}

