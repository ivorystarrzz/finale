var apiKey = '14384898-12bbfb22e83e11e8a07512b1d';


let form= document.getElementById("form")
let search= document.getElementById("search")

form.addEventListener("submit",fetchImages)

function fetchImages(e){
    e.preventDefault()
    let url = "https://pixabay.com/api/?key="+apiKey+"&q="+search.value
    fetch(url)
.then(res => res.json())
.then(json =>{
    console.log(json)
    console.log(json.hits[0].largeImageURL)
    displayImages(json.hits)
})
}

function displayImages(json){
    let body= document.getElementById("pictures")
    while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    json.forEach(data=>{
        let pic= document.createElement("img")
        pic.setAttribute("src",data.largeImageURL)
        body.appendChild(pic)
    }
        )
}