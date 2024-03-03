"use strick";

const colors = [
                "green", 
                "red", 
                "rgba(133,122,200)", 
                "#f15025", 
                "gray", 
                "yellow"
            ];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');



btn.addEventListener("click", () => {
    const randomColors = getRandomNumber();
    document.body.style.backgroundColor = colors[randomColors];
    color.textContent = colors[randomColors];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};