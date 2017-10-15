
var boxes = document.querySelectorAll('.box');
var scores = 0;
var bigScores = 0;
var boxesLeftTopContainer = document.querySelectorAll('.left-top-container .box');
var boxesRightTopContainer = document.querySelectorAll('.right-top-container .box');
var boxesLeftBottomContainer = document.querySelectorAll('.left-bottom-container .box');
var boxesRightBottomContainer = document.querySelectorAll('.right-bottom-container .box');


function colorize(box) {
  box.innerText = '';
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
  } else {
    box.style.background = "rgb(255,255,255)";
  }
}

for ( var i = 0; i < boxes.length; i++ ) {
  boxes[i].addEventListener("keypress", function(event) {
    const keyName = event.key;

    if ( keyName == this.dataset.number ) {
      scores = scores + 1;
      console.log("scores - " + scores)
      colorize(this);
    } else  {
      // block possibility to tap the wrong answer
      event.preventDefault();
      return false;
    }
  });
}

  // left top container counter
  for ( var i=0; i < boxesLeftTopContainer.length; i++ ) {
      // if one from 4 sudoku is correct

      if ( scores == 5 ) {
        bigScores += 1
        console.log( bigScores + ' top left sudoku is correct' );
        // boxesLeftTopContainer[i].classList.remove("border-right");
        // console.log(boxesLeftTopContainer.classList)
        // reset scores
        scores = 0;
      }
  }


    // right top container counter
    for ( var i=0; i < boxesLeftTopContainer.length; i++ ) {
        // if one from 4 sudoku is correct
        if ( scores == 45 ) {
          bigScores += 1
          console.log( bigScores + ' top right sudoku is correct' );
          // reset scores
          scores = 0;
        }
    }

    // left bottom container counter
    for ( var i=0; i < boxesLeftBottomContainer.length; i++ ) {
        // if one from 4 sudoku is correct
        if ( scores == 45 ) {
          bigScores += 1
          console.log( bigScores + ' bottom left sudoku is correct' );
          // reset scores
          scores = 0;
        }
    }

    // right bottom container counter
    for ( var i=0; i < boxesRightBottomContainer.length; i++ ) {
        // if one from 4 sudoku is correct
        if ( scores == 45 ) {
          bigScores += 1
          console.log( bigScores + ' bottom right sudoku is correct' );
          // reset scores
          scores = 0;
        }
    }










  // boxes[i].addEventListener("click", function() {
  //   this.style.color = 'gray';
  // });
  // boxes[i].addEventListener("blur", function() {
  //   this.style.color = 'black';
  // });
// }



// var redDivs = document.querySelectorAll('.red[contenteditable]');
// var creamyDivs = document.querySelectorAll('.creamy[contenteditable]');
// var darkgrayDivs = document.querySelectorAll('.darkgray[contenteditable]');
// var greenDivs = document.querySelectorAll('.green[contenteditable]');
// var violetDivs = document.querySelectorAll('.violet[contenteditable]');
// var blueDivs = document.querySelectorAll('.blue[contenteditable]');
// var lighgrayDivs = document.querySelectorAll('.lightgray[contenteditable]');
//
// // change color of innerText when the box is clicked
// for ( var i = 0; i < boxes.length; i++ ) {
//   boxes[i].addEventListener("click", function() {
//     this.style.color = 'gray';
//   });
//   boxes[i].addEventListener("blur", function() {
//     this.style.color = 'black';
//   });
// }
//
// // RED //
// for ( var i = 0; i < redDivs.length; i++ ) {
//   redDivs[i].addEventListener("keyup", function() {
//     if ( this.innerHTML == 0 ) {
//       this.style.background = "rgb(250, 3, 12)";
//       this.innerText = '';
//     }
//   })
// }
//
// for ( var i = 0; i < redDivs.length; i++ ) {
//   redDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 0 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
//
//
// // CREAMY //
// for ( var i = 0; i < creamyDivs.length; i++ ) {
//   creamyDivs[i].addEventListener("keyup", function() {
//     if ( this.innerText == 1 ) {
//       this.style.background = "rgb(252, 198, 151)";
//       this.innerText = '';
//     }
//   })
// }
//
// for ( var i = 0; i < creamyDivs.length; i++ ) {
//   creamyDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 1 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
//
//
// // DARKGRAY //
// for ( var i = 0; i < darkgrayDivs.length; i++ ) {
//   darkgrayDivs[i].addEventListener("keyup", function() {
//     if ( this.innerText == 2 ) {
//       this.style.background = "rgb(46, 42, 41)";
//       this.innerText = '';
//     }
//   })
// }
//
// for ( var i = 0; i < darkgrayDivs.length; i++ ) {
//   darkgrayDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 2 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
//
//
// // GREEN //
// for ( var i = 0; i < greenDivs.length; i++ ) {
//     greenDivs[i].addEventListener("keyup", function() {
//         if ( this.innerText == 3 ) {
//             this.style.background = "rgb(3, 173, 85)";
//             this.innerText = '';
//         }
//     })
// }
//
// for ( var i = 0; i < greenDivs.length; i++ ) {
//   greenDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 3 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
//
//
// // VIOLET //
// for ( var i = 0; i < violetDivs.length; i++ ) {
//   violetDivs[i].addEventListener("keyup", function() {
//     if ( this.innerText == 4 ) {
//       this.style.background = "rgb(104, 48, 157)";
//       this.innerText = '';
//     }
//   })
// }
//
// for ( var i = 0; i < violetDivs.length; i++ ) {
//   violetDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 4 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
//
//
// // BLUE //
// for ( var i = 0; i < blueDivs.length; i++ ) {
//   blueDivs[i].addEventListener("keyup", function(event) {
//     if ( this.innerText == 5 ) {
//         this.style.background = "rgb(24, 177, 237)";
//         this.innerText = '';
//     }
//   });
// }
//
// for ( var i = 0; i < blueDivs.length; i++ ) {
//   blueDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 5 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
//
//
// // LIGHTGRAY //
// for ( var i = 0; i < lighgrayDivs.length; i++ ) {
//   lighgrayDivs[i].addEventListener("keyup", function() {
//     if ( this.innerText == 6 ) {
//       this.style.background = "rgb(162, 165, 170)";
//       this.innerText = '';
//     }
//   })
// }
//
// for ( var i = 0; i < lighgrayDivs.length; i++ ) {
//   lighgrayDivs[i].addEventListener("keypress", function(event) {
//     const keyName = event.key;
//     if ( keyName == 6 ) {
//       this.innerText = '';
//     } else {
//       // block possibility to tap the wrong answer
//       event.preventDefault();
//       return false;
//     }
//   });
// }
