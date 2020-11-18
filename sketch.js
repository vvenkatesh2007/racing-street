var ball,database,position;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var movingball = database.ref("ball/position");
    movingball.on("value",readposition,showerror)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({
    "x": position.x + x,
    "y": position.y + y        
   })
}

function readposition(data){
 position = data.val();
 ball.x = position.x;
 ball.y = position.y;
}


function showerror(){
 console.log("601 error")   
}