const counterLabel = document.getElementById("counterLabel");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;


increaseBtn.onclick = function(){
    count++;
    counterLabel.textContent = count; 
}
decreaseBtn.onclick = function(){
    count--;
    counterLabel.textContent = count; 
}
resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count; 
}