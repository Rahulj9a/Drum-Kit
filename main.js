
  function playSound(e){
     
    const audio = document.querySelector(`audio[code = '${e.code}']`);
    if(!audio) return;
    
    const audioBox = document.querySelector(`div[code = "${e.code}"]`);
    audioBox.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
     if(e.propertyName !== 'transform') return;
     e.target.classList.remove('playing');
}
 

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition) );
window.addEventListener('keydown', playSound); 

 
 
   
     
 