//https://teachablemachine.withgoogle.com/models/_BaFJVhlH/

function startVerification(){
    navigator.mediaDevices.getUserMedia({audio: true});
  classifer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_BaFJVhlH/model.json", modelReady);
    
}

function modelReady(){
  classifer.classify(gotResults);
}

function gotResults(error, results){
 console.log('Got Result!');

 if (error) {
 console.log(error);  
 } else {
   console.log(results);
   random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('cat') 
    img1 = document.getElementById('dog')
    img2 = document.getElementById('lion')
    img3 = document.getElementById('cow')

    if (results[0].label == "Meow") {
      img.src = 'mpooo.gif';
      img1.src = 'dog.jpg';
      img2.src = 'lion.jpg';
      img3.src = 'moo.jpg';
    } else if (results[0].label == "bark") {
      img.src = 'https://tse1.mm.bing.net/th?id=OIP.jCsIiOFlFx3VoWzfzO18EwHaIT&pid=Api&P=0&w=160&h=180';
      img1.src = 'bow bow bow.gif';
      img2.src = 'lion.jpg';
      img3.src = 'moo.jpg';
    } else if (results[0].label == "Roar") {
      img.src = 'https://tse1.mm.bing.net/th?id=OIP.jCsIiOFlFx3VoWzfzO18EwHaIT&pid=Api&P=0&w=160&h=180';
      img1.src = 'dog.jpg';
      img2.src = 'ror.gif';
      img3.src = 'moo.jpg';
    }else{
      img.src = 'https://tse1.mm.bing.net/th?id=OIP.jCsIiOFlFx3VoWzfzO18EwHaIT&pid=Api&P=0&w=160&h=180';
      img1.src = 'dog.jpg';
      img2.src = 'lion.jpg';
      img3.src = 'mo.gif';
    }
  }
}
 
