// https://repl.it/student/submissions/2775304
let possibleCards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K',];
let possibleCardValues = {
  'A': [1, 11],
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  'J': 10,
  'Q': 10,
  'K': 10,
};

const randomCardIndexGenerator = () => {
  return Math.floor(Math.random() * 14);
};

const checkHandValue = (arrCards) => {
  let value = 0;
  for (var i = 0; i < arrCards.length; i++) {
    let currentCard = arrCards[i];
    if 
  }
  return value;
}

class BlackjackHand {
  constructor(numPlayers, numDecks) {
    this.numPlayers = numPlayers;
    this.numDecks = numDecks;
    this.cardsInShoe = {
      'A': this.numDecks,
      2: this.numDecks,
      3: this.numDecks,
      4: this.numDecks,
      5: this.numDecks,
      6: this.numDecks,
      7: this.numDecks,
      8: this.numDecks,
      9: this.numDecks,
      10: this.numDecks,
      'J': this.numDecks,
      'Q': this.numDecks,
      'K': this.numDecks,
    };
    this.players = [];
  }
  dealCard() {
    let cardIndex = randomCardIndexGenerator();
    let randomCard = possibleCards[cardIndex];
    if (this.cardsInShoe[randomCard] > 0) {
      this.cardsInShoe[randomCard] --;
      return randomCard;
    } else {
      this.dealCard();
    }
  }
  startGame() {
    // instantiate players, deal two cards to each
    for (var i = 0; i < this.numPlayers; i++) {
      this.players.push(Player(i));
      let dealtCard = this.dealCard();
      this.players[i].hand.push(dealtCard);
      dealtCard = this.dealCard();
      this.players[i].hand.push(dealtCard);
    }
  }
}

class Player {
  constructor(number) {
    this.number = number;
    this.handValue = 0;
    this.hand = [];
    this.isBusted = false;
  }

  hit() {

  }
}