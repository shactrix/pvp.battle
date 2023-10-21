document.addEventListener("DOMContentLoaded", function(){
const instructions = `Instructions: Player 1 starts by choosing an action: punch or kick. Then Player 2 will choose an action. Once your health is 80 or less, you can choose to heal for 20 health points. Healing counts as a turn. The first player to reach 0 health loses.`
showModal(instructions)
  // Function to display modal with message (instead of default alert box)
  function showModal(message) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.style.display = "block";
  
    // Close the modal when the user clicks on the close button (×)
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    // Close the modal if the user clicks anywhere outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
  
  class Player {
  
    constructor(name, opponents) {
        this.health = 100; // initial health
        this.isTurn = false; // flag to track if it's the player's turn
        this.name = name;
        this.opponents = opponents;
    }
  
    punch(opponent, playerID) {
        // Check if opponent is a valid Player object
        if (opponent instanceof Player) {
          // Generate a random number between 0 and 1
          const successProbability = 0.7; // 70% success rate
          if (Math.random() < successProbability) {
            // Punch succeeds, reduce opponent's health by 5
            opponent.health -= 10;
            document.getElementById(playerID + "health").innerHTML = opponent.health;
  
            // Check if opponent's health has dropped below 0
            if (opponent.health <= 0) {
              console.log(`${opponent.name} has been defeated.`);
            } else {
              console.log(
                `${this.name} punches ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`
              );
            }
          } else {
            showModal(`${this.name}'s punch missed.`);
            // alert(`${this.name}'s punch missed.`);
          }
      } else {
        throw new Error("Invalid opponent");
      }
      }
  
      kick(opponent, playerID) {
        if (opponent instanceof Player) {
            const successProbability = 0.5; 
          if (Math.random() < successProbability) {
            opponent.health -= 20;
            document.getElementById(playerID + "health").innerHTML = opponent.health;
  
            if (opponent.health <= 0) {
              console.log(`${opponent.name} has been defeated.`);
            } else {
              console.log(
                `${this.name} kicks ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`
              );
            }
          } else {
            showModal(`${this.name}'s kick missed.`);
            // alert(`${this.name}'s kick missed.`);
          }
        } else {
          throw new Error("Invalid opponent");
        }
    }
  
    heal(){
      if (this.health >= 80) {
        this.health = 100;
        document.getElementById(this.name + "health").innerHTML = this.health;
        alert(`${this.name} can't heal past 100 my friend`);
      } else {
          this.health += 20;
          document.getElementById(this.name + "health").innerHTML = this.health;
          console.log(`${this.name} heals for 20`);
      }
    }
    
    takeTurn(opponent, action, playerID) {
      if (this.health <= 0) {
        determineWinner()
        gameOver(playerID)
        // console.log(`${this.name} can't take a turn because they have been defeated.`);
      } else if (this.isTurn) {
          // console.log(`${this.name}'s turn:`);
  
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
        showModal("It's not your turn!");
        // alert("It's not your turn!");
      }
    }
  }      
  // End of Class
    
    
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
    } else {
      console.log("It's not player1's turn!");
      showModal("It's not your turn!");
    }
  });
  document.getElementById("kicking1").addEventListener("click", function(){
    if (player1.isTurn) {
      player1.takeTurn(player2, "kick", "player2");
      player1.isTurn = false; // End player1's turn
      player2.isTurn = true;  // Start player2's turn
    } else {
      console.log("It's not player1's turn!");
      showModal("It's not your turn!");
    }
  })
  document.getElementById("healing1").addEventListener("click", function(){
    if (player1.isTurn) {
      player1.heal();
      player1.isTurn = false; // End player1's turn
      player2.isTurn = true;  // Start player2's turn
    } else {
      console.log("It's not player1's turn!");
      showModal("It's not your turn!");
    }
  });
  
  // Add event listeners for player2's buttons
  document.getElementById("punching2").addEventListener("click", function(){
    if (player2.isTurn) {
      player2.takeTurn(player1, "punch", "player1");
      player2.isTurn = false; // End player2's turn
      player1.isTurn = true;  // Start player1's turn
    } else {
      console.log("It's not player2's turn!");
      showModal("It's not your turn!");
    }
  });
  
  document.getElementById("kicking2").addEventListener("click", function(){
    if (player2.isTurn) {
      player2.takeTurn(player1, "kick", "player1");
      player2.isTurn = false; // End player2's turn
      player1.isTurn = true;  // Start player1's turn
    } else {
      console.log("It's not player2's turn!");
      showModal("It's not your turn!");
    }
  })
  document.getElementById("healing2").addEventListener("click", function(){
    if (player2.isTurn) {
      player2.heal();
      player2.isTurn = false; // End player2's turn
      player1.isTurn = true;  // Start player1's turn
    } else {
      console.log("It's not player2's turn!");
      showModal("It's not your turn!");
    }
  });
    
  
  const audio = document.getElementById("audio");
  const playAudioButton = document.getElementById("playAudio");
  
  playAudioButton.addEventListener("click", function() {
    audio.play()
  });
  const stopAudioButton = document.getElementById("stopAudio");
  
  stopAudioButton.addEventListener("click", function() {
    audio.pause()
  })
  
  function determineWinner() {
    let winner = null;
    if (player1.health <= 0) {
      winner = 'player2';
    } else if (player2.health <= 0) {
      winner = 'player1';
    }
  
    if (winner) {
      gameOver(winner);
    }
  }
  
  function gameOver(playerID) {
    document.getElementById('gamePlay').style.visibility = 'hidden'
    document.getElementById('gameOver').style.visibility = 'visible'
    const winner = document.getElementById('playerWin')
    winner.innerHTML = `${playerID} is the WINNER!`
  }
  
  });