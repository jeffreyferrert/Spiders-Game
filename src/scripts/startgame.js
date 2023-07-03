export default class StartGame{
    constructor(options){
        this.color = 'brown';
        this.image = new Image();
        this.image.src = './src/assets/centipede.png';
    }

    draw(ctx){
        ctx.drawImage(this.image, 250, 160, 200, 200);

        ctx.fillStyle = this.color;
        ctx.font = "70px SF Atarian System";
        ctx.textAlign = "center";
        ctx.fillText("SPIDERS", 350, 400);
        ctx.font = "35px SF Atarian System";
        ctx.fillText("Press 'Enter' to start your game", 350, 440);
        // ctx.fillRect(0, 0, 700, 700);
    }
}

