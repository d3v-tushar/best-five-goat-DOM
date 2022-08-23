// Calculate Button On Trigger
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerCost = getValueFromField('perplayer-field');
    const playersCount = document.getElementById('player-box');
    const playerTotalCost = playerCost * playersCount.children.length;
    const cost = setValueToElement('player-total', playerTotalCost);
})

// Calculate All Button On Trigger
document.getElementById('btn-total').addEventListener('click', function(){
    const updatePlayerCost = getValueFromElement('player-total');
    const managerCost = getValueFromField('manager-field');
    const coachCost = getValueFromField('coach-field')
    const totalSum = updatePlayerCost + managerCost + coachCost;
    const total = setValueToElement('total-cost', totalSum);
})

// Function For Getting Values From Input field
function getValueFromField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    if(isNaN(inputFieldValue) || inputFieldValue < 0){
        alert('Please Enter Positive Numbers')
    }
    else{
        return inputFieldValue;
    }
}

// Function For Getting Value From Element
function getValueFromElement(elementId){
    const elementPreviousValue = document.getElementById(elementId);
    const elementPreviousValueString = elementPreviousValue.innerText;
    const newElementValue = parseFloat(elementPreviousValueString);
    return newElementValue;
}

// Function For Setting Value To Element 
function setValueToElement(setElementId, value){
    const elementText = document.getElementById(setElementId);
    const elementTextString = elementText.innerText;
    elementText.innerText = value;
}

// Reset Button Function
function resetFunction(){
    const perPlayerField = document.getElementById('perplayer-field');
    const perPlayerFieldValue = perPlayerField.value;
    perPlayerField.value = "";

    const playerTotal = document.getElementById('player-total');
    const playerTotalValue = playerTotal.innerText;
    playerTotal.innerText = "00";

    const managerField = document.getElementById('manager-field');
    const managerFieldValue = managerField.value;
    managerField.value = "";

    const coachField = document.getElementById('coach-field');
    const coachFieldValue = coachField.value;
    coachField.value = "";

    const totalCost = document.getElementById('total-cost');
    const totalCostValue = totalCost.innerText;
    totalCost.innerText = "00"
}