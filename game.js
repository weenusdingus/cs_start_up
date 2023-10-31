
var character = document.getElementById("character");
var block = document.getElementById("block");
var gameDiv = document.getElementById("game");
var scoreDiv = document.getElementById("score");
var prDiv = document.getElementById("pr");
var start_button = document.getElementById("start-button");
var audioDiv = document.getElementById("song");

var score = 0;
var pr;

if (localStorage.getItem("pr")) {
    pr = localStorage.getItem("pr");
}
else {
    pr = 0;
}

prDiv.innerText = pr;

function playGame() {
    score = 0;
    gameDiv.focus();
    audioDiv.play();
    audioDiv.addEventListener('ended', () => {
        this.currentTime = 0;
        this.play();
    });

    let checkDead = setInterval(function() {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        score = score + 1;
        scoreDiv.innerText = score;
    
        if (blockLeft < 30 && blockLeft > 0 && characterTop >= 99) {
            block.style.animation = "none";
            block.style.display = "none";
            alert("death by cactus");
            if (score > pr) {
                pr = score;
                prDiv.innerText = pr;
                localStorage.setItem("pr", pr);
            }
            clearInterval(checkDead);
        }
    }, 10);
}

function jump(event) {
    console.log(event.key);
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }

    setTimeout(() => {
        character.classList.remove("animate");
    }, 500);
}

start_button.addEventListener("onclick", playGame());
gameDiv.addEventListener("keydown", function(e) { jump(e) });
