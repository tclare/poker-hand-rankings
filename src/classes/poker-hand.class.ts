import { Card } from "interfaces/card.interface";
import { PokerHoleCardsClassificationResult, PokerHoleCardsClassificationResults, PokerHandResult, TwoPokerCardPermutation } from "interfaces/poker-hand-results.interface";

export class PokerHand {

    private cards: Card[];

    /* Randomly shuffle and "deal" */
    constructor() {
        this.dealCommunityCards();
    }

    /* A simple getter for hand-specific results */
    getResults(): PokerHoleCardsClassificationResult {
        return;
    }

    /* After the community cards have been dealt, this method 
    assigns to the hand all of the possible hole card possibilites
    that could have arisen from the non-community cards */
    computeCardPermutations(): TwoPokerCardPermutation[] {
        return;
    }

    /* After all permutations have been calculated, order them!
    Each hand should be assigned a (numeric?) ranking corresponding
    to how well it performs agains the others, and then sorted accordingly. */
    computeCardRankings(): PokerHandResult[] {
        return;
    }
    
    /* Creates a standard deck of fifty two cards and randomly selects the first
    five cards. Seeds wrt time. Might be  */
    dealCommunityCards(): void {
        this.cards = []; 
    }
}