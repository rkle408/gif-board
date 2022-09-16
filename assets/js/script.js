// Team Goal: Function -> Call word api -> Generate a word -> Put word into the GIPHY API search -> GIPHY will generate

var clientWord;

// Global variables of API keys from random word generator and gif generator since we need to use them multiple times
var gifAPIKey = "E91uL2R8hxuTohj77Vu2F36JSiuJwFjR";
var wordAPIKey = "vub4wmJe4XCsCcqUpxqPhQ==kF7YwDOjYcCofVVg";

// This button will generate a random word from our random word API, and it will hide the home page to display the word and gif
var genBtn = document.getElementById('generatorBtn');
genBtn.addEventListener('click', ()=>{hide(), callWordAPI()}); // Made a single function that will actually call 2 functions at the same time (hide home & generate word)
function hide() {
      var gifGen = document.getElementById('gif-gen');
      var hideMainEl = document.getElementById('hideSection')
      // THIS ACTUALLY DOES NOT DISPLAY "GO BACK"
      if (hideMainEl.style.display === 'none') {
          hideMainEl.style.display = 'block'
          gifGen.style.display = 'none';
      } else {
          hideMainEl.style.display = 'none'
          gifGen.style.display = 'block';
      }
}

var goBack = document.getElementById('goBack');
goBack.addEventListener('click', () => {
  location.reload();
})

// Random word generator function:
function callWordAPI() {
  // Call the random word API, making sure we have jQuery linked to use ajax method:
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomword',
    headers: { 'X-Api-Key': 'wordAPIKey'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        var plugInWord = result
        console.log(plugInWord, result);
        // This following function allows the randomly generated word to be placed into the GIPHY API that will return an associated gif
        callGif(result);
        var randomWord = document.getElementById("randomWord");
        randomWord.textContent = result.word
        // Store our randomly generated words into local storage:
        var previousWord = JSON.parse(localStorage.getItem("previousWord")) || [];
        var newWord = result.word;
        // This following function allows the new word to be added to the beginning of the array
        previousWord.unshift(newWord)
        console.log(previousWord);
        localStorage.setItem("previousWord", JSON.stringify(previousWord));
            },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
  });
}

// Gif generator function WITH the randomly generated word (aka result.word) to search through their database using the fetch method:
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
            // Ensure we have an image that renders to the screen at an appropriate size:
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

// These are: an event listener and function for the instance that the user wants to input their own word, which will then also be used to search through GIPHY for an associated gif
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', searchGif);
function searchGif () {
  //get value of word from input
    var clientWord = document.getElementById("clientWord");
      clientInput = clientWord.value.trim();
      //console.log(clientInput);

    var displayWord = document.getElementById("displayWord");
      displayWord.innerText = clientInput
      // Call functions to hide home page and to search for user's input word:
      hide();
      callClientGif(clientInput);
}
 
// Function that will place the user's input word into the GIPHY API utilizing fetch method
function callClientGif(clientInput) {
    var giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${clientInput}&limit=${1}&api_key=${gifAPIKey}`
      // console.log(clientInput);
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
        } // else will insert leeches photo
      })
}

// Event listener and function will allow you to generate a random word once you have already received a word and gif:
var regenBtn = document.getElementById('regenBtn');
regenBtn.addEventListener('click', clear);

// This function clears the data if you input your own word and want a new word generated and displayed via the above button when clicked:
function clear() {
  //console.log("HI");
  var displayWord = document.getElementById("displayWord");
  displayWord.textContent = "";
  callWordAPI();
}