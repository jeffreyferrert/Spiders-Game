export default class GameWin{
    constructor(options){
        this.color = 'brown';
        this.image = new Image();
        this.image.src = './src/assets/character.png';
    }

    draw(ctx){
        ctx.drawImage(this.image, 265, 160, 200, 200);

        ctx.fillStyle = this.color;
        ctx.font = "48px SF Atarian System";
        ctx.textAlign = "center";
        ctx.fillText("Game Win", 350, 400);
        ctx.font = "35px SF Atarian System";
        ctx.fillText("Press 'ENTER' to start a new game", 350, 440);
        // ctx.fillRect(0, 0, 700, 700);
    }
}

