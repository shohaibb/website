
document.getElementById('random-color').addEventListener('mouseover', function() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.color = randomColor;
});



window.addEventListener('load', function() {
    setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.style.opacity = "0"; 
      setTimeout(function(){
        loader.style.display = "none"; 
      }, 500); 
    }, 800); 
  });
  