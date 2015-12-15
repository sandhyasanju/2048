var leftKey , rightKey , upKey , downKey , score , bestScore;
score=0;
$(document).ready(function() {
  var number = Math.floor(Math.random()*$("table").find("tr").length);
  var number2 = Math.floor(Math.random()*$("table").find("tr").length);
  var table = $("<table></table>");
  for ( var row = 0 ; row < 4 ; row++ ) {
    var tr = $("<tr class='table1'></tr>");
    for ( var column = 0 ; column < 4 ; column++ ) {
      var td = $("<td class='table1'>"+ "" +"</td>");
      tr.append(td);
    }
    table.append(tr);
    $("#body").append(table);
    $("table").find("tr").eq(number2).find("td").eq(number).html(2);
    $("table").find("tr").eq(number).find("td").eq(number2).html(2);
  }
  var endGameDiv = $("<div></div>");
  $(endGameDiv).attr("class" , "transparent");
  var button = "<button class='btn btn--tertiaery'>Try Again</button>";
  $(button).attr("id","button");
  endGameDiv.html("End Game");
  endGameDiv.append(button);
  endGameDiv.hide();
  bestScore=score;
  $("#score").append("<br>"+score);
  $("#bestScore").append("<br>"+bestScore);
  $("#body").append(endGameDiv);
  $("body").append($("#body"));
});
$(document).keydown(function(event) {
  if (event.keyCode == 37) {
    left();
  } else if (event.keyCode == 38) {
      up();
    } else if (event.keyCode == 39) {
        right();
      } else if(event.keyCode == 40) {
          down();
        }
});
function left() {
  var added , moved;
  for ( var rows = 0 ; rows < $("table").find("tr").length ; rows++ ) {
    for ( var cell = 0 ; cell < $("table").find("tr").eq(0).find("td").length ; cell++ ) {
      var temp = cell+1;
      var leftValue1 = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      if ( leftValue1 === "" ) {
        for ( var nextCell = temp ; nextCell < $("table").find("tr").eq(0).find("td").length ; nextCell++ ) {
          var rightValue1 = $("table").find("tr").eq(rows).find("td").eq(nextCell).html();
          if ( rightValue1 !== "") {
            $("table").find("tr").eq(rows).find("td").eq(cell).html(rightValue1);
            $("table").find("tr").eq(rows).find("td").eq(nextCell).html("");
            $("table").find("tr").eq(rows).find("td").eq(nextCell).css("background","grey");
            moved = true;
            break;
          }
        }
      }
      leftValue1 = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      if ( leftValue1 !== "") {
          for ( var nextCells = temp ; nextCells < $("table").find("tr").eq(0).find("td").length ; nextCells++ ) {
            var rightValue = $("table").find("tr").eq(rows).find("td").eq(nextCells).html();
            if ( rightValue !== "" ) {
              if ( leftValue1 === rightValue ) {
                $("table").find("tr").eq(rows).find("td").eq(cell).html(parseInt(leftValue1)+parseInt(rightValue));
                $("table").find("tr").eq(rows).find("td").eq(temp).html("");
                $("table").find("tr").eq(rows).find("td").eq(temp).css("background","grey");
                score = score + parseInt($("table").find("tr").eq(rows).find("td").eq(cell).html());
                if ( bestScore <= score ) {
                  bestScore=score;
                  $("#bestScore").html("Best"+"<br>"+bestScore);
                }
                $("#score").html("Score"+"<br>"+score);
                added = true;
              } else {
                  break;
                }
            }
          }
        }
    }
  }
  if ( added === true || moved === true ) {
    randomNumber();
    addColor();
    leftKey = true;
  } else {
      leftKey = false;
      endGame();
    }
}
function up() {
  var added , moved;
  for ( var cells = 0 ; cells < $("table").find("tr").eq(0).find("td").length ; cells++ ) {
    for ( var row = 0 ; row < $("table").find("tr").length ; row++ ) {
      var temp1 = row+1;
      var upperValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( upperValue1 === "" ) {
        for ( var nextRow = temp1 ; nextRow < $("table").find("tr").eq(0).find("td").length ; nextRow++ ) {
          var lowerValue1 = $("table").find("tr").eq(nextRow).find("td").eq(cells).html();
          if ( lowerValue1 !== "") {
            $("table").find("tr").eq(row).find("td").eq(cells).html(lowerValue1);
            $("table").find("tr").eq(nextRow).find("td").eq(cells).html("");
            $("table").find("tr").eq(nextRow).find("td").eq(cells).css("background","grey");
            moved = true;
            break;
          }
        }
      }
      upperValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( upperValue1 !== "" ) {
        for ( var nextRows = temp1 ; nextRows < $("table").find("tr").eq(cells).find("td").length ; nextRows++ ) {
          var lowerValue = $("table").find("tr").eq(nextRows).find("td").eq(cells).html();
          if ( lowerValue !== "" ) {
            if ( upperValue1 === lowerValue ) {
              $("table").find("tr").eq(row).find("td").eq(cells).html(parseInt(upperValue1)+parseInt(lowerValue));
              $("table").find("tr").eq(temp1).find("td").eq(cells).html("");
              $("table").find("tr").eq(temp1).find("td").eq(cells).css("background","grey");
              score = score + parseInt($("table").find("tr").eq(row).find("td").eq(cells).html());
              if ( bestScore <= score ) {
                bestScore=score;
                $("#bestScore").html("Best"+"<br>"+bestScore);
              }
              $("#score").html("Score"+"<br>"+score);
              added = true;
            } else {
                break;
              }
          }
        }
      }
    }
  }
  if ( added === true || moved === true ) {
    randomNumber();
    addColor();
    upKey = true;
  } else {
      upKey = false;
      endGame();
    }
}
function right() {
  var added , moved;
  for ( var rows = 0 ; rows < $("table").find("tr").length ; rows++ ) {
    for ( var cell = ($("table").find("tr").eq(0).find("td").length)-1 ; cell >= 0  ; cell-- ) {
      var temp = cell-1;
      var rightValue = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      if ( rightValue === "" ) {
        for ( var previousCell = temp ; previousCell >= 0 ; previousCell-- ) {
          var leftValue1 = $("table").find("tr").eq(rows).find("td").eq(previousCell).html();
          if ( leftValue1 !== "") {
            $("table").find("tr").eq(rows).find("td").eq(cell).html(leftValue1);
            $("table").find("tr").eq(rows).find("td").eq(previousCell).html("");
            $("table").find("tr").eq(rows).find("td").eq(previousCell).css("background","grey");
            moved = true;
            break;
          }
        }
      }
      rightValue = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      if ( rightValue !== "" ) {
        for ( var previousCells = temp ; previousCells >= 0 ; previousCells-- ) {
            var leftValue = $("table").find("tr").eq(rows).find("td").eq(previousCells).html();
            if ( leftValue !== "" ) {
              if ( rightValue === leftValue ) {
                $("table").find("tr").eq(rows).find("td").eq(cell).html(parseInt(leftValue)+parseInt(rightValue));
                $("table").find("tr").eq(rows).find("td").eq(temp).html("");
                $("table").find("tr").eq(rows).find("td").eq(temp).css("background","grey");
                score = score + parseInt($("table").find("tr").eq(rows).find("td").eq(cell).html());
                if ( bestScore <= score ) {
                  bestScore=score;
                  $("#bestScore").html("Best"+"<br>"+bestScore);
                }
                $("#score").html("Score"+"<br>"+score);
                added = true;
              } else {
                  break;
                }
            }
          }
      }
    }
  }
  if ( moved === true || added === true ) {
    randomNumber();
    addColor();
    rightKey = true;
  } else {
      rightKey = false;
      endGame();
    }
}
function down() {
  var added , moved;
  for ( var cells = 0 ; cells < $("table").find("tr").eq(0).find("td").length ; cells++ ) {
    for ( var row = ($("table").find("tr").length)-1 ; row >= 0  ; row-- ) {
      var temp1 = row-1;
      var lowerValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( lowerValue1 === "" ) {
        for ( var previousRow = temp1 ; previousRow >= 0 ; previousRow-- ) {
          var upperValue1 = $("table").find("tr").eq(previousRow).find("td").eq(cells).html();
          if ( upperValue1 !== "") {
            $("table").find("tr").eq(row).find("td").eq(cells).html(upperValue1);
            $("table").find("tr").eq(previousRow).find("td").eq(cells).html("");
            $("table").find("tr").eq(previousRow).find("td").eq(cells).css("background","grey");
            moved = true;
            break;
          }
        }
      }
      lowerValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( lowerValue1 !== "" ) {
        for ( var previousRows = temp1 ; previousRows >= 0 ; previousRows-- ) {
          var upperValue = ($("table").find("tr").eq(previousRows).find("td").eq(cells).html());
          if ( upperValue !== "" ) {
            if ( lowerValue1 === upperValue ) {
              $("table").find("tr").eq(row).find("td").eq(cells).html(parseInt(upperValue)+parseInt(lowerValue1));
              $("table").find("tr").eq(temp1).find("td").eq(cells).html("");
              $("table").find("tr").eq(temp1).find("td").eq(cells).css("background","grey");
              score = score + parseInt($("table").find("tr").eq(row).find("td").eq(cells).html());
              if ( bestScore <= score ) {
                bestScore=score;
                $("#bestScore").html("Best"+"<br>"+bestScore);
              }
              $("#score").html("Score"+"<br>"+score);
              added = true;
              } else {
                  break;
                }
            }
          }
        }
    }
  }
  if ( moved === true || added === true ) {
    randomNumber();
    addColor();
    downKey = true;
  } else {
      downKey = false;
      endGame();
    }
}
function randomNumber() {
  var number1 = Math.floor(Math.random()*$("table").find("tr").length);
  var number3 = Math.floor(Math.random()*$("table").find("tr").length);
  if ( $("table").find("tr").eq(number1).find("td").eq(number3).html() === "" ) {
      $("table").find("tr").eq(number1).find("td").eq(number3).html(2);
  } else {
      randomNumber();
    }
}
function endGame() {
  if ( (leftKey === false && rightKey === false) && (downKey === false && upKey === false)) {alert("end");
    $("table").append($(".transparent").slideDown("slow"));
    $(".btn").click(function() {
      newGame();
    });
  }
}
function newGame() {
  score = 0;
  $("#score").html("Score"+"<br>"+score);
  var number1 = Math.floor(Math.random()*$("table").find("tr").length);
  var number3 = Math.floor(Math.random()*$("table").find("tr").length);
  $("table").find("td").html("");
  $(".transparent").slideUp();
  $("table").find("tr").eq(number1).find("td").eq(number3).html(4);
  $("table").find("tr").eq(number3).find("td").eq(number1).html(2);
  $("table").find("td").css("background","grey");
  upKey = true ; downKey = true ; leftKey = true ; rightKey = true;
}
function addColor() {
  var power = [1,2,3,4,5,6,7,8,9,10,11];
  var colors = ["white", "#E0E0E0","#CC9933","#CC6633" ,"#CC3333","#CC0033","#CC0000" ,"#CC9966","#FF6633","#FFCC66","#FF66FF"];
  for ( var rows = 0 ; rows < 4 ; rows++ ) {
    for ( var cells = 0 ; cells < 4 ; cells++ ) {
      for ( var i = 0 ; i <= power.length ; i++) {
        if ( parseInt($("table").find("tr").eq(rows).find("td").eq(cells).html()) === Math.pow(2,power[i]) ) {
          $("table").find("tr").eq(rows).find("td").eq(cells).css("background",colors[i]);
        }
      }
    }
  }
}
