// Calculate Button On Trigger
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerCost = getValueFromField('perplayer-field');
    const playerTotalCost = playerCost * elementLength();
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
    return inputFieldValue;
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
    const input1 = document.getElementById('perplayer-field');
    const input1Value = input1.value;
    input1.value = "";

    const element1 = document.getElementById('player-total');
    const element1Value = element1.innerText;
    element1.innerText = "00";

    const input2 = document.getElementById('manager-field');
    const input2Value = input2.value;
    input2.value = "";

    const input3 = document.getElementById('coach-field');
    const input3Value = input3.value;
    input3.value = "";

    const element2 = document.getElementById('total-cost');
    const element2Value = element2.innerText;
    element2.innerText = "00"
}