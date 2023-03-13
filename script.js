class Card {
    constructor (suit, rank, score){
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Deck {
    constructor (){
        this.cards = []
        this.createDeck()
    }
    createDeck(){
        let suits = ["♠", "♡", "♢", "♣"]
        let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        for (let i = 0; i < suits.length; i++){
            for (let j = 0; j < ranks.length; j++){
                this.cards.push(new Card(suits[i], ranks[j], j + 2))
            }
        }
        this.shuffle()
    }
    shuffle (){
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random())
    }
}

class GameOfWar {
    constructor (){
       this.player1 = []
       this.player2 = []
       this.splitCards()
       this.battle()
    }
    //split deck between players
    splitCards(){
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
}

const deck = new Deck ()
console.log(deck)
const game = new GameOfWar()
console.log(game)