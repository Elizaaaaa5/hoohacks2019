window.onload=function(){
	canv=document.getElementById("gc");
    board=document.getElementById("chalkboard");
    ctx=canv.getContext("2d");
    canv.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto;";
	roomIG = new Image();
    roomIG.src="classRoom1.jpg";
    floyranIG = new Image();
    floyranIG.src="floryan.png";
    tychoIG = new Image();
    tychoIG.src="tycho.png";
    basitIG = new Image();
    basitIG.src="basit.png";
    hallwayIG = new Image();
    hallwayIG.src = "hallway-bg.png"
	document.addEventListener("keydown",keyPush);
	document.addEventListener("keyup",keyLift);
	timer = setInterval(game,100);
}
room1_count = 0;
room_one_questions = [["x % y returns: \na) the remainder of x divided by y, \nb) the sum of x and y, \nc) x to the power of y","a"],
                        ["what is a string? \na) a natural number, \nb) an array of characters, \nc) a floating point number","b"],
                        ["what is my favorite kind of music?\na) smooth jazz, \nb) electric swing, \nc) the sound of silence, \nd) classical ballads","c"]];
room2_count = 0;
room_two_questions = [["what's the difference between ArrayList and array? \na) ArrayLists can only hold primitive types, \nb) ArrayLists can dynamically resize, \nc) Arrays are not supported in Java, \nd) Arrays are like stacks, ArrayLists like queues","b"],
                        ["what's the difference between interface and abstract data type? \na) you can only implement ADTs, \nb) you can only implement interfaces, \nc) interfaces only use primitive types","a"],
                        ["what's a static method?\na) a method that is unchanged, \nb) a publicly accessible instance of a class, \nc) a method that can be called without creating an instance","c"]]
room3_count = 0;
room_three_questions = [["convert hexadecimal to binary: 0xA455. \na) 0b1010010001010101, \nb) 0b1000011101010101 \nc) 0b0011110001011100, \nd) 0b1111111111111111","a"],
                        ["difference between an AVL and binary tree? \na) AVL trees have red-black nodes, \nb) AVL trees have are self-balancing, \nc) binary trees have a faster runtime for search operations","b"],
                        ["what is big-O for accessing a hash table?\na) O(n log n), \nb) O(1), \nc) O(n^2), \nd) O(2^n)","b"]]
room4_count = 0;
room_four_questions = [["what is big-theta in terms of big O and big omega? \na) The union of big O and big omega, \nb) The intersection of big O and big omega, \nc) They are unrelated", "b"],
                        ["which of the following sorts is stable? \na) heapsort, \nb) mergesort, \nc) selection, \nd) quicksort", "b"],
                        ["what class of algorithm is Dijkstra's algorithm? \na) dynamic programming, \nb) divide and conquer, \nc) greedy algorithm", "c"]]
answer = "";
escape = true;
inRoom = false;
map=[];
room= "";
player = [750,250];
function game(){
<<<<<<< HEAD
    if (!inRoom) {
        board.innerText = "";
    }
    if(player[0]>=610 && player[0]<= 610+64 && player[1]>= 490 && player[1] <= 490+80 && !escape ){ //room1
=======
    if(player[0]>=610 && player[0]<= 610+64 && player[1]>= 490 && player[1] <= 490+80 && !escape ){ //room1 1110
>>>>>>> 8d34298b83f47d738e9da781e19a47026ee3f39e
        inRoom = true;
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
        }
        ctx.fillStyle="black";
        ctx.drawImage(tychoIG, 620, 150, 110, 190);
        ctx.fillRect(500,400,50,150);//draw player
    }
    else if(player[0]>=519 && player[0]<= 519+64 && player[1]>= 130 && player[1] <= 130+80 && !escape ) { //room2 2110
        inRoom = true;
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
        }
        ctx.fillStyle="black";
        ctx.drawImage(basitIG, 620, 150, 110, 190);
        ctx.fillRect(500,400,50,150);//draw player
    }
    else if(player[0]>=328 && player[0]<= 328+64 && player[1]>= 490 && player[1] <= 490+80 && !escape ){ //room3 2150
        inRoom = true;
        ctx.drawImage(roomIG, 0, 0, canv.width, canv.height);
<<<<<<< HEAD
        if (room3_count < room_three_questions.length) {
            board.innerText = room_three_questions[room3_count][0] + "\n\nScore: " + room3_count.toString();
            if (answer == room_three_questions[room3_count][1]) {
                room3_count++;
                answer="";
            }
        } 
        else {
            board.innerText = "You made it through the weed-out class! Impressive.\n\nPress 'ESC' to leave the room."
        }
=======
        ctx.fillStyle="white";
	    ctx.font = "27px Georgia";
        ctx.fillText("CS 2150 ", 200, 150);
>>>>>>> 8d34298b83f47d738e9da781e19a47026ee3f39e
        ctx.fillStyle="black";
        ctx.drawImage(floyranIG, 620, 150, 110, 190);
        ctx.fillRect(500,400,50,150);//draw player
    }
    else if(player[0]>=190 && player[0]<= 190+64 && player[1]>= 130 && player[1] <= 130+80 && !escape ){ //room4 4102
        inRoom = true;
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
        }
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