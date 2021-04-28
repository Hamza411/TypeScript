function startGame() {
    // starting a new game
    var playerName = getInputValue("playername");
    logPlayer(playerName);
    postScore(80, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New Game Starting Player: " + name);
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var scoreElement = document.getElementById("postedScore");
    scoreElement.innerText = score + " - " + playerName;
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessege = function (messege) { return console.log(messege); };
function logError(err) {
    console.log(err);
}
