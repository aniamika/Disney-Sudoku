
var boxes = document.querySelectorAll('.box');
var boxesLeftTopContainer = document.querySelectorAll('.left-top-container .box');
var boxesRightTopContainer = document.querySelectorAll('.right-top-container .box');
var boxesLeftBottomContainer = document.querySelectorAll('.left-bottom-container .box');
var boxesRightBottomContainer = document.querySelectorAll('.right-bottom-container .box');

var blueBoxes = document.querySelectorAll('.blue');
var redBoxes = document.querySelectorAll('.red');
var creamyBoxes = document.querySelectorAll('.creamy');
var darkgrayBoxes = document.querySelectorAll('.darkgray');
var greenBoxes = document.querySelectorAll('.green');
var yellowBoxes = document.querySelectorAll('.yellow');
var lightblueBoxes = document.querySelectorAll('.lightblue');
var darkyellowBoxes = document.querySelectorAll('.darkyellow');

var scoresLeftTop = 0;
var scoresRightTop = 0;
var scoresLeftBottom = 0;
var scoresRightBottom = 0;



// go to page with three sudoku page
function win() {
  if (scoresLeftTop == 44 && scoresRightTop == 54 && scoresLeftBottom == 55 && scoresRightBottom == 52)  {
  window.location.href = 'three.html';
  }
}

function colorize(box) {
  this.innerText = '';
  if ( box.dataset.color == "blue" ) {
    box.style.background = "rgb(24, 177, 237)";
  } else if ( box.dataset.color == "red" ) {
    box.style.background = "rgb(250, 3, 12)";
  } else if ( box.dataset.color == "creamy" ) {
    box.style.background = "rgb(252, 198, 151)";
  } else if ( box.dataset.color == "darkgray" ) {
    box.style.background = "rgb(46, 42, 41)";
  } else if ( box.dataset.color == "green" ) {
    box.style.background = "rgb(3, 173, 85)";
  } else if ( box.dataset.color == "yellow" ) {
    box.style.background = "rgb(252, 247, 196)";
  } else if ( box.dataset.color == "lightblue" ) {
    box.style.background = "rgb(210, 253, 255)";
  } else {
    box.style.background = "rgb(255, 192, 0)";
  }
}

// reset margins when finished all 4 sudoku
function resetMargins() {
  if (scoresLeftTop == 44 && scoresRightTop == 54 && scoresLeftBottom == 55 && scoresRightBottom == 52) {
    document.querySelector('.left-top-container').style.marginLeft = "0";
    document.querySelector('.left-top-container').style.marginTop = "0";
    document.querySelector('.left-top-container').style.marginBottom = "-1px";
    document.querySelector('.left-top-container').style.marginRight = "-1px";

    document.querySelector('.right-top-container').style.marginLeft = "-1px";
    document.querySelector('.right-top-container').style.marginBottom = "-1px";
    document.querySelector('.right-top-container').style.marginRight = "0";
    document.querySelector('.right-top-container').style.marginTop = "0";

    document.querySelector('.left-bottom-container').style.marginLeft = "0";
    document.querySelector('.left-bottom-container').style.marginTop = "-1px";
    document.querySelector('.left-bottom-container').style.marginRight = "-1px";
    document.querySelector('.left-bottom-container').style.marginBottom = "0";

    document.querySelector('.right-bottom-container').style.marginLeft = "-1px";
    document.querySelector('.right-bottom-container').style.marginTop = "-1px";
    document.querySelector('.right-bottom-container').style.marginRight = "0";
    document.querySelector('.right-bottom-container').style.marginBottom = "0";
  }
}

// reset innerText when finished one sudoku
function resetInnerText() {
  if (scoresLeftTop == 44) {
    for(var i=0; i<boxesLeftTopContainer.length; i++) {
      boxesLeftTopContainer[i].innerText = '';
    }
  }
  if (scoresRightTop == 54) {
    for(var i=0; i<boxesRightTopContainer.length; i++) {
      boxesRightTopContainer[i].innerText = '';
    }
  }
  if (scoresLeftBottom == 55) {
    for(var i=0; i<boxesLeftBottomContainer.length; i++) {
      boxesLeftBottomContainer[i].innerText = '';
    }
  }
  if (scoresRightBottom == 52) {
    for(var i=0; i<boxesRightBottomContainer.length; i++) {
      boxesRightBottomContainer[i].innerText = '';
    }
  }
}

// reset borders when finished all 4 sudoku
function resetBorders() {
  if (scoresLeftTop == 44) {
    for (var i=0; i<boxesLeftTopContainer.length; i++) {
      boxesLeftTopContainer[i].classList.remove('border-bottom');
      boxesLeftTopContainer[i].classList.remove('border-right');
    }
  }
  if (scoresRightTop == 54) {
    for (var i=0; i<boxesRightTopContainer.length; i++) {
      boxesRightTopContainer[i].classList.remove('border-bottom');
      boxesRightTopContainer[i].classList.remove('border-right');
    }
  }
  if (scoresLeftBottom == 55) {
    for (var i=0; i<boxesLeftBottomContainer.length; i++) {
      boxesLeftBottomContainer[i].classList.remove('border-bottom');
      boxesLeftBottomContainer[i].classList.remove('border-right');
    }
  }
  if (scoresRightBottom == 52) {
    for (var i=0; i<boxesRightBottomContainer.length; i++) {
      boxesRightBottomContainer[i].classList.remove('border-bottom');
      boxesRightBottomContainer[i].classList.remove('border-right');
    }
  }
}

  // event on keypress
  for ( var i = 0; i < boxes.length; i++ ) {
    boxes[i].addEventListener("keypress", function(event) {
      var keyName = event.key;

      // block possibility to tap letters
      if (keyName != '1' && keyName != '2' && keyName != '3' && keyName != '4' && keyName != '5' && keyName != '6' && keyName != '7' && keyName != '8' && keyName != '9') {
        event.preventDefault();
        return false;
      }

      // if press key is the same as dataset number
      if ( keyName == this.dataset.number ) {
        this.innerText = this.dataset.number;
        // colrize square
        colorize(this);
        // block square editable
        this.setAttribute("contenteditable", false);

        // count scores
        if (this.dataset.position == "leftTop") {
          scoresLeftTop = scoresLeftTop + 1;
          console.log("scoresLeftTop - " + scoresLeftTop)
        } else if (this.dataset.position == "rightTop") {
          scoresRightTop = scoresRightTop + 1;
          console.log("scoresRightTop - " + scoresRightTop)
        } else if (this.dataset.position == "leftBottom") {
          scoresLeftBottom = scoresLeftBottom + 1;
          console.log("scoresLeftBottom - " + scoresLeftBottom)
        } else if (this.dataset.position == "rightBottom") {
          scoresRightBottom = scoresRightBottom + 1;
          console.log("scoresRightBottom - " + scoresRightBottom)
        }
        resetInnerText();
        resetMargins();
        resetBorders();
        win();
      } else {
        this.innerText = '';
      }

    });
  }
