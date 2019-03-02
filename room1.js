window.onload=function(){
	canv=document.getElementById("gc");
    board=document.getElementById("chalkboard");
    ctx=canv.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    canv.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;";
	roomIG = new Image();
    roomIG.src="classRoom1.jpg";
    floyranIG = new Image();
    floyranIG.src="floryan.png";
    tychoIG = new Image();
    tychoIG.src="tycho.png";
    basitIG = new Image();
    basitIG.src="basit.png";
    brunelleIG = new Image();
    brunelleIG.src="brunelle.png";
    hallwayIG = new Image();
    hallwayIG.src = "hallway-bg.png"
    upPIG = new Image();
    upPIG.src = "upP.png"
    downPIG = new Image();
    downPIG.src = "downP.png"
    rightPIG = new Image();
    rightPIG.src = "rightP.png"
    leftPIG = new Image();
    leftPIG.src = "leftP.png"
	document.addEventListener("keydown",keyPush);
    document.addEventListener("keyup",keyLift);
    audio = [new Audio('1110 Theme.mp3'), new Audio('2110 Theme.mp3'), new Audio('2150 Theme.mp3'), new Audio('4102 Theme.mp3')];
	timer = setInterval(game,10);
}
room1_count = 0;
room_one_questions = [["x % y returns: \na) The remainder of x divided by y \nb) The sum of x and y \nc) x to the power of y","a"],
                        ["What is a string? \na) A natural number, \nb) An array of characters, \nc) A floating point number","b"],
                        ["What is my favorite kind of music?\na) Smooth jazz \nb) Electric swing \nc) The sound of silence \nd) Classical ballads","c"]];
room2_count = 0;
room_two_questions = [["What's the difference between ArrayList and array? \na) ArrayLists can only hold primitive types, \nb) ArrayLists can dynamically resize, \nc) Arrays are not supported in Java, \nd) Arrays are like stacks, ArrayLists like queues","b"],
                        ["What's the difference between interface and abstract data type? \na) Only ADTs contain implementations \nb) Only  interfaces contain implementations \nc) Interfaces only use primitive types","a"],
                        ["What's a static method?\na) A method that is unchanged \nb) A publicly accessible instance of a class \nc) A method that can be called without creating an instance","c"]]
room3_count = 0;
room_three_questions = [["Convert hexadecimal to binary: 0xA455. \na) 0b1010010001010101 \nb) 0b1000011101010101 \nc) 0b0011110001011100 \nd) 0b1111111111111111","a"],
                        ["Difference between an AVL and binary tree? \na) AVL trees have red-black nodes \nb) AVL trees have are self-balancing \nc) Binary trees have a faster runtime for search operations","b"],
                        ["What is big-O for accessing a hash table?\na) O(n log n) \nb) O(1) \nc) O(n^2) \nd) O(2^n)","b"]]
room4_count = 0;
room_four_questions = [["What is big-theta in terms of big O and big omega? \na) The union of big O and big omega, \nb) The intersection of big O and big omega \nc) They are unrelated", "b"],
                        ["Which of the following sorts is stable? \na) Heapsort \nb) Mergesort \nc) Selection \nd) Quicksort", "b"],
                        ["What class of algorithm is Dijkstra's algorithm? \na) Dynamic programming \nb) Divide and conquer, \nc) Greedy algorithm", "c"]]
answer = "";
dir = "left";
escape = true;
inRoom = false;
map=[];
room= "";
player = [750,250];
function game(){
    if (!inRoom) {
        board.innerText = "";
    }
    if(player[0]>=610 && player[0]<= 610+64 && player[1]>= 380 && player[1] <= 490+80 && !escape ){ //room1
        inRoom = true;
        audio[0].play();
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        if (room1_count < room_one_questions.length) {
            board.innerText = room_one_questions[room1_count][0] + "\n\nScore: " + room1_count.toString();
            if (answer == room_one_questions[room1_count][1]) {
                room1_count++;
                answer="";
            }
        } 
        else {
            board.innerText = "You may proceed to 2110. Good luck with that...\n\nPress 'ESC' to leave the room."; 
            audio[0].pause();
        }
        ctx.fillStyle="black";
        ctx.drawImage(tychoIG, 620, 120, 128, 256);
        ctx.drawImage(upPIG,500,400,115,250);//draw player
    }
    else if(player[0]>=519 && player[0]<= 519+64 && player[1]>= 130 && player[1] <= 130+80 && !escape ) { //room2 2110
        inRoom = true;
        audio[1].play();
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        if (room2_count < room_two_questions.length) {
            board.innerText = room_two_questions[room2_count][0] + "\n\nScore: " + room2_count.toString();
            if (answer == room_two_questions[room2_count][1]) {
                room2_count++;
                answer="";
            }
        } 
        else {
            board.innerText = "Good work! Keep going!...\n\nPress 'ESC' to leave the room."
            audio[1].pause();
        }
        ctx.fillStyle="black";
        ctx.drawImage(basitIG, 620, 120, 128, 256);
        ctx.drawImage(upPIG,500,400,115,250);//draw player
    }
    else if(player[0]>=328 && player[0]<= 328+64 && player[1]>= 380 && player[1] <= 490+80 && !escape ){ //room3 2150
        inRoom = true;
        audio[2].play();
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        if (room3_count < room_three_questions.length) {
            board.innerText = room_three_questions[room3_count][0] + "\n\nScore: " + room3_count.toString();
            if (answer == room_three_questions[room3_count][1]) {
                room3_count++;
                answer="";
            }
        } 
        else {
            board.innerText = "You made it through the weed-out class! Impressive.\n\nPress 'ESC' to leave the room."
            audio[2].pause();
        }
        ctx.fillStyle="black";
        ctx.drawImage(floyranIG, 620, 120, 128, 256);
        ctx.drawImage(upPIG,500,400,115,250);//draw player
    }
    else if(player[0]>=190 && player[0]<= 190+64 && player[1]>= 130 && player[1] <= 130+80 && !escape ){ //room4 4102
        inRoom = true;
        audio[3].play();
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
        if (room4_count < room_four_questions.length) {
            board.innerText = room_four_questions[room4_count][0] + "\n\nScore: " + room4_count.toString();
            if (answer == room_four_questions[room4_count][1]) {
                room4_count++;
                answer="";
            }
        } 
        else {
            board.innerText = "Now off to graduation... I guess...\n\nPress 'ESC' to leave the room."
            audio[3].pause();
        }
        ctx.fillStyle="black";
        ctx.drawImage(brunelleIG, 620, 120, 128, 256);
        ctx.drawImage(upPIG,500,400,115,250);//draw player
	}
	else if(player[0]==750 && player[1]==250){
		inRoom = false;
		ctx.drawImage(hallwayIG, 0, 0, canv.width, canv.height);
		ctx.drawImage(leftPIG,player[0],player[1],65,100);//draw player
		ctx.font = "30px Comic Sans MS";
		ctx.fillStyle="black";
		ctx.textAlign = "center";
		ctx.fillText("Hello there. Welcome to hoohacksHero!", canv.width/2, canv.height/2); 
		
	}
    else{
    ctx.drawImage(hallwayIG, 0, 0, canv.width, canv.height);
    ctx.fillStyle="black";
    if(dir=="left"){
        ctx.drawImage(leftPIG,player[0],player[1],65,100);//draw player
    }
    else if(dir=="up"){
        ctx.drawImage(upPIG,player[0],player[1],65,100);//draw player
    }
    else if(dir=="right"){
        ctx.drawImage(rightPIG,player[0],player[1],65,100);//draw player
    }
    else if(dir=="down"){
        ctx.drawImage(downPIG,player[0],player[1],65,100);//draw player
    }
    }
    // ctx.fillRect(519,130,64,80);//door2
    // ctx.fillRect(190,130,64,80);//door4
    // ctx.fillRect(328,490,64,80);//door3
	// ctx.fillRect(610,490,64,80);//door1    
}
function keyPush(event){//keypress
	map[event.keyCode] = true;
	if(map[37] && !inRoom){ //left
        player[0] = player[0]-7;   
        escape = false;
        dir = "left";
	}
	else if(map[38] && !inRoom){ //up
        player[1] = player[1]-7;   
        escape = false; 
        dir = "up"; 
	}
	else if(map[39] && !inRoom){ //right
        player[0] = player[0]+7;     
        escape = false;
        dir = "right"; 
	}
	else if(map[40] && !inRoom){ //down
        player[1] = player[1]+7; 
        escape = false; 
        dir = "down";    
    }
    else if(map[27]){ //esc
        escape = true;
        inRoom = false;
        player[0] = player[0]+64;
        player[1] = player[1]+1;
    }
    if (event.keyCode == 65 && inRoom) {
        answer = "a";
    }
    if (event.keyCode == 66 && inRoom) {
        answer = "b";
    }
    if (event.keyCode == 67 && inRoom) {
        answer = "c";
    }
    if (event.keyCode == 6 && inRoom) {
        answer = "d";
    }
}
function keyLift(event){
	map[event.keyCode]=false;
}