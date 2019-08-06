// simple dice roller found online 
// https://codepen.io/Pyremell/pen/eZGGXX/
// Would like try and put this and other dice together for a standard dice set
// and be able to roll multiples and have all the numbers plus the sum shown.


//d2 dice roll.  

var d2Dice = 
{
  sides: 2,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d2

var d2Button = document.getElementById('d2Button');

d2Button.onclick = function() {
  var result = d2Dice.roll();
  printNumber(result);
};


//d3 dice roll.

var d3Dice = 
{
  sides: 3,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d3

var d3Button = document.getElementById('d3Button');

d3Button.onclick = function() {
  var result = d3Dice.roll();
  printNumber(result);
};

//d4 dice roll.

var d4Dice = {

  sides: 4,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d4

var d4Button = document.getElementById('d4Button');

d4Button.onclick = function() {
  var result = d4Dice.roll();
  printNumber(result);
};

//d6 dice roll.

var d6Dice = 
{
  sides: 6,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d6

var d6Button = document.getElementById('d6Button');

d6Button.onclick = function() {
  var result = d6Dice.roll();
  printNumber(result);
};

//d8 dice roll.

var d8Dice = 
{
  sides: 8,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d8

var d8Button = document.getElementById('d8Button');

d8Button.onclick = function() {
  var result = d8Dice.roll();
  printNumber(result);
};

//d10 dice roll.

var d10Dice = 
{
  sides: 10,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d10

var d10Button = document.getElementById('d10Button');

d10Button.onclick = function() {
  var result = d10Dice.roll();
  printNumber(result);
};

//d12 dice roll.

var d12Dice = {
  sides: 12,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d12

var d12Button = document.getElementById('d12Button');

d12Button.onclick = function() {
  var result = d12Dice.roll();
  printNumber(result);
};

//d20 dice roll.

var d20Dice = 
{
  sides: 20,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d20

var d20Button = document.getElementById('d20Button');

d20Button.onclick = function() {
  var result = d20Dice.roll();
  printNumber(result);
};


//d100 dice roll.

var d100Dice = 
{
  sides: 100,
  roll: function () 
  {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//button for d100

var d100Button = document.getElementById('d100Button');

d100Button.onclick = function() {
  var result = d100Dice.roll();
  printNumber(result);
};

//custom dice roller. 
//could be used to assign random attacks to teammates. 


// var customDice = 
// {
//   sides: customDiceInput,
//   roll: function () 
//   {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }

// //button for custom dice. 

// var custDiceButton = document.getElementById('custDiceButton');

// custDiceButton.onclick = function() {
//   var result = customDice.roll();
//   printNumber(result);
// };

//prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}
  
  
  // function printNumber(number) {
  //   var placeholder = document.getElementById('placeholder');
  //   placeholder.innerHTML = number;
  // }
  
  // var button = document.getElementById('button');
  
  // button.onclick = function() {
  //   var result = dice.roll();
  //   printNumber(result);
  // };
  