
var boxes = document.querySelectorAll('.box');
var boxesLeftTopContainer = document.querySelectorAll('.left-top-container input.box');
var boxesRightTopContainer = document.querySelectorAll('.right-top-container input.box');
var boxesLeftBottomContainer = document.querySelectorAll('.left-bottom-container input.box');
var boxesRightBottomContainer = document.querySelectorAll('.right-bottom-container input.box');

var LeftTopContainer = document.querySelectorAll('.left-top-container .box');
var RightTopContainer = document.querySelectorAll('.right-top-container .box');
var LeftBottomContainer = document.querySelectorAll('.left-bottom-container .box');
var RightBottomContainer = document.querySelectorAll('.right-bottom-container .box');

var tdLeftTopContainer = document.querySelectorAll('.left-top-container td');
var tdRightTopContainer = document.querySelectorAll('.right-top-container td');
var tdLeftBottomContainer = document.querySelectorAll('.left-bottom-container td');
var tdRightBottomContainer = document.querySelectorAll('.right-bottom-container td');

var blueBoxes = document.querySelectorAll('.blue');
var lightgrayBoxes = document.querySelectorAll('.lightgray');
var redBoxes = document.querySelectorAll('.red');
var creamyBoxes = document.querySelectorAll('.creamy');
var darkgrayBoxes = document.querySelectorAll('.darkgray');
var greenBoxes = document.querySelectorAll('.green');
var violetBoxes = document.querySelectorAll('.violet');
var yellowBoxes = document.querySelectorAll('.yellow');
var lightblueBoxes = document.querySelectorAll('.lightblue');

var scoresLeftTop = 0;
var scoresRightTop = 0;
var scoresLeftBottom = 0;
var scoresRightBottom = 0;


// go to page with second sudoku
function win() {
  if (scoresLeftTop == 45 && scoresRightTop == 45 && scoresLeftBottom == 45 && scoresRightBottom == 45)  {
  window.location.href = 'two.html';
  }
}


function colorize(box) {
  // this.innerText = '';
  // this.value = '';
  if ( box.dataset.color == "blue" ) {
    box.style.background = "rgb(24, 177, 237)";
  } else if ( box.dataset.color == "lightgray" ) {
    box.style.background = "rgb(162, 165, 170)";
  } else if ( box.dataset.color == "red" ) {
    box.style.background = "rgb(250, 3, 12)";
  } else if ( box.dataset.color == "creamy" ) {
    box.style.background = "rgb(252, 198, 151)";
  } else if ( box.dataset.color == "darkgray" ) {
    box.style.background = "rgb(46, 42, 41)";
  } else if ( box.dataset.color == "green" ) {
    box.style.background = "rgb(3, 173, 85)";
  } else if ( box.dataset.color == "violet" ) {
    box.style.background = "rgb(104, 48, 157)";
  } else if ( box.dataset.color == "yellow" ) {
    box.style.background = "rgb(252, 247, 196)";
  } else {
    box.style.background = "rgb(210, 253, 255)";
  }
}

// reset margins when finished all 4 sudoku
function resetMargins() {
  if (scoresLeftTop == 45 && scoresRightTop == 45 && scoresLeftBottom == 45 && scoresRightBottom == 45) {
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
  if (scoresLeftTop == 45) {
    for(var i=0; i<boxesLeftTopContainer.length; i++) {
      boxesLeftTopContainer[i].value = '';
    }
    for(var i=0; i<LeftTopContainer.length; i++) {
      LeftTopContainer[i].innerText = '';
    }
  }
  if (scoresRightTop == 45) {
    for(var i=0; i<boxesRightTopContainer.length; i++) {
      boxesRightTopContainer[i].value = '';
    }
    for(var i=0; i<RightTopContainer.length; i++) {
      RightTopContainer[i].innerText = '';
    }
  }
  if (scoresLeftBottom == 45) {
    for(var i=0; i<boxesLeftBottomContainer.length; i++) {
      boxesLeftBottomContainer[i].value = '';
    }
    for(var i=0; i<LeftBottomContainer.length; i++) {
      LeftBottomContainer[i].innerText = '';
    }
  }
  if (scoresRightBottom == 45) {
    for(var i=0; i<boxesRightBottomContainer.length; i++) {
      boxesRightBottomContainer[i].value = '';
    }
    for(var i=0; i<RightBottomContainer.length; i++) {
      RightBottomContainer[i].innerText = '';
    }
  }
}

// reset borders when finished all 4 sudoku
function resetBorders() {
  if (scoresLeftTop == 45) {
    for (var i=0; i<tdLeftTopContainer.length; i++) {
      tdLeftTopContainer[i].classList.remove('border-bottom');
      tdLeftTopContainer[i].classList.remove('border-right');
    }
  }
  if (scoresRightTop == 45) {
    for (var i=0; i<tdRightTopContainer.length; i++) {
      tdRightTopContainer[i].classList.remove('border-bottom');
      tdRightTopContainer[i].classList.remove('border-right');
    }
  }
  if (scoresLeftBottom == 45) {
    for (var i=0; i<tdLeftBottomContainer.length; i++) {
      tdLeftBottomContainer[i].classList.remove('border-bottom');
      tdLeftBottomContainer[i].classList.remove('border-right');
    }
  }
  if (scoresRightBottom == 45) {
    for (var i=0; i<tdRightBottomContainer.length; i++) {
      tdRightBottomContainer[i].classList.remove('border-bottom');
      tdRightBottomContainer[i].classList.remove('border-right');
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
        this.value = this.dataset.number;
        // colorize square
        colorize(this);
        console.log(this)
        // block square editable
        this.disabled = true;
        // this.setAttribute("contenteditable", false);
        // event.preventDefault();



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
        // this.innerText = '';
        this.value = '';
      }

    });
  }
