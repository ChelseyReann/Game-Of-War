class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Deck {
    constructor () {
        this.cards = []
        this.createDeck()
    }
    createDeck() {
        let suits = ["♠", "♡", "♢", "♣"]
        let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        for (let i = 0; i < suits.length; i++){
            for (let j = 0; j < ranks.length; j++){
                this.cards.push(new Card(suits[i], ranks[j], j + 2))
            }
        }
        this.shuffle()
    }
    shuffle () {
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random())
    }
}

class GameOfWar {
    constructor() {
       this.player1 = []
       this.player2 = []
       this.hand1 = []
       this.hand2 = []
       this.splitCards()
       this.battle()
    }
    //split deck between players
    splitCards() {
        //creating a new instance of deck
        let deck = new Deck()
        //figuring out what half the length of the deck is to assign cards to each player
        const splitDeck = Math.ceil(deck.cards.length/2)
        //declaring half the deck as a variable
        let halfDeck = deck.cards.splice(0, splitDeck)
        //pushing half the deck to player 1
        this.player1.push(...halfDeck)
        //assigning the rest of the deck to player 2
        this.player2.push(...deck.cards)
    }
    //playing the game function
    battle(){
        //making hand1 read the value of the first card in player1's card array
        this.hand1 = [this.player1.shift()]
         //making hand2 read the value of the first card in the player2's card array
        this.hand2 = [this.player2.shift()]
        //creating the loop to declare a winner or go to war

        if (this.player1.length === 0){
            console.log("Player 2 is the winner!")
        }else if (this.player2.length === 0){
            console.log("Player 1 is the winner!")
        }else if(this.hand1[0].score > this.hand2[0].score){
            //if player1 wins push the cards into their array
            this.player1.push(...this.hand2, ...this.hand1)
            console.log("Player 2 wins the War! Player 1 has " + this.player1.length + " cards left. Player 2 has " + this.player2.length + " cards left.")
            this.hand1 = []
            this.hand2 = []
            this.battle()
        } else if(this.hand1[0].score < this.hand2[0].score) {
            //if player2 wins push the cards into their array
            this.player2.push(...this.hand1, ...this.hand2)
            console.log("Player 2 Wins! Player 1 has " + this.player1.length + " cards left. Player 2 has " + this.player2.length + " cards left.")
            this.hand1 = []
            this.hand2 = []
            this.battle()
        } else if(this.hand1[0].score === this.hand2[0].score){
            //if it's a tie go to war
            console.log("I Declare War!")
            this.warTime()
            
        }
    }
    warTime(){
        //grab 4 cards from each player's deck and read the last value
        let p1War = this.player1.splice(0, 4)
        let p2War = this.player2.splice(0, 4)
        this.hand1.push(...p1War)
        this.hand2.push(...p2War)
        let p1L = this.hand1.length
        let p2L = this.hand2.length
        //read the value of the last card and compare each player's card to declare a winner
        if(this.player1.length < 4){
            this.player2.push(...this.hand1, ...this.hand2)
            console.log("Player 2 is the winner!")
        } else if(this.player2.length < 4){
            this.player1.push(...this.hand2, ...this.hand1)
            console.log("Player 1 is the winner!")
        } else if (this.hand1[p1L-1].score > this.hand2[p2L-1].score){
            this.player1.push(...this.hand2, ...this.hand1)
            console.log("Player 1 wins the War! Player 1 has " + this.player1.length + " cards left. Player 2 has " + this.player2.length + " cards left.")
            this.hand1 = []
            this.hand2 = []
            this.battle()
        } else if (this.hand1[p1L-1].score < this.hand2[p2L-1].score){
            this.player2.push(...this.hand1, ...this.hand2)
            console.log("Player 2 wins the War! Player 1 has " + this.player1.length + " cards left. Player 2 has " + this.player2.length + " cards left.")
            this.hand1 = []
            this.hand2 = []
            this.battle()
        } else if (this.hand1[p1L-1].score === this.hand2[p2L-1].score){
            console.log("I Declare War!(Again!!)")
            this.warTime()
        }
    }
}


const game1 = new GameOfWar()
