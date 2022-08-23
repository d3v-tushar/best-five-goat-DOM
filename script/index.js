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
// function elementLength(){
//     const li = document.querySelectorAll('li');
//     for(lis of li){
//     }
//     return li.length;
// }
// const playerCount = elementLength();
// console.log(elementLength());

// function topFivePlayers(playerName, playerButtonId){
//     const playersName = document.getElementById(playerName);
//     const playerValue = playersName.innerText;
//     const addPlayers = document.createElement('li');
//     addPlayers.innerText = playerValue;
//     const playersContainer = document.getElementById('player-box');
//     playersContainer.appendChild(addPlayers);
//     const disableButton = document.getElementById(playerButtonId);
//     disableButton.setAttribute("disabled", "");
// }

function topFivePlayers(playerName, playerButtonId){
    const playersContainer = document.getElementById('player-box');
    if(playersContainer.children.length > 4){
        alert('Maximum Player Reached');
    }
    else{
    const playersName = document.getElementById(playerName);
    const playerValue = playersName.innerText;
    const addPlayers = document.createElement('li');
    addPlayers.innerText = playerValue;
    const playersContainer = document.getElementById('player-box');
    playersContainer.appendChild(addPlayers);
    const disableButton = document.getElementById(playerButtonId);
    disableButton.setAttribute("disabled", "");
    const selectedCount = document.getElementById('selectedCount');
    selectedCount.innerText = playersContainer.children.length;
    }
}