var score = 0;

function startRace() {
    startTimer();
    document.getElementById("numbers").removeAttribute("hidden");
    document.getElementById("startButton").setAttribute("hidden", true);
    document.getElementById("mathInput").removeAttribute("hidden");
    document.getElementById("scoreLabel").removeAttribute("hidden");
    document.getElementById("mathInput").focus();
    newAddition();

    // Creates 100 stars of varying size
    var numStar = 0;
    var starInterval = setInterval(function () {
        var posx = Math.round(Math.random() * 200);
        var posy = Math.round(Math.random() * 200);
        var scale = Math.round(Math.random() * 5);
        var star = document.createElement("div");
        star.id = "stars";
        star.className = "star";
        star.style.left = posx + "%";
        star.style.top = (posy + 100) + "%";
        star.style.height = scale;
        star.style.width = scale;
        star.style.animationDuration = (8 - scale) + "s";
        document.getElementById("starholder").appendChild(star);
        numStar++;
        if (numStar >= 100) {
            clearInterval(starInterval);
        }
    }, Math.round(Math.random() * 100));
}

function newAddition() {
    var num1 = Math.round(Math.random() * 100);
    var num2 = Math.round(Math.random() * 100);
    numbers.innerHTML = num1 + " + " + num2;
    document.getElementById("mathInput").addEventListener('keyup', (KeyboardEvent) => {
        var userInput = parseFloat(document.getElementById("mathInput").value);
        if(userInput == (num1 + num2)) {
            score++;
            scoreLabel.innerHTML = "Score: " + score;
            document.getElementById("mathInput").value = null;
            newAddition();
        }
    });
}

function startTimer() {
    var time = 60;
    timer.innerHTML = "Time remaining: " + time;
    time--;
    var timerInterval = setInterval(function() {
        timer.innerHTML = "Time remaining: " + time;
        time--;

        if(time < 0) {
            document.getElementById("numbers").setAttribute("hidden", true);
            document.getElementById("mathInput").setAttribute("hidden", true);
            timer.innerHTML = "Time's up!";
            
            document.getElementById("startButton").removeAttribute("hidden");
            clearInterval(timerInterval);
        }
    }, 1000)
}