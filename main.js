function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/r2aWV0RzW/model.json',modelready);
}

function modelready()
{
    console.log(modelready);
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}