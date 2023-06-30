import Bullet from "./bullet";

export default class Player {
    constructor(options) {
        this.x = 350;
        this.y = 670;
        this.color = 'green';
        this.bullets = [];

        this.keyBind();
    }

    keyBind() {
        window.addEventListener('keydown', (e) => {
            if (e.key == "ArrowLeft" || e.key == "a") {
                this.x -= 10;
            } else if (e.key == "ArrowRight" || e.key == "d") {
                this.x += 10;
            }else if (e.key == "ArrowUp" || e.key == "w") {
                this.y -= 10;
            } else if (e.key == "ArrowDown" || e.key == "s") {
                this.y += 10;
            } else if (e.key == " ") {
                const newBullet = new Bullet({
                    x: this.x, 
                    y: this.y
                });
                this.bullets.push(newBullet);
            }
        }, true);
    }

    destroy(bullet) {
        const foundIdx = this.bullets.indexOf(bullet);
        this.bullets.splice(foundIdx, 1);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 25, 25);

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