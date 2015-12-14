var leftKey , rightKey , upKey , downKey;
$(document).ready(function() {
  var number = Math.floor(Math.random()*(3 - 0 + 1))+0;
  var number2 = Math.floor(Math.random()*(3 - 0 + 1))+0;
  var table = $("<table class='table table--bordered'></table>");
  for ( var row = 1 ; row < 5 ; row++ ) {
    var tr = $("<tr class='table1'></tr>");
    for ( var c = 1 ; c < 5 ; c++ ) {
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
  $("#body").append(endGameDiv);
  $("body").append($("#body"));
});
$(document).keydown(function(event) {
  if (event.keyCode == 37) {
    left(event.keyCode);
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
  for ( var rows = 0 ; rows <= ($("table").find("tr").length)-1 ; rows++ ) {
    for ( var cell = 0 ; cell <= ($("table").find("tr").eq(0).find("td").length)-1 ; cell++ ) {
      var temp = cell;
      var leftValue1 = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      //alert(leftValue1);
      if ( leftValue1 === "" ) {
        for ( var nextCell = temp+1 ; nextCell <= ($("table").find("tr").eq(0).find("td").length)-1 ; nextCell++ ) {
          var rightValue1 = $("table").find("tr").eq(rows).find("td").eq(nextCell).html();
          if ( rightValue1 !== "") {
            $("table").find("tr").eq(rows).find("td").eq(cell).html(rightValue1);
            $("table").find("tr").eq(rows).find("td").eq(nextCell).html("");
            moved = true;
          }
          temp++;
        }
      } else {
          for ( var nextCells = temp+1 ; nextCells <= ($("table").find("tr").eq(0).find("td").length)-1 ; nextCells++ ) {
            var rightValue = ($("table").find("tr").eq(rows).find("td").eq(nextCells).html());
            if ( rightValue !== "" ) {
              if ( leftValue1 === rightValue ) {
                $("table").find("tr").eq(rows).find("td").eq(cell).html(parseInt(leftValue1)+parseInt(rightValue));
                $("table").find("tr").eq(rows).find("td").eq(cell+1).html("");
                added = true;
              }
            }
            temp++;
          }
        }
    }
  }
  if ( added === true || moved === true ) {
    randomNumber();
    leftKey = true;
    endGame();
  }
}
function up() {
  var added , moved;
  for ( var cells = 0 ; cells <= $("table").find("tr").eq(0).find("td").length-1 ; cells++ ) {
    for ( var row = 0 ; row <= ($("table").find("tr").length)-1 ; row++ ) {
      var temp1 = row+1;
      var upperValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( upperValue1 === "" ) {
        for ( var nextRow = temp1+1 ; nextRow <= ($("table").find("tr").length)-1 ; nextRow++ ) {
          var lowerValue1 = $("table").find("tr").eq(temp1).find("td").eq(cells).html();
          if ( lowerValue1 !== "") {
            $("table").find("tr").eq(row).find("td").eq(cells).html(lowerValue1);
            $("table").find("tr").eq(temp1).find("td").eq(cells).html("");
            moveed = true;
          }
          temp1++;
        }
      }else {
        for ( var nextRows = temp1 ; nextRows <= ($("table").find("tr").length)-1 ; nextRows++ ) {
          var lowerValue = ($("table").find("tr").eq(temp1).find("td").eq(cells).html());
          if ( lowerValue !== "" ) {
            if ( upperValue1 === lowerValue ) {
              $("table").find("tr").eq(row).find("td").eq(cells).html(parseInt(upperValue1)+parseInt(lowerValue));
              $("table").find("tr").eq(temp1).find("td").eq(cells).html("");
              added = true;
            }
          }
          temp1++;
        }
        }
      }
    }

  if ( added === true || moved === true ) {
    randomNumber();
    upKey = true;
  }
}
function right() {
  var moved , added;
  for ( var rows = 0 ; rows <= ($("table").find("tr").length)-1 ; rows++ ) {
    for ( var cell = ($("table").find("tr").eq(0).find("td").length)-1 ; cell >=0  ; cell-- ) {
      var temp = cell-1;
      var rightValue = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      if ( rightValue === "" ) {
        for ( var previousCell = temp-1 ; previousCell >= 0 ; previousCell-- ) {
          var leftValue1 = $("table").find("tr").eq(rows).find("td").eq(temp).html();// alert(temp);
          if ( leftValue1 !== "") {
            $("table").find("tr").eq(rows).find("td").eq(cell).html(leftValue1);
            $("table").find("tr").eq(rows).find("td").eq(temp).html("");
            moved = true;
          }
         temp--;

        }
      } else {
        for ( var previousCells = temp-1 ; previousCells >= 0 ; previousCells-- ) {
            var leftValue =($("table").find("tr").eq(rows).find("td").eq(temp).html());
            if ( leftValue !== "" ) {
              if ( rightValue === leftValue ) {
                $("table").find("tr").eq(rows).find("td").eq(cell).html( parseInt(leftValue)+parseInt(rightValue));
                $("table").find("tr").eq(rows).find("td").eq(temp).html("");
                added = true;
              }
            }
            temp--;
          }
      }
    }

  }
  if ( moved === true || added === true ) {
    randomNumber();
    rightKey = true;
  }
}
function down() {
  var added , moved;
  for ( var cells = 0 ; cells <= ($("table").find("tr").eq(0).find("td").length)-1 ; cells++ ) {
    for ( var row = ($("table").find("tr").length)-1 ; row >= 0  ; row-- ) {
      var temp1 = row;
      var lowerValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( lowerValue1 === "" ) {
        for ( var previousRow = temp1-1 ; previousRow >= 0 ; previousRow-- ) {
          var upperValue1 = $("table").find("tr").eq(previousRow).find("td").eq(cells).html();
          if ( upperValue1 !== "") {
            $("table").find("tr").eq(row).find("td").eq(cells).html(upperValue1);
            $("table").find("tr").eq(previousRow).find("td").eq(cells).html("");
            moved = true;
          }
          temp1--;
        }
      } else {
          for ( var previousRows = temp1-1 ; previousRows >= 0 ; previousRows-- ) {
            var upperValue = parseInt($("table").find("tr").eq(row-1).find("td").eq(cells).html());
            if ( upperValue !== "" ) {
              if ( lowerValue1 == upperValue ) {
                $("table").find("tr").eq(row).find("td").eq(cells).html(upperValue+parseInt(lowerValue1));
                $("table").find("tr").eq(row-1).find("td").eq(cells).html("");
                added = true;
              }
              temp1--;
            }
          }
        }
      }
  }
  if ( moved === true || added === true ) {
    randomNumber();
    downKey = true;
  }
}
function randomNumber() {
  var number1 = Math.floor(Math.random()*(3 - 0 + 1))+0;
  var number3 = Math.floor(Math.random()*(3 - 0 + 1))+0;
  if ( $("table").find("tr").eq(number1).find("td").eq(number3).html() === "" ) {
      $("table").find("tr").eq(number1).find("td").eq(number3).html(2);
  } else {
      randomNumber();
    }
}
function endGame() {
  if(leftKey !== true && downKey !== true && rightKey !== true && upKey !== true) {
    $(".table").append($(".transparent").slideDown("slow"));
    $(".btn").click(function() {
      newGame();
    });
  }
}
function newGame() {
  var number1 = Math.floor(Math.random()*(3 - 0 + 1))+0;
  var number3 = Math.floor(Math.random()*(3 - 0 + 1))+0;
  $("table").find("td").html("");
  $(".transparent").slideUp();
  $("table").find("tr").eq(number1).find("td").eq(number3).html(2);
  $("table").find("tr").eq(number3).find("td").eq(number1).html(2);
}
