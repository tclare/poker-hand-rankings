import { PokerHoleCardsClassificationResult, PokerHoleCardsClassificationResults } from "interfaces/poker-hand-results.interface";
import { SIMULATED_HANDS } from "constants/all-constants";
import { PokerHand } from "classes/poker-hand.class";

export class PokerSimulation {
    
    private simulationResults: PokerHoleCardsClassificationResults;

    constructor() {
        this.simulationResults = {
            numHandsPlayed: 0,
            results: []
        };
    }

    /* After a round of the simulation is complete, this method
    adds a summary of the result from that round to the overall results.
    Adding entire hands would take up a ton of memory and/or disk
    space, so we keep a running average of all rankings instead. */
    addToSimulationResults(hand: PokerHoleCardsClassificationResult) {
        this.simulationResults.numHandsPlayed++;
        this.simulationResults.results.push(hand);
    }

    /* This method runs the poker simulation in its
    entirety, creating a new hand until SIMULATED_HANDS
    is reached. */
    run() {
        while (this.simulationResults.numHandsPlayed < SIMULATED_HANDS) {
            const hand = new PokerHand();
            hand.dealCommunityCards();
            hand.computeCardPermutations();
            hand.computeCardRankings();
            this.addToSimulationResults(hand.getResults());
            this.simulationResults.numHandsPlayed++;
        }
    }
}