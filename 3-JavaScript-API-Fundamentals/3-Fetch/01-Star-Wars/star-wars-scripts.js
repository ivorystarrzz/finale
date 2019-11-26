var starWarsShipList = document.querySelector('ul');

fetch('https://swapi.co/api/starships/9/') 
.then(function(response) { 
    console.log(response)
    })