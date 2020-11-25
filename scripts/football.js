function footballPoints(wins, draws, losses) {
    var wins = document.getElementById('wins').value;
    var draws = document.getElementById('draws').value;
    var losses = document.getElementById('losses').value;

    var totalPoints = (wins * 3) + (draws * 1) + (losses * 0);

    var resultText = document.getElementById('result').innerHTML = `Team has made ${totalPoints} points so far!`;
}
