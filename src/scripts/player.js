import Bullet from "./bullet";

export default class Player {
    constructor(options) {
        this.x = 350;
        this.y = 675;
        this.image = new Image();
        this.image.src = './src/assets/player.png';
        this.bullets = [];
        this.pause = false;
        this.firing = false;

        this.keyBind();
    }

    keyBind() {
        window.addEventListener('keydown', (e) => {
            if (e.key == "ArrowLeft" || e.key == "a") {
                if (this.x > 0)this.x -= 5;
            } else if (e.key == "ArrowRight" || e.key == "d") {
                if (this.x < 675) this.x += 5;
            }else if (e.key == "ArrowUp" || e.key == "w") {
                if (this.y >= 650) this.y -= 5;
            } else if (e.key == "ArrowDown" || e.key == "s") {
                if (this.y < 675) this.y += 5;
            } else if (e.key == " ") {
                if (!this.firing) {
                    this.firing = true;
                    const newBullet = new Bullet({
                        x: this.x, 
                        y: this.y
                    });
                    this.bullets.push(newBullet);
                    
                    setTimeout(() => {
                        this.firing = false;
                    }, 200);
                }
            } else if (e.key == "p") {
                this.pause = !this.pause;
            }
        }, true);
    }

    destroy(bullet) {
        const foundIdx = this.bullets.indexOf(bullet);
        this.bullets.splice(foundIdx, 1);
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 25, 25);

        this.bullets.forEach(bullet => {
            if (bullet.y <= -10) {
                this.bullets.shift();
            } else {
                bullet.move();
                bullet.draw(ctx);
            }
        });
    }
}