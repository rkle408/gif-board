// Giphy API
var giphyUrl = "api.giphy.com/v1/gifs/search"
// Random word API

var genBtn = document.getElementById('generatorBtn');
genBtn.addEventListener('click', hide);
  function hide() {
      var gifGen = document.getElementById('gif-gen');
      var h2 = document.getElementById('h2-1');
      if (h2.style.display === 'none') {
          h2.style.display = 'block'
          gifGen.style.display = 'none';
      } else {
          h2.style.display = 'none'
          gifGen.style.display = 'block';

      }
  
  }

