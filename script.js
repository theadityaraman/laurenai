function listen() {
  let inputArea = document.getElementById('input-area')
  let outputArea = document.getElementById('output-area')
// speech rec config fuck shes playing me
  var speech = new webkitSpeechRecognition();
  speech.lang = "en-US";
  speech.start();
// config transcript i dont wanna go i thought we were going to the movies
  speech.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    if (transcript.includes("hello")) {
         outputArea.innerHTML = "Hello, Mr. Raman."
    } else if (transcript.includes("weather")) {
        window.open("https://www.google.com/search?q=weather") 
    } else {
        outputArea.innerHTML = "I don't know what you mean."
    }
    inputArea.innerHTML = event.results[0][0].transcript;
  }
}
