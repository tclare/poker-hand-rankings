export interface Card {
    rank: CardRank;
    suit: CardSuit;
}

export enum CardRank {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}

export enum CardSuit {
    Clubs,
    Diamonds,
    Spades,
    Hearts
}