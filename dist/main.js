!function(){"use strict";!function(){var s=class{constructor(s){this.color="black"}draw(s){s.fillStyle=this.color,s.fillRect(0,0,700,700)}drawLine(s){s.fillStyle="gray",s.fillRect(0,640,700,1)}};class t{constructor(s){this.x=s.x,this.y=s.y,this.x_move=2*s.direction,this.image=new Image,this.image.src="./src/assets/centipede.png"}draw=function(s){s.drawImage(this.image,this.x,this.y,20,20)};move(){this.x+=this.x_move}update(){this.x_move=-this.x_move,this.y+=20}}function i(s,t){return 20*Math.floor((Math.random()*(t-s)+s)/20)}function e(s,t,i,e){return Math.sqrt(Math.pow(i-s,2)+Math.pow(e-t,2))}class r{constructor(s){this.x=i(200,500),this.y=0,this.spiders=[],this.direction=Math.pow(-1,(2,Math.floor(2*Math.random()))),this.initialize()}initialize(){for(let s=0;s<10;s++){const i=new t({x:this.x+20*s*this.direction,y:this.y,direction:this.direction});this.spiders.push(i)}}destroy(s){const t=this.spiders.indexOf(s);this.spiders.splice(t,1)}draw(s){this.spiders.forEach((t=>{(t.x>680||t.x<0)&&t.update(),t.move(),t.draw(s)}))}}class o{constructor(s){this.x=350,this.y=675,this.image=new Image,this.image.src="./src/assets/player.png",this.bullets=[],this.keyBind()}keyBind(){window.addEventListener("keydown",(s=>{if("ArrowLeft"==s.key||"a"==s.key)this.x>0&&(this.x-=5);else if("ArrowRight"==s.key||"d"==s.key)this.x<675&&(this.x+=5);else if("ArrowUp"==s.key||"w"==s.key)this.y>=650&&(this.y-=5);else if("ArrowDown"==s.key||"s"==s.key)this.y<675&&(this.y+=5);else if(" "==s.key){const s=new class{constructor(s){this.x=s.x,this.y=s.y,this.color="#49fb35"}move(){this.y-=5}draw=function(s){s.fillStyle=this.color,s.fillRect(this.x+10,this.y,5,5)}}({x:this.x,y:this.y});this.bullets.push(s)}}),!0)}destroy(s){const t=this.bullets.indexOf(s);this.bullets.splice(t,1)}draw(s){s.drawImage(this.image,this.x,this.y,25,25),this.bullets.forEach((t=>{t.y<=-10?this.bullets.shift():(t.move(),t.draw(s))}))}}class h{constructor(s){this.x=s.x,this.y=s.y,this.image=new Image,this.image.src="./src/assets/mushroom1.png",this.counter=0}draw=function(s){s.drawImage(this.image,this.x,this.y,20,20)}}class a{constructor(s){this.obstacles=[],this.initialize()}initialize(){for(let s=0;s<40;s++){const s=new h({x:i(20,680),y:i(20,640)});this.obstacles.includes(s)||this.obstacles.push(s)}}newBlock(s,t){let i=20*Math.floor(s/20),e=20*Math.floor(t/20);const r=new h({x:i,y:e});this.obstacles.push(r)}hit(s){switch(s.counter++){case 0:s.image.src="./src/assets/mushroom2.png";break;case 1:s.image.src="./src/assets/mushroom3.png";break;case 2:s.image.src="./src/assets/mushroom4.png";break;case 3:this.destroy(s)}}destroy(s){const t=this.obstacles.indexOf(s);this.obstacles.splice(t,1)}draw(s){this.obstacles.forEach((t=>{t.draw(s)}))}}class c{constructor(t){this.board=new s,this.board2=new s,this.spiders=new r,this.player=new o,this.obstacles=new a}checkCollision(){this.player.bullets.forEach((s=>{this.obstacles.obstacles.forEach((t=>{const[i,r]=[t.x,t.y],[o,h]=[s.x,s.y];e(i,r,o,h)<=10&&(this.obstacles.hit(t),this.player.destroy(s))})),this.spiders.spiders.forEach((t=>{const[i,r]=[t.x,t.y],[o,h]=[s.x,s.y];e(i,r,o,h)<=10&&(this.spiders.destroy(t),this.player.destroy(s),this.obstacles.newBlock(i,r))}))})),this.spiders.spiders.forEach((s=>{this.obstacles.obstacles.forEach((t=>{const[i,e]=[t.x,t.y],[r,o]=[s.x,s.y],h=function(s,t,i,e){if(t===e){if(s<i)return i-s;if(s>=i)return i-s}}(i,e,r,o);(h>0&&h<20||h>-20&&h<0)&&(s.y+=20)}))}))}draw(s){s.clearRect(0,0,700,700),this.board.draw(s),this.board2.drawLine(s),this.obstacles.draw(s),this.player.draw(s),this.spiders.draw(s),this.checkCollision(),requestAnimationFrame(this.draw.bind(this,s))}}document.addEventListener("DOMContentLoaded",(function(){const s=document.getElementById("board-canvas").getContext("2d");(new c).draw(s)}))}()}();
//# sourceMappingURL=main.js.map