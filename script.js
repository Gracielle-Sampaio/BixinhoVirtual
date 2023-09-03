const happinessElement = document.getElementById("happiness");
        const feedButton = document.getElementById("feed");
        const hungerElement = document.getElementById("hunger");
        const petButton = document.getElementById("pet");
        const playButton = document.getElementById("play");

    let happiness = 50;
    let hunger = 50;

    function updateStatus() {
        happiness -= 5;
        hunger += 10;

        happiness = Math.max(happiness, 0);
        hunger = Math.min(hunger, 100);

        happinessElement.textContent = happiness;
        hungerElement.textContent = hunger;

        if (happiness <= 0 || hunger >= 100) {
            gameOver();
        }
    }

    function feed() {
        hunger -= 20;
        hunger = Math.max(hunger, 0);
        updateStatus();
    }

    function play() {
        happiness += 10;
        happiness = Math.min(happiness, 100);
        updateStatus();
    }

    function pet() {
        happiness += 5;
        happiness = Math.min(happiness, 100);
        updateStatus();
    }

    
    function gameOver() {
        feedButton.disabled = true;
        playButton.disabled = true;
        petButton.disabled = true;


        const gameOverMessage = document.createElement("p");
        gameOverMessage.textContent = "Seu bichinho não está mais feliz ou com fome. Infelizmente, ele não resistiu. Fim de jogo.";
        document.querySelector(".tamagotchi").appendChild(gameOverMessage);
    }

    feedButton.addEventListener("click", feed);
    playButton.addEventListener("click", play);
    petButton.addEventListener("click", pet);

    setInterval(updateStatus, 10000);
