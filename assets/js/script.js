// Giphy API
// var giphyUrl = `api.giphy.com/v1/gifs/search?q=${randomWord}&limit=${numberOfResults}&api_key=${apiKey}`
var clientWord;

var gifAPIKey = "E91uL2R8hxuTohj77Vu2F36JSiuJwFjR";
var wordAPIKey = "vub4wmJe4XCsCcqUpxqPhQ==kF7YwDOjYcCofVVg";


var genBtn = document.getElementById('generatorBtn');
genBtn.addEventListener('click', ()=>{hide(), callWordAPI()});
function hide() {
      var gifGen = document.getElementById('gif-gen');
      var hideMainEl = document.getElementById('hideSection')
      genBtn.textContent = "Go Back" ;
      if (hideMainEl.style.display === 'none') {
          hideMainEl.style.display = 'block'
          gifGen.style.display = 'none';
          
      } else {
          hideMainEl.style.display = 'none'
          gifGen.style.display = 'block';
      }
  }

// function -> call word api -> generate a word -> put word into the API search (like calling geocode into lat and lon) -> giphy will generate

// listen for a click
//call function
function callWordAPI() {

  // call the word API
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomword',
    headers: { 'X-Api-Key': 'wordAPIKey'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        var plugInWord = result
        console.log(plugInWord, result);
        callGif(result);
        var randomWord = document.getElementById("randomWord");
        randomWord.textContent = result.word

        var previousWord = JSON.parse(localStorage.getItem("previousWord")) || [];
        var newWord = result.word;
        previousWord.unshift(newWord)
        console.log(previousWord);
        localStorage.setItem("previousWord", JSON.stringify(previousWord));
            },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
  });
}
  // generated word = result.word
  // random word variable = randomWord
  //function to generate random word = callWordAPI

  function callGif(result) {
    console.log(result.word);
    var giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${result.word}&limit=${1}&api_key=${gifAPIKey}`
    console.log(giphyUrl);
    fetch(giphyUrl)
        .then (function (response) {
            if (response) {
                return response.json();
            } else {
                console.log(err);
            }
        })
        .then (function (data) {
          if (data.data.length > 0) {
            // console.log(data.data[0].images.downsized_large.url);
            var randomGif = document.getElementById("randomGif");
            var enjoy = document.getElementsByClassName("subtitle");
            enjoy[2].innerHTML = "Enjoy this <strong>gif</strong> made special for you."
            randomGif.src = data.data[0].images.downsized_large.url
          } else {
            var randomGif = document.getElementById("randomGif");
            randomGif.src = "./assets/ScarySnake.png";
            var error = document.getElementsByClassName("subtitle");
            error[2].textContent = "Gif not found, enjoy our pet snake."
          // console.log(randomGif)
          //display scarysnake
          }
        }) 
  } 

  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener('click',searchGif);
    function searchGif () {
      //get value of word from input
      var clientWord = document.getElementById("clientWord");
      clientInput = clientWord.value.trim();
      console.log(clientInput);
      //
      var displayWord = document.getElementById("displayWord");
      displayWord.innerText = clientInput
      hide();
      callClientGif(clientInput);
      console.log(clientInput);
      //retrieve input to clientWord (trim)
      //input word into giphy function
    }
  
  function callClientGif(clientInput) {
    var giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${clientInput}&limit=${1}&api_key=${gifAPIKey}`
        console.log(clientInput);
        fetch(giphyUrl)
            .then (function (response) {
                if (response) {
                    return response.json();
                } else {
                    console.log(err);
                }
            })
            .then (function (data) {
              if (data.data.length > 0) {
                console.log(data.data[0].images.downsized_large.url);
                var randomGif = document.getElementById("randomGif");
                randomGif.src = data.data[0].images.downsized_large.url
              } // else will insert leeches
            })
  }

// will restart above function 
var regenBtn = document.getElementById('regenBtn');
regenBtn.addEventListener('click', clear);

function clear() {
  console.log("HI");
  var displayWord = document.getElementById("displayWord");
  displayWord.textContent = "";
  callWordAPI();
}