window.onload=function(){
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	image = new Image();
	image.src="classRoom1.jpg";
	document.addEventListener("keydown",keyPush);
	document.addEventListener("keyup",keyLift);
	timer = setInterval(game,100);
}
shooter = [180,380];
cannon = [shooter[0]+17,shooter[1]-8];
cannonBalls = [];
enemyCannonBalls = [];
invaders = [];
dir="";
fire=false;
enemyFire=false;
level=1;
score = 0;
lives = 3;
speed=[];
map=[];
room1 = false;
balls=17;
function game(){
	ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    if(room1){
        ctx.drawImage(image, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 2150 ", 200, 150);
    }
}
function keyPush(event){//keypress
	map[event.keyCode] = true;
	if(map[32] && map[37]){
		fire=true;
		dir="left";
	}
	else if(map[32] && map[39]){
		fire=true;
		dir="right";
	}
	else if(map[32]){
		fire=true;
	}
	else if(map[37]){
		room1 = false;
	}
	else if(map[39]){
		room1 = true;
	}
}
function keyLift(event){
	map[event.keyCode]=false;
}