var NumPlayerWins = 0;
var NumPlayerlosses = 0;
var NumPlayerdraws = 0;

var mode = "get user name";
var UserName = "";

var main = function (input) {
  var myOutputValue;
  if (mode == "get user name") {
    //save username in global variable
    UserName = input;
    // change mode to play game
    mode = "play game";
    myOutputValue = `Hello ${UserName}`;
  } else {
    var playerInput = input;
    var computerInput = getRandomObject();
    console.log(computerInput);

    var allWinningConditions =
      (playerInput == SCISSORS && computerInput == PAPER) ||
      (playerInput == STONE && computerInput == SCISSORS) ||
      (playerInput == PAPER && computerInput == STONE);

    var allLosingConditions =
      (computerInput == SCISSORS && playerInput == PAPER) ||
      (computerInput == STONE && playerInput == SCISSORS) ||
      (computerInput == PAPER && playerInput == STONE);

    var myOutputValue = "";

    if (allWinningConditions) {
      NumPlayerWins += 1;
      myOutputValue = `Hello ${UserName}. <br> you win! <br> Total Wins ${NumPlayerWins}. Total Losses ${NumPlayerlosses}. Total Draws ${NumPlayerdraws}`;
    } else if (allLosingConditions) {
      NumPlayerlosses += 1;
      myOutputValue = `Hello ${UserName}.  <br> you lose! <br>Total Wins ${NumPlayerWins}. Total Losses ${NumPlayerlosses}. Total Draws ${NumPlayerdraws}`;
    } else {
      NumPlayerdraws += 1;
      myOutputValue = `Hello ${UserName}.  <br> draw. <br>Total Score ${NumPlayerWins}. Total Losses ${NumPlayerlosses}. Total Draws ${NumPlayerdraws}`;
    }

    // if computer beats player
  }

  return myOutputValue;
};

//input = scissors / paper / stone
// output =  win / lose
// 6  cases = scissors tie / paper tie / stone tie/ scissors win paper/ paper win stone/ stone win scissors

var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REPLAY = "Type scissors, paper or stone to play again!";

// How will the computer's option be randomly generated?
/* Return "scissors", "paper", or "stone" based on a random number
 */
var getRandomObject = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return SCISSORS;
  } else if (randomNum == 1) {
    return PAPER;
  } else {
    return STONE;
  }
};
//Add state to your program such that it keeps track of the number of times the user has won and the number of times the computer has won.
//Output this win-loss record in a format you like in the program output.
//You can also output the number of draws and/or each party's winning percentage if you'd like.

//User Name - To make this game more personal, add a feature to collect the user's name as the first input after the page loads.
//We can prompt the user to enter their name first by adding to the page's HTML.
//Once the user submits their name, the program can return output to prompt the user to start playing Scissors Paper Stone by entering one of the 3 objects.
//Use the user's name to personalise win-loss record and other relevant output.
