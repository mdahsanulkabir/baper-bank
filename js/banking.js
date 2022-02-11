//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositedInput = document.getElementById('deposit-input');
    const depositAmount = depositedInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    //clear deposit input field
    depositedInput.value = '';
});