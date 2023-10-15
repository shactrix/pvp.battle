document.addEventListener("DOMContentLoaded", function(){

  class Player {
  
      constructor(name, opponents) {
          // this.player1 = player1;
          // this.player2 = player2;
          this.health = 100; // initial health
          this.isTurn = false; // flag to track if it's the player's turn
          this.name = name;
          this.opponents = opponents;
      }
  
      punch(opponent, playerID) {
          // Check if opponent is a valid Player object
          console.log("punchfunction")
          if (opponent instanceof Player) {
            // Generate a random number between 0 and 1
            const successProbability = 0.7; // 70% success rate
            if (Math.random() < successProbability) {
              // Punch succeeds, reduce opponent's health by 5
              opponent.health -= 5;
              document.getElementById(playerID + "health").innerHTML = opponent.health;
              // document.getElementById("player2health").innerHTML = opponent.health;

              // Check if opponent's health has dropped below 0
              if (opponent.health <= 0) {
                console.log(`${opponent.name} has been defeated.`);
              } else {
                console.log(
                  `${this.name} punches ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`
                );
              }
            } else {
              alert(`${this.name}'s punch missed.`);
            }
          // } else {
          //   console.log("Invalid opponent.");
          // }
        } else {
          throw new Error("Invalid opponent.");
       }
        }
  
        kick(opponent, playerID) {
          if (opponent instanceof Player) {
              const successProbability = 0.5; 
           if (Math.random() < successProbability) {
             opponent.health -= 10;
             document.getElementById(playerID + "health").innerHTML = opponent.health;

             if (opponent.health <= 0) {
               console.log(`${opponent.name} has been defeated.`);
             } else {
               console.log(
                 `${this.name} kicks ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`
               );
             }
           } else {
             alert(`${this.name}'s kick missed.`);
           }
         } else {
           console.log("Invalid opponent.");
         }
     }
  
     heal(){
      if (this.health >= 85) {
        this.health = 100;
        document.getElementById(this.name + "health").innerHTML = this.health;
        console.log(`${this.name} can't heal past 100 my friend`);
    } else {
        this.health += 15;
        document.getElementById(this.name + "health").innerHTML = this.health;
        console.log(`${this.name} heals for 15`);
    }
      // if (player.health >= 85){ 
      //     player.health = 100
      //     document.getElementById(playerID + "health").innerHTML = playerID.health;

      //     console.log(`${this.name} can't heal past 100 my friend`);
      //   } else if (this.health <= 84) {
      //     this.health += 15
      //     console.log( `${this.name} heals for 15`);
      //   } else {
      //     console.log("invalid");
      //   }
      }
      
      takeTurn(opponent, action, playerID) {
        if (this.health > 0) {
          this.isTurn = true;
      
          console.log(`${this.name}'s turn:`);
      
          if (action === "punch") {
            this.punch(opponent, playerID);
          } else if (action === "kick") {
            this.kick(opponent, playerID);
          } else if (action === "heal") {
            this.heal();
          } else {
            console.log("Invalid action. Valid actions are 'punch', 'kick', or 'heal'.");
          }
      
          this.isTurn = false; // End the turn after the action is performed
        } else {
          console.log(`${this.name} can't take a turn because they have been defeated.`);
        }
      }
    }      
  
  
  // const player1 = new Player('player1', [player2]);
  // const player2 = new Player('player2', [player1]);
  
  const player1 = new Player('player1', []); // instantiate player1 and player2 first and then pass them to each other
  const player2 = new Player('player2', [player1]);
  player1.isTurn = true
  player2.isTurn = false
  // Add player2 to player1's opponents array
  player1.opponents.push(player2);
  
  // Add player1 to player2's opponents array
  player2.opponents.push(player1);
  
 // Add event listeners for player1's buttons
document.getElementById("punching1").addEventListener("click", function(){
  if (player1.isTurn) {
    player1.takeTurn(player2, "punch", "player2");
    player1.isTurn = false; // End player1's turn
    player2.isTurn = true;  // Start player2's turn
  }
});

document.getElementById("kicking1").addEventListener("click", function(){
  if (player1.isTurn) {
    player1.takeTurn(player2, "kick", "player2");
    player1.isTurn = false; // End player1's turn
    player2.isTurn = true;  // Start player2's turn
  };
})
document.getElementById("healing1").addEventListener("click", function(){
  if (player1.isTurn) {
    player1.heal();
    player1.isTurn = false; // End player1's turn
    player2.isTurn = true;  // Start player2's turn
  };
});

// Add event listeners for player2's buttons
document.getElementById("punching2").addEventListener("click", function(){
  if (player2.isTurn) {
    player2.takeTurn(player1, "punch", "player1");
    player2.isTurn = false; // End player2's turn
    player1.isTurn = true;  // Start player1's turn
  }
});

document.getElementById("kicking2").addEventListener("click", function(){
  if (player2.isTurn) {
    player2.takeTurn(player1, "kick", "player1");
    player2.isTurn = false; // End player2's turn
    player1.isTurn = true;  // Start player1's turn
  };
})
document.getElementById("healing2").addEventListener("click", function(){
  if (player2.isTurn) {
    player2.heal();
    player2.isTurn = false; // End player2's turn
    player1.isTurn = true;  // Start player1's turn
  };
});
  
  // document.getElementById("punching1").addEventListener("click", function(){player1.takeTurn(player2, "punch", "player2")})
  // document.getElementById("kicking1").addEventListener("click", function(){player1.takeTurn(player2, "kick", "player2")})
  // //  document.getElementById("healing1").addEventListener("click", function(){player1.takeTurn(player1, "heal", "player1")})
  // document.getElementById("healing1").addEventListener("click", function(){player1.heal()})

  // document.getElementById("punching2").addEventListener("click", function(){player2.takeTurn(player1, "punch", "player1")})
  // document.getElementById("kicking2").addEventListener("click", function(){player2.takeTurn(player1, "kick", "player1")})
  // //  document.getElementById("healing2").addEventListener("click", function(){player2.takeTurn(player2, "heal", "player2")})
  // document.getElementById("healing2").addEventListener("click", function(){player2.heal()})

  //  test
  // player1.takeTurn(player2, 'punch'); // player1 punches player2
  // player2.takeTurn(player1, 'kick'); // player2 kicks player1
  



  const audio = document.getElementById("audio");
  const playAudioButton = document.getElementById("playAudio");
  
playAudioButton.addEventListener("click", function() {
// if (audio.paused) {
//     audio.play()
// }
audio.play()
});
const stopAudioButton = document.getElementById("stopAudio");

stopAudioButton.addEventListener("click", function() {
// if (audio.play) {
//     audio.pause()
// }
audio.pause()
})
});