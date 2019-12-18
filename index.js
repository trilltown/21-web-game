document.addEventListener("DOMContentLoaded", () =>{
let startGame = document.querySelector("#startGame");
let hit = document.querySelector("#hit")
let computerCards = document.querySelector("#computerCards")
let playerCards = document.querySelector("#playerCards");
let gameScore = document.querySelector("gameScore");
let playerScoreCard = 0; 
let computerScoreCard = 0;
let deckId = 'Not a Number Yet!';

let obj = {
    playerCards: 0,
    computerCards: 0,
}
    
    const shuffleDeck = async () =>{
        try {
            let { data: {deck_id} } = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
            deckId = deck_id
            console.log('deckId', deck_id);
            
        }catch(error) {
            console.log("error");
        }
    }
    
    const changeValue = (value, score) => {
        if(value === "QUEEN" || value === "KING" || value === "JACK") {
            score += 10
        } else if(value === "ACE") {
            if(score < 11) {
                score += 11
            } else {
                score += 1
            } 
        } else {
            score += Number(value)
        }
        return score
    }


    const drawCard = async (num, div, score) => {
        try{
            let {data: {cards}} = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${num}`);
            // let cards = cards;
            // debugger
            console.log('cards', cards)
            cards.forEach(card => {
                console.log('card', card);
                
                let cardValue = card.value
                let h2 = document.createElement("h2")
                
                console.log(score);
                score = changeValue(cardValue, score);
                console.log(score);
                
                h2.innerText = `Score: ${score}`
                div.appendChild(h2)
                let image = document.createElement("img");
                image.src = card.image;
                div.appendChild(image);
                
            });

            return score 
        }catch(error) {
            console.log("error")
        }   
    }

    // const gameOver = () => {

    // }

    startGame.addEventListener("click", async () => {
        //cmt: Beginning game deckID should not be assigned a value
        deckId = 'Not a Number Yet!';
        playerScoreCard = 0; 
        computerScoreCard = 0;
        playerCards.innerHTML = "";
        //cmt: The code above resets everything to new game

        //cmt: Reassigning deckID through API call
        await shuffleDeck();
        //cmt: Reassigning playerScoreCard through API call
        playerScoreCard = await drawCard(2, playerCards, playerScoreCard);
    })

    hit.addEventListener("click", async () => {
        console.log(playerScoreCard);
        
        playerScoreCard = await drawCard(1, playerCards, playerScoreCard );
        console.log(playerScoreCard);
    })

    stay.addEventListener("click", async () => {
        computerCards.innerHTML = "";
        computerScoreCard = await drawCard(3, computerCards, computerScoreCard);
    })

})