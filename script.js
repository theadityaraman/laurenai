function() {
  let inputArea = document.getElementById('input-area')
  let outputArea = document.getElementById('output-area')
// speech rec config fuck shes playing me
  var speech = new webkitSpeechRecognition();
  speech.lang = "en-US";
  speech.start();
// config transcript i dont wanna go i thought we were going to the movies
  speech.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    inputArea.innerHTML = event.results[0][0].transcript;
  }
}
