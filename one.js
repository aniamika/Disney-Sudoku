
var boxes = document.querySelectorAll('.box');
var boxesLeftTopContainer = document.querySelectorAll('.left-top-container .box');
var boxesRightTopContainer = document.querySelectorAll('.right-top-container .box');
var boxesLeftBottomContainer = document.querySelectorAll('.left-bottom-container .box');
var boxesRightBottomContainer = document.querySelectorAll('.right-bottom-container .box');

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



// // hide colors untill one sudoku is done
// function hideColors() {
//   for(var i=0; i<blueBoxes.length; i++) {
//     blueBoxes[i].classList.remove('blue');
//   }
//   for(var i=0; i<lightgrayBoxes.length; i++) {
//     lightgrayBoxes[i].classList.remove('lightgray');
//   }
//   for(var i=0; i<redBoxes.length; i++) {
//     redBoxes[i].classList.remove('red');
//   }
//   for(var i=0; i<creamyBoxes.length; i++) {
//     creamyBoxes[i].classList.remove('creamy');
//   }
//   for(var i=0; i<darkgrayBoxes.length; i++) {
//     darkgrayBoxes[i].classList.remove('darkgray');
//   }
//   for(var i=0; i<greenBoxes.length; i++) {
//     greenBoxes[i].classList.remove('green');
//   }
//   for(var i=0; i<violetBoxes.length; i++) {
//     violetBoxes[i].classList.remove('violet');
//   }
//   for(var i=0; i<yellowBoxes.length; i++) {
//     yellowBoxes[i].classList.remove('yellow');
//   }
//   for(var i=0; i<lightblueBoxes.length; i++) {
//     lightblueBoxes[i].classList.remove('lightblue');
//   }
// }
// hideColors()
//
// // addcolors when sudoku is done
// function addColors() {
//   for(var i=0; i<blueBoxes.length; i++) {
//     blueBoxes[i].classList.add('blue');
//   }
//   for(var i=0; i<lightgrayBoxes.length; i++) {
//     lightgrayBoxes[i].classList.add('lightgray');
//   }
//   for(var i=0; i<redBoxes.length; i++) {
//     redBoxes[i].classList.add('red');
//   }
//   for(var i=0; i<creamyBoxes.length; i++) {
//     creamyBoxes[i].classList.add('creamy');
//   }
//   for(var i=0; i<darkgrayBoxes.length; i++) {
//     darkgrayBoxes[i].classList.add('darkgray');
//   }
//   for(var i=0; i<greenBoxes.length; i++) {
//     greenBoxes[i].classList.add('green');
//   }
//   for(var i=0; i<violetBoxes.length; i++) {
//     violetBoxes[i].classList.add('violet');
//   }
//   for(var i=0; i<yellowBoxes.length; i++) {
//     yellowBoxes[i].classList.add('yellow');
//   }
//   for(var i=0; i<lightblueBoxes.length; i++) {
//     lightblueBoxes[i].classList.add('lightblue');
//   }
// }


function colorize(box) {
  this.innerText = '';
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
      boxesLeftTopContainer[i].innerText = '';
    }
  }
  if (scoresRightTop == 45) {
    for(var i=0; i<boxesRightTopContainer.length; i++) {
      boxesRightTopContainer[i].innerText = '';
    }
  }
  if (scoresLeftBottom == 45) {
    for(var i=0; i<boxesLeftBottomContainer.length; i++) {
      boxesLeftBottomContainer[i].innerText = '';
    }
  }
  if (scoresRightBottom == 45) {
    for(var i=0; i<boxesRightBottomContainer.length; i++) {
      boxesRightBottomContainer[i].innerText = '';
    }
  }
}

// reset borders when finished all 4 sudoku
function resetBorders() {
  if (scoresLeftTop == 45) {
    for (var i=0; i<boxesLeftTopContainer.length; i++) {
      boxesLeftTopContainer[i].classList.remove('border-bottom');
      boxesLeftTopContainer[i].classList.remove('border-right');
    }
  }
  if (scoresRightTop == 45) {
    for (var i=0; i<boxesRightTopContainer.length; i++) {
      boxesRightTopContainer[i].classList.remove('border-bottom');
      boxesRightTopContainer[i].classList.remove('border-right');
    }
  }
  if (scoresLeftBottom == 45) {
    for (var i=0; i<boxesLeftBottomContainer.length; i++) {
      boxesLeftBottomContainer[i].classList.remove('border-bottom');
      boxesLeftBottomContainer[i].classList.remove('border-right');
    }
  }
  if (scoresRightBottom == 45) {
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
      } else {
        this.innerText = '';
      }

    });
  }
