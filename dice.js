// simple dice roller found online 
// https://codepen.io/Pyremell/pen/eZGGXX/
// Would like try and put this and other dice together for a standard dice set
// and be able to roll multiples and have all the numbers plus the sum shown.

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  