window.onload=function(){
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	image = new Image();
	image.src="classRoom1.jpg";
	document.addEventListener("keydown",keyPush);
	document.addEventListener("keyup",keyLift);
	timer = setInterval(game,100);
}
fire = false;
dir="";
map=[];
room= "";
function game(){
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    if(room == "room1"){
        ctx.drawImage(image, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 1110 ", 200, 150);
    }
    else if(room == "room2"){
        ctx.drawImage(image, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 2110 ", 200, 150);
    }
    else if(room == "room3"){
        ctx.drawImage(image, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 3240 ", 200, 150);
    }
    else if(room == "room4"){
        ctx.drawImage(image, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 4102 ", 200, 150);
    }
}
function keyPush(event){//keypress
	map[event.keyCode] = true;
	if(map[37]){
		room = "room1";
	}
	else if(map[38]){
        room = "room2";
	}
	else if(map[39]){
        room = "room3";
	}
	else if(map[40]){
        room = "room4";
    }
    else{
        room = "";
    }
}
function keyLift(event){
	map[event.keyCode]=false;
}