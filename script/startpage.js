
play()
function getAJocke() {

    const url = "https://api.chucknorris.io/jokes/random/"
    const theJoke = document.getElementById("joke")
    fetch(url)
        .then(function (response) { return response.json() })
        .then(function (data) {
            let card = document.createElement("div")
            card.setAttribute("class", "card")
            let value = document.createElement("h1")
            value.setAttribute("class", "value")
            value.innerHTML = data.value
            card.appendChild(value)
            theJoke.appendChild(card)


        })
}


function startGameImage() {
    let getImage = document.getElementById('image')
    let img = document.createElement("img")
    img.src = 'images/zombiestart.jpg'
    img.id = "game-images";
    getImage.appendChild(img)

}

function play() {
    getAJocke()
    startGameImage()
}