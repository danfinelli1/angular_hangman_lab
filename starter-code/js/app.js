console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", [])
              .controller('HangmanCtrl',HangmanCtrl);


function HangmanCtrl(){
  var vm = this;
  var word = 'elephant';
  vm.hangman = new HangmanGame(word, word.length);
  vm.guessLetter = function (taco){
      taco = taco.toLowerCase();
      vm.hangman.guess(taco);
      var input = document.getElementById('guess');
      input.value = '';
      if(vm.hangman.triesRemaining === 0){
      }
  }
}
