# Simple 21 - Cards Web Game

## The Game
In this game of 21 the player will play against the computer. The goal of the game is to draw cards whose added value will be as close as possible or equal to 21. At the beginning the player will draw two cards. Upon receiving the two cards the player will look at them and decide to `HIT` or `STAY`. If the player picks `HIT` he will be dealt one more card. The player can `HIT` as many times as they wish. When the user choses to `STAY` the computer will draw three cards from the same deck and the added value of the players cards will be compared. Whoever is closest to 21 wins.

## Instructions
Create an website to play as simplified version of the 21 game. Use the [Deck Of Cards API](https://deckofcardsapi.com/) to manage a deck of cards. 

Your App/Website should have:
- A header (h1) that reads "Simple 21"
- A div, with a start game button inside, that will be replaced with the card images and current score
- Two buttons. One that displays `HIT` and the another `STAY`

Feel free to include additional div's and elements if they make styling the application easier.

### Value Of Cards
- 2-9 = Face Value e.g. 5 of hearts = 5 points, 8 of diamonds = 8 points
- J,Q,K = 10 points
- A = 1 point

## Details

* When the page loads there should be a button that displays "Start Game" and your website should make a network request to get a SHUFFLED NEW DECK. 

* When the user clicks on the "START GAME" button, the button should be replaced with the list below. To get this information you need to make a DRAW A CARD request. 

  - The player's card images should be shown
  - The Current Score (sum of card values)
  - `HIT` button
  - `STAY` button 
  
### User Flow
* If a player chooses the `HIT` button, another card should be drawn from a deck and displayed next to the previous cards. 
* If the sum of their value is greater than 21, replace the entire div of cards, score and buttons with a header that display "BUSTED".   
* If not, the current score should be updated to reflect the value of the new card. The two buttons should still be there for the player will choose again.
* If a player chooses the `STAY` button, three cards from the deck should be fetched and those will be the computer's cards. Display the computer's cards and their score to right of the player's cards in a new div. 
* If the computer's score, is greater than 21 then display "YOU WIN". If not, whichever score is closer to 21 wins. 
* Displays who wins under the game title and remove the buttons.
* Try to replicate the game's demo CSS as close as possible.

**Remember to to read the documentation! Remember to see what response you are receiving.**

## Demo
[![Watch the video ](./assets/demo-video-mock.png)](https://www.youtube.com/watch?v=Pg5i0L73ncU)

## Rubric
To find the rubric that will be used to grade your work for this assignment, locate this assignment on you Canvas course.
