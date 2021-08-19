//   selecting element
const score0EL = document.querySelector("#score-0");
const score1EL = document.querySelector("#score-1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const current1 = document.getElementById("current-1");
const current0 = document.getElementById("current-0");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
// starting condiction

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayers = function () {
     document.getElementById(`current-${activePlayer}`).textContent = 0;
     currentScore = 0;
     activePlayer = activePlayer === 0 ? 1 : 0;
     player0.classList.toggle("player-active");
     player1.classList.toggle("player-active");
};

// rolling dice functionlity

btnRoll.addEventListener("click", function () {
     if (playing) {
          // 1. generate Ramdom Number
          const dice = Math.trunc(Math.random() * 6 + 1);
          // 2. display dice
          diceEl.classList.remove("hidden");
          diceEl.src = `dice-${dice}.png`;

          if (dice != 1) {
               currentScore = currentScore + dice;
               document.getElementById(`current-${activePlayer}`).textContent =
                    currentScore;
          } else {
               //   switch to next players
               switchPlayers();
          }
     }
});

btnHold.addEventListener("click", function () {
     //  add current  score  to activePlayer score
     if (playing) {
          scores[activePlayer] += currentScore;
          document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

          //   2 check if players score is >= 100
          if (scores[activePlayer] >= 100) {
               playing = false;
               diceEl.classList.add("hidden");

               document
                    .querySelector(`.player-${activePlayer}`)
                    .classList.add("player-winner");
               document
                    .querySelector(`.player-${activePlayer}`)
                    .classList.remove("player-active");
          } else {
               // switch to next players
               switchPlayers();
          }
     }
});

btnNew.addEventListener("click", function () {
     
          const  scores = [0, 0];
           currentScore = 0;
            activePlayer = 0;
           playing = true;
           score0EL.textContent = 0;
           score1EL.textContent = 0;
           current0.textContent = 0
           current1.textContent = 0
           player1.classList.remove("player-winner")
           player0.classList.remove("player-winner")
           player1.classList.remove("player-active")
           player0.classList.add("player-active") 
           diceEl.classList.add("hidden");
         
         
     
});
