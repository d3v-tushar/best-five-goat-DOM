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
function elementLength(){
    const li = document.querySelectorAll('li');
    for(lis of li){
    }
    return li.length;
}
const playerCount = elementLength();
console.log(elementLength());

function topFivePlayers(playerName, playerButtonId){
    if(playerCount === 6){
        alert('Maximum Player Reached')
    }
    else{
    const playersName = document.getElementById(playerName);
    const playerValue = playersName.innerText;
    const addPlayers = document.createElement('li');
    addPlayers.innerText = playerValue;
    const playersContainer = document.getElementById('player-box');
    playersContainer.childNodes.length;
    console.log(playersContainer);
    playersContainer.appendChild(addPlayers);
    const disableButton = document.getElementById(playerButtonId);
    disableButton.setAttribute("disabled", "");
    elementLength();
    }
}