let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var interval=500,i=0;
setInterval(function(){
  i++;
   if (i % 4 !== 0) {
     document.getElementById('type1').style.visibility = 'visible';
     document.getElementById('type1').style.visibility = 'hidden';

   } else {
     document.getElementById('type1').style.visibility = 'hidden';
     document.getElementById('type1').style.visibility = 'visible';
   }
},interval);
