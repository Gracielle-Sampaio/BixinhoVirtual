const happinessElement = document.getElementById("Felicidade");

        const feedButton = document.getElementById("Alimentar");
        const hungerElement = document.getElementById("Fome");
        const petButton = document.getElementById("pet");
        const playButton = document.getElementById("Brincar");

    let happiness = 100;
    let hunger = 0;

    function updateStatus() {
        felicidade = -5;
        fome = +10;

        felicidade = Math.max(felicidade, 0);
        fome = Math.min(fome, 100);

        happinessElement.textContent = felicidade;
        hungerElement.textContent = fome;

        if (felicidade <= 0 || fome >= 100) {
            gameOver();
        }
    }

    function feed() {
        hunger = +10;
        hunger = Math.max(hunger, 0);
        updateStatus();
    }

    function play() {
        happiness = +10;
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
