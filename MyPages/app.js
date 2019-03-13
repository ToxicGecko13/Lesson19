// Vue converted code

Array.prototype.shuffleCards = function() {
    let i = this.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    };
};

var vm = new Vue({ 
    el: '#MemoryBoard',
    data: {
        cards: ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'],
        cardValue: [],
        cardId: [],
        cardsFlipped: 0,
    },

    mounted: function() {
        this.InitializeBoardState();
    },

    methods: {
        InitializeBoardState: function() {
            this.newBoard();
            this.cards.shuffleCards();

            document.querySelectorAll('.cards').forEach((element) => {
                if (element.innerText === "") {
                    element.addEventListener('click', this.flipCard);
                };
            });
        },

        newBoard: function() {
            cardsFlipped = 0;
            let output = '';
            document.getElementById('MemoryBoard').innerHTML = output;
        },

        flipCard: function(cards, val) {
            if(cards.innerHTML == "" && cardValue.length < 2) {
                cards.style.background = 'lightblue';
                cards.innerHTML = val;
                if(cardValue.length == 0) {
                    cardValue.this.push(val);
                    cardId.this.push(cards.id);
                } else if(cardValue.length == 1) {
                    cardValue.this.push(val);
                    cardId.this.push(cards.id);
                    if(cardValue[0] == cardValue[1]) {
                        cardsFlipped += 2;
                        // Clear both arrays
                        cardValue = [];
                        cardId = [];
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
        // End of flipCard
    }
    // End of Vue methods
}),