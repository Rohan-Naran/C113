function preload() {
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(200,200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0,0,500,500);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById('filter_color').value;
}