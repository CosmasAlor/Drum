 

    function playSound(e) {

        var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        
        var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return // stoping from playing
        
        
        
        audio.currentTime = 0;
        audio.play();
        
        key.classList.add(`playing`);
        };
          
          
        function removeTransition(e) {
          if (e.propertyName !== 'transform') return
        
          this.classList.remove('playing')
         
          
        }
        
          var keys = document.querySelectorAll('.key');
          keys.forEach(key => key.addEventListener('transitionend',removeTransition));
        
        
          window.addEventListener('keydown', playSound);