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

  //populate random word in id="randomWord"

  // store word local storage
  


  function callGif() {


  }
}













// will restart above function 
var regenBtn = document.getElementById('regenBtn');
regenBtn.addEventListener('click', callWordAPI);