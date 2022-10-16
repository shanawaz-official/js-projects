var score = document.querySelector('.scoreBox');

var scoreUpdate = true;

function right() {
  var hero = document.querySelector('.hero');
  var heroLeft = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));

  hero.style.left = heroLeft + 10 + "px";

};

function left() {
  var hero = document.querySelector('.hero');

  var heroRight = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));

  hero.style.left = heroRight - 10 + "px";

};

function jump() {
  var hero = document.querySelector('.hero');
  hero.classList.add("moveHero");
  console.log("Chalu");

  setTimeout(function() {
    hero.classList.remove("moveHero");
  }, 500);
};

setInterval(function() {
  var hero = document.querySelector('.hero');
  var gameOver = document.querySelector('#gameOver');
  var villon = document.querySelector('#villon');

  //hero x and y


  var hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'));

  var hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'));


  //villon x and y
  var vx = parseInt(window.getComputedStyle(villon, null).getPropertyValue('left'));
  var vy = parseInt(window.getComputedStyle(villon, null).getPropertyValue('top'));

  var absX = Math.abs(hx - vx);
  var absY = Math.abs(hy - vy);

  


  //condition
  if (absX < 16 && absY < 21) {

    console.log("run");
    document.querySelector('#villon').classList.remove('enemy');
    document.querySelector('#display-box').innerText = "Game Over:- Please Refresh to Play Again";
    setInterval(() => {
      document.querySelector('.hero').style.bottom = -17 + 'vh';
    }, 500)


  }
  else if (scoreUpdate) {
    score += 1;
    createScore();
    scoreUpdate = false;

    setTimeout(() => {
      scoreUpdate = true;
    }, 1000)

  }

  function createScore() {
    scoreBox.innerHTML = "Score:-" + score;
  }

}, 500);
