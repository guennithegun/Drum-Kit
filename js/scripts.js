function playSound(e) { // function for playing sound on desktop with keyboard
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; //stop function from runnning
  audio.currentTime = 0; //makes it possible to hit the key with sound effect no matter how fast you hit the key
  audio.play();

  key.classList.add('playing');
}

function playSoundTouch(e) { // personal workaround for also using the drum kit on touch devices
  var keyCodes = [
    {
      id: 'one',
      keyCode: '65'
    },
    {
      id: 'two',
      keyCode: '83'
    },
    {
      id: 'three',
      keyCode: '68'
    },
    {
      id: 'four',
      keyCode: '70'
    },
    {
      id: 'five',
      keyCode: '71'
    },
    {
      id: 'six',
      keyCode: '72'
    },
    {
      id: 'seven',
      keyCode: '74'
    },
    {
      id: 'eight',
      keyCode: '75'
    },
    {
      id: 'nine',
      keyCode: '76'
    }
  ];
  var findKey = keyCodes.find(findKey => findKey.id === e.target.id);
  var audio = document.querySelector(`audio[data-key="${findKey.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${findKey.keyCode}"]`);

  if(!audio) return; //stop function from runnning
  audio.currentTime = 0; //makes it possible to hit the key with sound effect no matter how fast you hit the key
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e) { // remove the transition
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key'); // eventlistener on transition end to call removeTransition function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('touchstart', playSoundTouch);
