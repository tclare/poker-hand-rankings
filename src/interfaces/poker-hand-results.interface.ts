import { Card, CardRank } from "./card.interface";

export interface PokerHoleCardsClassificationResults {
    numHandsPlayed: number;
    results: PokerHoleCardsClassificationResult[]
}

export interface PokerHoleCardsClassificationResult {
    handClassification: PokerHoleCardsClassification;
    averageRanking: number;
    occurrences: number;
}

export interface PokerHoleCardsClassification {
    handType: HoleCardsType;
    highRank: CardRank;
    lowRank: CardRank;
}

export interface PokerHandResult {
    ranking: PokerHandRank;
    orderedCards: Card[];
    comparativeRanking: number;
}

export enum PokerHandRank {
    HighCard,
    OnePair,
    TwoPairs,
    ThreeOfAKind,
    Straight,
    Flush,
    FullHouse,
    FourOfAKind,
    StraightFlush,
    RoyalFlush
} 

export type HoleCardsType = 'pair' | 'suited' | 'unsuited';
export type TwoPokerCardPermutation = [Card, Card];