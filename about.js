var backgroundText = document.getElementById('background-text');
var aboutText = document.getElementById('about-text');
var aboutImage = document.querySelector('.about-image');
var contentWrapper = document.getElementById('content-wrapper');

function showBackground() {
  aboutText.classList.add('about-text-fade-out');
  aboutImage.classList.add('about-image-fade-out'); 

  aboutText.style.pointerEvents = 'none';

  aboutText.addEventListener('animationend', function() {
      aboutText.style.display = 'none';
      aboutText.classList.remove('about-text-fade-out');
      backgroundText.style.display = 'block';
      backgroundText.classList.add('background-text-fade-in');
      aboutText.style.pointerEvents = 'auto';
  }, { once: true });

  aboutImage.addEventListener('animationend', function() {
      aboutImage.style.display = 'none';
      aboutImage.classList.remove('about-image-fade-out');
  }, { once: true });
}

function showAbout() {
  backgroundText.classList.add('background-text-fade-out');
  aboutText.style.pointerEvents = 'none';

  backgroundText.addEventListener('animationend', function() {
      backgroundText.style.display = 'none';
      backgroundText.classList.remove('background-text-fade-out');
      aboutText.style.display = 'block';
      aboutImage.style.display = 'block'; 
      aboutImage.classList.add('about-image-fade-in'); 

      var fullText = aboutText.textContent;
      aboutText.textContent = '';

      var i = 0;
      var typingInterval = setInterval(function() {
          if (i < fullText.length) {
              aboutText.textContent += fullText[i];
              i++;
          } else {
              clearInterval(typingInterval);
              aboutText.style.pointerEvents = 'auto';
          }
      }, 3);
  }, { once: true });
}

backgroundText.addEventListener('click', showAbout);
aboutText.addEventListener('click', showBackground);

window.addEventListener('load', function() {
  setTimeout(function() {
      document.body.classList.add('fade-in');
  }, 800);
});

aboutImage.addEventListener('mouseover', function() {
    contentWrapper.style.filter = 'blur(5px)';
});

aboutImage.addEventListener('mouseout', function() {
    contentWrapper.style.filter = 'none';
});
