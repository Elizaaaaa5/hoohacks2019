window.onload=function(){
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	roomIG = new Image();
    roomIG.src="classRoom1.jpg";
    hallwayIG = new Image();
    hallwayIG.src = "hallway-bg.png"
	document.addEventListener("keydown",keyPush);
	document.addEventListener("keyup",keyLift);
	timer = setInterval(game,100);
}
map=[];
room= "";
player = [750,250];
function game(){
    ctx.drawImage(hallwayIG, 0, 0, canv.width, canv.height);
    if(room == "room1"){
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
        ctx.fillText("CS 1110 ", 200, 150);
    }
    else if(room == "room2"){
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 2110 ", 200, 150);
    }
    else if(room == "room3"){
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 3240 ", 200, 150);
    }
    else if(room == "room4"){
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
	    ctx.fillText("CS 4102 ", 200, 150);
    }
    ctx.fillStyle="black";
    ctx.fillRect(player[0],player[1],50,50);//draw player
	ctx.fillRect(500,500,50,200);//draw player    
}
function keyPush(event){//keypress
	map[event.keyCode] = true;
	if(map[37]){ //left
        player[0] = player[0]-10;   
	}
	else if(map[38]){ //up
        player[1] = player[1]-10;     
	}
	else if(map[39]){ //right
        player[0] = player[0]+10;     
	}
	else if(map[40]){ //down
        player[1] = player[1]+10;     
    }
}
function keyLift(event){
	map[event.keyCode]=false;
}