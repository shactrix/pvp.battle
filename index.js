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

// class Person {

//     constructor() {
//         this.legs = 2;
//         this.arms = 2;
//         this.eyes = "brown";
//         this.hair = "grey";
//     }
    
//     greet(otherPerson) {
//         console.log("Hello " + otherPerson + "!")
//     }

//     walk() {
//         console.log("I hate when my segway is in the shop")
//     }
// }

document.addEventListener("DOMContentLoaded", function(){

class Player {

    constructor(name) {
        this.name = name;
        this.health = 100; // initialb health
    }

    punch(opponent) {
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
      }

      kick(opponent) {
        if (opponent instanceof Player) {
            const successProbability = 0.5; 
         if (Math.random() < successProbability) {
           opponent.health -= 10;
           if (opponent.health <= 0) {
             console.log(`${opponent.name} has been defeated.`);
           } else {
             console.log(
               `${this.name} kicks ${opponent.name}. ${opponent.name}'s health: ${opponent.health}`
             );
           }
         } else {
           console.log(`${this.name}'s kick missed.`);
         }
       } else {
         console.log("Invalid opponent.");
       }
   }

   heal(){
    if (Player.health >= 85){ 
        Player.health = 100
        console.log(`${this.name} can't heal past 100 my friend`);
      } else if (Player.health <= 84) {
        Player.health += 15
        console.log( `${this.name} heals for 15`);
      } else {
        console.log("invalid");
      }
    }

    
  }
    




const player1 = new Player('player1')

const player2 = new Player ('player2')



//  test
player1.punch(player2); // player1 punches player2 (70% chance)
console.log(player2.health)
player2.punch(player1); // player2 punches player1 (70% chance)
console.log(player1.health)












})


