//  pseudo code for my prpject

// start game function
// class for players 1 and 2
// health bar for both players need to be made
// move sets for both players need to be made
// need to make a fuction so that they take turns attacking
// need an end game function
// needs a start game functio
// seperate victory and defeat functions followed by audio files
// needs audio to make it more entertaining as well as an option to disable it when battling
// sprites or just regular pictures for each player as well for 
// if time for will add some movement for the sprite when they attack and or die
// if game ends need a function to start over
// will need a seperate start page, end page(victory and defeat), and middle page will look cleaner that way and game will look more like a real game
// make sure everything fits screen and wont move if you minimize or maximize screen like the mini project did

// wireframe below
//  https://imgur.com/dwwkBVU

document.addEventListener("DOMContentLoaded", function () {
  class Player {
    constructor(name) {
      this.name = name;
      this.health = 100; // initial health
      this.isMyTurn = false;
    }

    setTurn(isMyTurn) {
      this.isMyTurn = isMyTurn;
      if (isMyTurn) {
        console.log(`${this.name}'s turn.`);
      }
    }

    takeTurn(opponent) {
      if (this.isMyTurn) {
        // Check if opponent is a valid Player object
        if (opponent instanceof Player) {
          // Generate a random number between 0 and 1
          const successProbability = 0.7; // 70% success rate
          if (Math.random() < successProbability) {
            // Punch succeeds, reduce opponent's health by 5
            opponent.health -= 5;

            // Check if opponent's health has dropped below 0
            if (opponent.health <= 0) {
              console.log(`${opponent.name} has been defeated.`);
            } else {
              console.log(
                `${this.name} punches ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`
              );
            }
          } else {
            console.log(`${this.name}'s punch missed.`);
          }
        } else {
          console.log("Invalid opponent.");
        }

        // End the turn after taking an action
        this.setTurn(false);
      } else {
        console.log("It's not your turn, wait for your opponent.");
      }
    }

    heal() {
      if (this.health >= 85) {
        this.health = 100;
        console.log(`${this.name} can't heal past 100 my friend`);
      } else if (this.health <= 84) {
        this.health += 15;
        console.log(`${this.name} heals for 15. ${this.name}'s health: ${this.health}`);
      } else {
        console.log("Invalid.");
      }
    }
  }

  const player1 = new Player("player1");
  const player2 = new Player("player2");

  // Initialize the game with player 1's turn
  player1.setTurn(true);

  // Function to switch turns between players
  function switchTurns() {
    player1.setTurn(!player1.isMyTurn);
    player2.setTurn(!player2.isMyTurn);
  }

  // Test the game
  player1.takeTurn(player2); // player1 punches player2 (70% chance)
  console.log(player2.health);
  switchTurns();
  player2.takeTurn(player1); // player2 punches player1 (70% chance)
  console.log(player1.health);
  switchTurns();
  player1.heal(); // player1 heals (if health is below 85)
  console.log(player1.health);
});
