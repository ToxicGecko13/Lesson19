let cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
let cardValue = [];
let cardId = [];
let cardsFlipped = 0;

Array.prototype.shuffleCards = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    };
}

function newBoard() {
    cardsFlipped = 0;
    let output = '';
    cards.shuffleCards();
    for(let i = 0; i < cards.length; i++) {
        output += '<div id="card'+i+'" onclick="flipCard (this,\''+cards[i]+'\')"></div>';
    }
    document.getElementById('MemoryBoard').innerHTML = output;
}
window.addEventListener(onload, newBoard())

function flipCard(card,val) {
    if(card.innerHTML == "" && cardValue.length < 2) {
        card.style.background = 'lightblue';
        card.innerHTML = val;
        if(cardValue.length == 0) {
            cardValue.push(val);
            cardId.push(card.id);
        } else if(cardValue.length == 1) {
            cardValue.push(val);
            cardId.push(card.id);
            if(cardValue[0] == cardValue[1]) {
                cardsFlipped += 2;
                // Clear both arrays
                cardValue = [];
                cardId = [];
                // Check to see if the whole board is cleared
                if(cardsFlipped == cards.length) {
                    alert("Board cleared... generating new board");
                    document.getElementById('MemoryBoard').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back() {
                    // Flip the 2 cards back over 
                    let card1 = document.getElementById(cardId[0]);
                    let card2 = document.getElementById(cardId[1]);
                    card1.style.background = 'url(Img/CardBack.jpg.png) no-repeat';
                    card1.innerHTML = "";
                    card2.style.background = 'url(Img/CardBack.jpg.png) no-repeat';
                    card2.innerHTML = "";
                    // Clear both arrays 
                    cardValue = [];
                    cardId = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}