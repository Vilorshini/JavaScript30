window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // loop code if there is no audio on keydown action 
    audio.currentTime = 0 // plays audio whenever keyCode a is detected
    audio.play();
    key.classList.add('playing');
    //key.classList.remove('playing');
    //key.classList.toggle('playing');
   //console.log(key);
 });

 // or create a function for playsound ^
 // function playsound(e) {
 //  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 //   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 //   if (!audio) return;
 //   audio.currentTime = 0
 //   audio.play();
 //   key.classList.add('playing');
 //}

 //window.addEventListener('keydown', playSound);


function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
 }
 // remove transition effect after each event
 const keys = document.querySelectorAll('.key'); //gives array of every evelemnt that is matched
 // when you have ann array of elements you cant listen to all of them, you have to loop over the element and attach an event listener
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));