import { Card, Suit } from './card';
import { CardContainer } from './card-container';

export class Foundation implements CardContainer {
  public cards: Card[] = [];

  constructor(public suit: Suit) { }

  contains(card: Card): boolean {
    return this.cards.indexOf(card) !== -1;
  }

  get length(): number {
    return this.cards.length;
  }

  get frontCard(): Card {
    return this.cards[this.length - 1];
  }

  removeCards(cards: Card[]): void {
    this.cards.splice(this.cards.indexOf(cards[0]));
  }

  addCards(cards: Card[]): void {
    cards.forEach(card => this.cards.push(card));
  }
}
