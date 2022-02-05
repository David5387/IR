Webcam.set({
width:400,
height:250,
image_format:'jpeg',
jpeg_quality:90
});
Webcam.attach(document.getElementById("TurnOnWebcam"));

function capture(){
     Webcam.snap(function(data_uri){
        document.getElementById("TurnOnPicture").innerHTML = '<img id = "img1" src = "'+ data_uri +'"/>';


     });
    
}
console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7mTGWJRdh/model.json', modelLoaded);

function modelLoaded(){
   console.log('modelloaded!!!!!!!!!!!!!!!!!!!!!!!!!!!');
}

function checknoworwhitepolarbearwontsleep(){
   img = document.getElementById('img1');
   classifier.classify(img, gotResult);

}
function gotResult(error, results){
if(error){
console.error(error);
}else{
console.log(results);
document.getElementById("span1").innerHTML = results[0].label;
document.getElementById("span2").innerHTML = results[0].confidence.toFixed(2);
}
}