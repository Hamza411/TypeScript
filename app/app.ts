function startGame() {
    // starting a new game

    let playerName: string = "Hamza";
    logPlayer(playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
    console.log(`New Game Starting Player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);