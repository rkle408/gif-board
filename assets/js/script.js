// Giphy API
var giphyUrl = `api.giphy.com/v1/gifs/search?q=${randomWord}&limit=${numberOfResults}&api_key=${apiKey}`

function getGiphy () {
    fetch(giphyUrl)
        .then (function (response) {
            response.json();
        })
}




