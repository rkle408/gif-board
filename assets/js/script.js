// Giphy API
// var giphyUrl = `api.giphy.com/v1/gifs/search?q=${randomWord}&limit=${numberOfResults}&api_key=${apiKey}`

// function getGiphy () {
//     fetch(giphyUrl)
//         .then (function (response) {
//             if (response) {
//                 response.json();
//             } else {
//                 console.log(err);
//             }
//         })
//         .then (function (data) {
//             console.log(data);
//         })
// }

// Random word API
var gifAPIKey = "E91uL2R8hxuTohj77Vu2F36JSiuJwFjR";
var wordAPIKey = "vub4wmJe4XCsCcqUpxqPhQ==kF7YwDOjYcCofVVg";

var genBtn = document.getElementById('generatorBtn');
genBtn.addEventListener('click', hide);
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

var regenBtn = document.getElementById("regenBtn");
regenBtn.addEventListener('click', callWordAPI);
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
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
  });
    // console.log(wordAPIKey);

  //populate random word in id="randomWord"
  

  

  // store word local storage
  
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
            console.log(data.data[0].images.downsized_large.url);
            var randomGif = document.getElementById("randomGif");
            randomGif.src = data.data[0].images.downsized_large.url
          } // else will insert leeches
        }) 
  }
}

// path to gif url in console: data.data[0].images.downsized_large.url










// will restart above function 
var regenBtn = document.getElementById('regenBtn');
regenBtn.addEventListener('click', callWordAPI);