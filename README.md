# 👋 Welcome to Poker Hand Rankings!

I got into poker recently. This repository is meant to provide an intuitive interface for poker players to visualize the best and worst of Poker hands!

## 📚 Introduction

After reading the book [The Illustrated Guide to Texas Hold'em](https://www.amazon.com/Illustrated-Guide-Texas-Holdem-Beginners/dp/1402206054/ref=asc_df_1402206054/?tag=hyprod-20&linkCode=df0&hvadid=266109685626&hvpos=&hvnetw=g&hvrand=7485851256982494418&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9008164&hvtargid=pla-490577259787&psc=1]), I appreciated the reference page at the start of the book that provided a simulation of one million poker hands. However, some of the rankings seemed counterintuitive (For instance, Q-6 unsuited was ranked directly ahead of Q-7 unsuited by a tenth of a percent. Despite this example probably not mattering too much for general poker play, it made me question the true theoretical accuracy of this simulation. My guess is that this could have happened because, in the subset of hands in which Q-7 unsuited was played against Q-6 unsuited, the Q-6 hands got slightly luckier with a few more pairs of sixes than sevens).

Regardless, this simulation attempts to tackle the problem differently. It will also simulate one million poker hands. However, after simulating a full poker hand ("dealing five communal cards") it will rank every single possible poker hand that could be constructed with the remaining cards against each other, all the while accounting for ties (there should be many of those). After each hand, it translates each hand to its classification (ex. a pair of 9s, J-10 suited, Q-4 unsuited) and averages the rankings of each classification together. This should eliminate inaccuracies with the aforementioned method (for instance, Q-7 unsuited will consistently rank above Q-6 unsuited enough to cancel out accidental noise of Q-6 performing better sometimes).

Knowing how good starting hole cards are matters a lot in Hold 'em. How good are yours? See for yourself!

## 💻 Tech Stack

- Backend: TypeScript & Node.js
- Frontend: TBD if I'll ever make it.

## 🏃 How to Run Locally

1. Underwear
2. Soup