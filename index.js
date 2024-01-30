var navbar = document.getElementById('navbar');
var bar = document.getElementById('bar');
var close = document.getElementById('close');



bar.addEventListener('click', function(){
    bar.style.display = 'none';
    navbar.style.display = 'block';
    close.style.display = 'block';
})

close.addEventListener('click', function(){
    bar.style.display = 'block';
    navbar.style.display = 'none';
    close.style.display = 'none';
})



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
