var host = 'http://localhost:3000';

function getImage() {
    var script = document.querySelector('[src*="localhost"]');
    var div = script.parentElement;
    var image = document.createElement('img');
    fetch(host + '/images/get').then(function (response) {
        return response.json();
    })
    .then(function(response) {
        div.innerHTML = null;
        image.setAttribute('src', response.src);
        div.append(image);
    })
    .catch(function(error) {
        console.log(error);
    });
}

getImage();