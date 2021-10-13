function preload(){

}

function setup(){
canvas=createCanvas(600,300);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide()

}

function draw(){
    image(video,0,0,600,300);
    fill(0,128,0);
    stroke(0,128,0);
    circle(30,30,40);
    circle(575,30,40);
    circle(30,270,40);
    circle(575,270,40);

    fill(255,0,0);
    stroke(0,0,0);
    rect(50,20,505,20);
    rect(50,260,505,20);
    rect(20,50,20,205);
    rect(560,50,20,205);
}

function take_snapshot(){
    save('your_clicked_pic.png');
}

