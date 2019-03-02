window.onload=function(){
	canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    canv.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
	roomIG = new Image();
    roomIG.src="classRoom1.jpg";
    hallwayIG = new Image();
    hallwayIG.src = "hallway-bg.png"
	document.addEventListener("keydown",keyPush);
	document.addEventListener("keyup",keyLift);
	timer = setInterval(game,100);
}
escape = true;
inRoom = false;
map=[];
room= "";
player = [750,250];
function game(){
    if(player[0]>=610 && player[0]<= 610+64 && player[1]>= 490 && player[1] <= 490+80 && !escape ){ //room1
        inRoom = true;
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
        ctx.fillText("CS 1110 ", 200, 150);
        ctx.fillStyle="black";
        ctx.fillRect(500,400,50,150);//draw player
    }
    else if(player[0]>=519 && player[0]<= 519+64 && player[1]>= 130 && player[1] <= 130+80 && !escape ) { //room2
        inRoom = true;
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
        ctx.fillText("CS 2110 ", 200, 150);
        ctx.fillStyle="black";
        ctx.fillRect(500,400,50,150);//draw player
    }
    else if(player[0]>=328 && player[0]<= 328+64 && player[1]>= 490 && player[1] <= 490+80 && !escape ){ //room3
        inRoom = true;
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
        ctx.fillText("CS 3240 ", 200, 150);
        ctx.fillStyle="black";
        ctx.fillRect(500,400,50,150);//draw player
    }
    else if(player[0]>=190 && player[0]<= 190+64 && player[1]>= 130 && player[1] <= 130+80 && !escape ){ //room4
        inRoom = true;
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
        ctx.fillText("CS 4102 ", 200, 150);
        ctx.fillStyle="black";
        ctx.fillRect(500,400,50,150);//draw player
    }else{
    ctx.drawImage(hallwayIG, 0, 0, canv.width, canv.height);
    ctx.fillStyle="black";
    ctx.fillRect(player[0],player[1],50,50);//draw player
    }
    // ctx.fillRect(519,130,64,80);//door2
    // ctx.fillRect(190,130,64,80);//door4
    // ctx.fillRect(328,490,64,80);//door3
	// ctx.fillRect(610,490,64,80);//door1    
}
function keyPush(event){//keypress
	map[event.keyCode] = true;
	if(map[37] && !inRoom){ //left
        player[0] = player[0]-10;   
        escape = false;
	}
	else if(map[38] && !inRoom){ //up
        player[1] = player[1]-10;   
        escape = false;  
	}
	else if(map[39] && !inRoom){ //right
        player[0] = player[0]+10;     
        escape = false;
	}
	else if(map[40] && !inRoom){ //down
        player[1] = player[1]+10; 
        escape = false;    
    }
    else if(map[27]){ //esc
        escape = true;
        inRoom = false;
        player[0] = player[0]+64;
        player[1] = player[1]+1;
    }
}
function keyLift(event){
	map[event.keyCode]=false;
}