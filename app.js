
let player1 = 0;
let player2 = 0;

const player1plus = document.querySelector('#plusPlayer1');
const player2plus = document.querySelector('#plusPlayer2');
const reset = document.querySelector('#reset');
const pointDash = document.querySelector('#pointDash');
const winPoint = document.querySelector('#number');


player1plus.addEventListener('click',function(){
    player1 = player1 + 1;
    pointDash.innerHTML = `<strong id="p1point">${player1}</strong> to <strong id="p2point">${player2}</strong>`;
    if(player1 == winPoint.value){
        document.querySelector('#p1point').style.color = 'green';
        player1plus.disabled = true;
        player2plus.disabled = true;
    }
})

player2plus.addEventListener('click',function(){
    player2 = player2 + 1;
    pointDash.innerHTML = `<strong id="p1point">${player1}</strong> to <strong id="p2point">${player2}</strong>`;
    if(player2 == winPoint.value){
        document.querySelector('#p2point').style.color = 'green';
        player1plus.disabled = true;
        player2plus.disabled = true;
    }
    
})

reset.addEventListener('click',function(){
    player1 = 0;
    player2 = 0;
    pointDash.innerHTML = `<strong id="p1point">${player1}</strong> to <strong id="p2point">${player2}</strong>`;
    winPoint.value = "";
    player1plus.disabled = false;
    player2plus.disabled = false;
    
})