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
        let suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
        let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

        for (let i = 0; i < suits.length; i++){
            for (let j = 0; j < ranks.length; j++){
                this.cards.push(new Card(suits[i], ranks[j], j + 1))
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
        p1 = []
        p2 = []
        pile = []
        init()
    }
    init(){
        //createDeck
        //split deck between players
    }
}

const deck = new Deck ()
console.log(deck)