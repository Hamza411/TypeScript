function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue("playername");
    logPlayer(playerName);

    postScore(80, playerName)
}

function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`New Game Starting Player: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = "MultiMath Player"): void {
    const scoreElement: HTMLElement | null = document.getElementById("postedScore");
    scoreElement!.innerText = `${score} - ${playerName}`
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessege = (messege: string) => console.log(messege);

logMessege("Welcome")