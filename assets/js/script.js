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

