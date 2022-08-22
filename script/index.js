document.getElementById('btn-messi').addEventListener('click', function(){
    topFivePlayers('leo-messi', 'btn-messi');
})

document.getElementById('btn-neymar').addEventListener('click', function(){
    topFivePlayers('neymar-junior', 'btn-neymar');
})

document.getElementById('btn-mbappe').addEventListener('click', function(){
    topFivePlayers('mbappe', 'btn-mbappe');
})

// OnClick Player Selection Function
function topFivePlayers(playerName, playerButtonId){
    const playersName = document.getElementById(playerName);
    const playerValue = playersName.innerText;
    const addPlayers = document.createElement('li');
    addPlayers.innerText = playerValue;
    const playersContainer = document.getElementById('player-box');
    playersContainer.appendChild(addPlayers);
    const disableButton = document.getElementById(playerButtonId);
    disableButton.setAttribute("disabled", "");
    elementLength()
}