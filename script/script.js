function startGame() {
    gameScore()
    setGameImg()
    drawtable()
    createbuttons()
    OnclickMetod()
}

let playerX = 0
let playerY = 0
let catCount = 0
let findCat = false
let playerDead = false


let images = [
    { image: "images/background1.jpg" },
    { image: "images/background2.jpg" },
    { image: "images/background3.jpg" },
    { image: "images/background4.jpg" },
    { image: "images/background5.jpg" },
    { image: "images/background6.jpg" },
];


let catX = getRandom(0, 5)
let catY = getRandom(0, 5)
let zombieX = getRandom(0, 5)
let zombieY = getRandom(0, 5)



startGame()


function drawtable() {


    let tableBody = document.getElementById("tbl-body")
    tableBody.innerHTML = ""
    let matrix = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];

    let table = document.createElement("table");

    for (let i = 0; i < matrix.length; i++) {

        let row = table.insertRow();

        for (let j = 0; j < matrix[i].length; j++) {

            let cell = row.insertCell()

            if (i == playerX && j == playerY) {
                cell.innerHTML = "●"
            }
            playerX == catX && playerY == catY ? findCat = true : findCat = false
            playerX == zombieX && playerY == zombieY ? playerDead = true : playerDead = false

        }
    }

    tableBody.appendChild(table)
}

function gameScore() {
    let score = document.getElementById("gameScore")
    score.innerHTML = ""

    let getScore = document.createElement("h4")
    getScore.setAttribute("id", "currentscore")
    getScore.innerHTML = "Score: " + catCount

    score.appendChild(getScore)
}

function printDead() {
    let text = document.getElementById("currentscore")
    text.innerHTML = "The zombie finde you "
    catCount = 0
}

function createbuttons() {

    let buttons = document.getElementById("buttons")

    let row1 = document.createElement("div")
    row1.setAttribute("class", "buttonsrow1")
    let _north = document.createElement("input")
    _north.setAttribute("type", "button")
    _north.setAttribute("value", "North")
    _north.setAttribute("id", "north")
    _north.setAttribute("class", "button-move")
    row1.appendChild(_north);


    let row2 = document.createElement("div")
    row2.setAttribute("class", "buttonsrow2")
    let _west = document.createElement("input")
    _west.setAttribute("type", "button")
    _west.setAttribute("value", "West")
    _west.setAttribute("id", "west")
    _west.setAttribute("class", "button-move")

    row2.appendChild(_west)

    let _east = document.createElement("input")
    _east.setAttribute("type", "button")
    _east.setAttribute("value", "East")
    _east.setAttribute("id", "east")
    _east.setAttribute("class", "button-move")

    row2.appendChild(_east)

    let row3 = document.createElement("div")
    row3.setAttribute("class", "buttonsrow3")
    let _south = document.createElement("input")
    _south.setAttribute("type", "button")
    _south.setAttribute("value", "South")
    _south.setAttribute("id", "south")
    _south.setAttribute("class", "button-move")

    row3.appendChild(_south)

    buttons.appendChild(row1)
    buttons.appendChild(row2)
    buttons.appendChild(row3)


}

function move(value) {
    switch (value) {
        case 1:
            if (playerX != 0) {
                playerX--
                drawtable()
                setGameImg()
            }
            break;
        case 2:
            if (playerX != 4) {
                playerX++
                drawtable()
                setGameImg()
            }
            break;
        case 3:
            if (playerY != 0) {
                playerY--
                drawtable()
                setGameImg()
            }
            break;
        case 4:
            if (playerY != 4) {
                playerY++
                drawtable()
                setGameImg()
            }
            break;
    }

}


function OnclickMetod() {

    document.getElementById("north").addEventListener("click", function () { move(1); });
    document.getElementById("south").addEventListener("click", function () { move(2); });
    document.getElementById("west").addEventListener("click", function () { move(3); });
    document.getElementById("east").addEventListener("click", function () { move(4); });
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



function setGameImg() {
    let rndNum = getRandom(0, images.length)

    let image = document.getElementById("image")
    image.innerHTML = ""

    let bgImage = document.createElement("img") // background image
    bgImage.src = images[rndNum].image
    bgImage.setAttribute("class", "image")



    let catimage = document.createElement("img") // cat image
    catimage.src = "images/cat1.jpg"
    catimage.setAttribute("class", "catimage")

    let zombieimage = document.createElement("img") // Zombie image
    zombieimage.src = "images/zombie.jpg"
    zombieimage.setAttribute("class", "zombieimage")

    image.appendChild(bgImage)
    if (findCat == true) {
        catCount++
        gameScore()
        image.appendChild(catimage)
        catX = getRandom(0, 5)
        catY = getRandom(0, 5)
        findCat = false
        drawtable()
    }
    else if (playerDead == true) {
        image.appendChild(zombieimage)
        printDead()
        zombieX = getRandom(0, 5)
        zombieY = getRandom(0, 5)
        playerDead = false
        drawtable()
    }

}
