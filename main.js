function preload(){

}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill(23,45,76)
    circle(50,50,75);
    circle(450,50,75);
    circle(450,450,75);
    circle(50,450,75);
    fill(255,255,255)
    rect(60, 45, 400, 20);
    rect(440,45,20,400);
    rect(60,440,400,20);
    rect(60,45,20,400);
}

function snapshot(){
    save("digitalFrame.png")
}