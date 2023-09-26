img="";
status="";
objects=[];

function preload(){
img=loadImage("737 max.jpeg")
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoad);
    document.getElementById("status").innerHTML="status: detecting objects"

}
function modelLoad(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
objects=results
    }

}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){

    
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="objects detected";
fill("red");
    text(objects[i].label,objects[i].x,objects[i].y)
    noFill();
    stroke("red")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

}
    }
}


