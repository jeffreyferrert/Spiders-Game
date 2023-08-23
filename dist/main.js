!function(){"use strict";!function(){var s=class{constructor(s){this.color="black"}draw(s){s.fillStyle=this.color,s.fillRect(0,0,700,700)}drawLine(s){s.fillStyle="gray",s.fillRect(0,640,700,1)}};class t{constructor(s){this.x=s.x,this.y=s.y,this.x_move=2*s.direction,this.image=new Image,this.image.src="./src/assets/centipede.png"}draw=function(s){s.drawImage(this.image,this.x,this.y,20,20)};move(){this.x+=this.x_move}update(){this.x_move=-this.x_move,this.y+=20}}function e(s,t){return 20*Math.ceil((Math.random()*(t-s)+s)/20)}function i(s,t,e,i){return Math.sqrt(Math.pow(e-s,2)+Math.pow(i-t,2))}function r(s,t,e,i){if(t===i){if(s<e)return e-s;if(s>=e)return e-s}}class a{constructor(s){this.x=e(200,500),this.y=0,this.spiders=[],this.direction=Math.pow(-1,(2,Math.floor(2*Math.random()))),this.initialize()}initialize(){for(let s=0;s<10;s++){const e=new t({x:this.x+20*s*this.direction,y:this.y,direction:this.direction});this.spiders.push(e)}}destroy(s){const t=this.spiders.indexOf(s);this.spiders.splice(t,1)}draw(s){this.spiders.forEach((t=>{(t.x>680||t.x<0)&&t.update(),t.move(),t.draw(s)}))}}class o{constructor(s){this.x=350,this.y=675,this.image=new Image,this.image.src="./src/assets/player.png",this.bullets=[],this.pause=!1,this.firing=!1,this.keyBind()}keyBind(){window.addEventListener("keydown",(s=>{if("ArrowLeft"==s.key||"a"==s.key)this.x>0&&(this.x-=5);else if("ArrowRight"==s.key||"d"==s.key)this.x<675&&(this.x+=5);else if("ArrowUp"==s.key||"w"==s.key)this.y>=650&&(this.y-=5);else if("ArrowDown"==s.key||"s"==s.key)this.y<675&&(this.y+=5);else if(" "==s.key){if(!this.firing){this.firing=!0;const s=new class{constructor(s){this.x=s.x,this.y=s.y,this.color="#49fb35"}move(){this.y-=5}draw=function(s){s.fillStyle=this.color,s.fillRect(this.x+10,this.y,5,5)}}({x:this.x,y:this.y});this.bullets.push(s),setTimeout((()=>{this.firing=!1}),200)}}else"p"==s.key&&(this.pause=!this.pause)}),!0)}destroy(s){const t=this.bullets.indexOf(s);this.bullets.splice(t,1)}draw(s){s.drawImage(this.image,this.x,this.y,25,25),this.bullets.forEach((t=>{t.y<=-10?this.bullets.shift():(t.move(),t.draw(s))}))}}class h{constructor(s){this.x=s.x,this.y=s.y,this.image=new Image,this.image.src="./src/assets/mushroom1.png",this.counter=0}draw=function(s){s.drawImage(this.image,this.x,this.y,20,20)}}class n{constructor(s){this.obstacles=[],this.initialize()}initialize(){for(let s=0;s<35;s++){const s=new h({x:e(20,680),y:e(0,620)});this.obstacles.includes(s)||this.obstacles.push(s)}}newBlock(s,t){let e=20*Math.floor(s/20),i=20*Math.floor(t/20);const r=new h({x:e,y:i});this.obstacles.push(r)}hit(s){switch(s.counter++){case 0:s.image.src="./src/assets/mushroom2.png";break;case 1:s.image.src="./src/assets/mushroom3.png";break;case 2:s.image.src="./src/assets/mushroom4.png";break;case 3:this.destroy(s)}}destroy(s){const t=this.obstacles.indexOf(s);this.obstacles.splice(t,1)}draw(s){this.obstacles.forEach((t=>{t.draw(s)}))}}class c{constructor(s){this.color="brown",this.image=new Image,this.image.src="./src/assets/centipede.png"}draw(s){s.drawImage(this.image,250,160,200,200),s.fillStyle=this.color,s.font="48px SF Atarian System",s.textAlign="center",s.fillText("Game Paused",350,400),s.font="35px SF Atarian System",s.fillText("Press 'p' to resume game",350,440)}}class l{constructor(s){this.color="brown",this.image=new Image,this.image.src="./src/assets/character.png"}draw(s){s.drawImage(this.image,265,160,200,200),s.fillStyle=this.color,s.font="48px SF Atarian System",s.textAlign="center",s.fillText("Game Over",350,400),s.font="35px SF Atarian System",s.fillText("Press 'ENTER' to restart the game",350,440)}}class d{constructor(s){this.color="brown",this.image=new Image,this.image.src="./src/assets/character.png"}draw(s){s.drawImage(this.image,265,160,200,200),s.fillStyle=this.color,s.font="48px SF Atarian System",s.textAlign="center",s.fillText("Game Win",350,400),s.font="35px SF Atarian System",s.fillText("Press 'ENTER' to start a new game",350,440)}}class m{constructor(t){this.board=new s,this.board2=new s,this.spiders=new a,this.player=new o,this.obstacles=new n,this.pause=new c,this.gameove=new l,this.gamewin=new d,this.points=0,this.gamestatus="active",this.userpoints=document.getElementById("playerscore")}checkCollision(){this.player.bullets.forEach((s=>{this.obstacles.obstacles.forEach((t=>{const[e,r]=[t.x,t.y],[a,o]=[s.x,s.y];i(e,r,a,o)<=10&&(this.obstacles.hit(t),this.points++,this.player.destroy(s))})),this.spiders.spiders.forEach((t=>{const[e,r]=[t.x,t.y],[a,o]=[s.x,s.y];i(e,r,a,o)<=10&&(this.spiders.destroy(t),this.player.destroy(s),this.obstacles.newBlock(e,r),this.points+=10,0===this.spiders.spiders.length&&(this.points+=100,this.gamestatus="win"))}))})),this.spiders.spiders.forEach((s=>{this.obstacles.obstacles.forEach((t=>{const[e,i]=[t.x,t.y],[a,o]=[s.x,s.y],h=r(e,i,a,o);(h>=0&&h<=20||h>=-20&&h<=0)&&(s.y+=20,s.x_move=-s.x_move)})),this.spiders.spiders.forEach((t=>{const[e,i]=[s.x,s.y],[a,o]=[t.x,t.y],h=r(e,i,a,o);s!=t&&i===o&&h%20!=0&&(s.y+=20)}))}))}gameover(){this.spiders.spiders.forEach((s=>{s.y>620&&(window.cancelAnimationFrame,this.gamestatus="over")}))}draw(s){this.userpoints.textContent=`SCORE: ${this.points}`,s.clearRect(0,0,700,700),this.player.pause?this.pause.draw(s):"over"===this.gamestatus?this.gameove.draw(s):"win"===this.gamestatus?this.gamewin.draw(s):(this.board.draw(s),this.board2.drawLine(s),this.obstacles.draw(s),this.player.draw(s),this.spiders.draw(s),this.checkCollision(),this.gameover()),requestAnimationFrame(this.draw.bind(this,s))}}class y{constructor(s){this.color="brown",this.image=document.getElementById("img-centipede")}draw(s){s.fillStyle=this.color,s.font="70px SF Atarian System",s.textAlign="center",s.fillText("SPIDERS",350,400),s.font="35px SF Atarian System",s.fillText("Press 'Enter' to start your game",350,440),this.image.addEventListener("load",(()=>{s.drawImage(this.image,250,160,200,200)}))}}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("playerscore").textContent="SCORE: 0";const s=document.getElementById("board-canvas").getContext("2d");(new y).draw(s),window.addEventListener("keydown",(t=>{"Enter"===t.key&&(new m).draw(s)}),!0)}))}()}();
//# sourceMappingURL=main.js.map