# 21

Create an app using Deck Of Card API that allows users to play a simple game of Blackjack.
https://deckofcardsapi.com/

This app should have:
- A header (h1) that reads "Blackjack"
- A div, with a start game button inside, that will be replaced with the card images and current score
- Two buttons. One that displays "Hit" and the another "Stay"

Feel free to include additional div's and elements if they make styling the application easier.

**Value OF Cards**
- 2-9 = Face Value [eg. - 5 = 5 points, 8 = 8 points]
- J,Q,K = 10 points
- A = 1 point


When the page loads there should be a button that displays "Start Game" and the network request to get a SHUFFLED NEW DECK. 

When the user clicks on the "START GAME" button, the button should be replaced with the list below. To get this information you need to make a DRAW A CARD request. 

**Remember to to read the documentation! Remember to see what response you are recieving.**

On click of the "Start Game" button:
  - The card image should be shown
  - The Current Score
  - Hit button
  - Stay button 
  
  **User Flow**
  If a player chooses the "HIT" button, another random card should be drawn from a deck and displayed next to the previous card. 
      If the sum of their value is greater, replace the entire div of cards, score and buttons with "BUST".   
      If not, the current score (the sum of both values) should be displayed, and two buttons   
      stay.
      
  If a player chooses the "STAY" button, three random cards from the deck should be fetched and displayed under in a new div. In this div should show the three cards abnd the computer score. 
      If the computer score, is greater than 21 then display "YOU WIN". If not, Whichever score is closer   
      to 21. Wins . 
      
Displays who wins, Under the H1 tag as an H3.
  
  
