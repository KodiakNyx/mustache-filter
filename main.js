function preload()
{
    mustache = loadImage(
      "https://i.postimg.cc/CLy23Tf4/Mustache-removebg-preview.png"
    );
}

noseX = 0;
noseY = 0;

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        console.log("mustache x - " + results[0].pose.nose.x)
        console.log("mustache y - " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(mustache, noseX - 25 , noseY +15, 65, 30)
    
}

function take_snapshot()
{
save("Mustache.png")
}


