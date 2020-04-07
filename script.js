document.addEventListener('mousemove', function(e) {
  let circle = document.createElement('span');

  let x = e.offsetX;
  let y = e.offsetY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";

  let size = Math.random() * 100;

  circle.style.width = 60 + size + "px";
  circle.style.height = 60 + size + "px";

  document.querySelector('body').appendChild(circle);
  setTimeout(function() {
    circle.remove();
  }, 4000);
});