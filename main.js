leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
var text_name = document.getElementById("text_name").value;
function draw(){
    background("#33aaff");
    textSize(difference);
    fill("#66ff99");
    text(text_name, 50, 400);
}
function modelLoaded(){
    console.log("Posenet is initialized!");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].posoe.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}