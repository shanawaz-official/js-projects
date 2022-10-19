function run(){
  let menuIcon=document.querySelector('.menuIcon');
 let main=document.querySelector('#main');
 
 if (main.style.bottom='-65px') {
    main.style.bottom='570px'
 } 
 
 menuIcon.style.display='none';
}

// anchor logic
function fbOpen() {
  window.open("https://m.facebook.com/")
}

function instaOpen() {
  window.open("https://www.instagram.com/")
}

function ytOpen() {
  window.open("https://m.youtube.com/")
}

function gOpen() {
  window.open("https://www.google.com/")
}
