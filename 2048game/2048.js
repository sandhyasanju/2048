var number = Math.floor(Math.random()*(3 - 0 + 1))+0;
var number2 = Math.floor(Math.random()*(3 - 0 + 1))+0;
$(document).ready(function() {
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
function left(){
  for ( var rows = 0 ; rows <= ($("table").find("tr").length)-1 ; rows++ ) {
    for ( var cell = 0 ; cell <= ($("table").find("tr").eq(0).find("td").length)-1 ; cell++ ) {
      var leftValue1 = $("table").find("tr").eq(rows).find("td").eq(cell).html();
        if ( leftValue1 === "" ) {
          for ( var nextCell = cell+1 ; nextCell <= ($("table").find("tr").eq(0).find("td").length)-1 ; nextCell++ ) {
            var rightValue1 = $("table").find("tr").eq(rows).find("td").eq(nextCell).html();
            if ( rightValue1 !== "") {
              $("table").find("tr").eq(rows).find("td").eq(nextCell).html("");
              $("table").find("tr").eq(rows).find("td").eq(cell).html(rightValue1);
              if(nextCell===cell+1)
              break;
            }
          }
        }
    }
    for ( var cells = 0 ; cells <= ($("table").find("tr").eq(0).find("td").length)-1 ; cells++ ) {
      var leftValue = parseInt($("table").find("tr").eq(rows).find("td").eq(cells).html());
      var temp = rows;
      if ( leftValue !== "" ) {
        for ( var nextCells = cells+1 ; nextCells <= ($("table").find("tr").eq(0).find("td").length)-1 ; nextCells++ ) {
          var rightValue = parseInt($("table").find("tr").eq(rows).find("td").eq(nextCells).html());
          if ( rightValue !== "" ) {
            if ( leftValue === rightValue ) {
              $("table").find("tr").eq(rows).find("td").eq(nextCells).html("");
              $("table").find("tr").eq(rows).find("td").eq(cells).html(leftValue+rightValue);
            }
          }
        }
      }
    }
  }
  randomNumber();
}
function up() {
  for ( var cells = 0 ; cells <= $("table").find("tr").eq(0).find("td").length-1 ; cells++ ) {
    for ( var row = 0 ; row <= ($("table").find("tr").length)-1 ; row++ ) {
      var upperValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
      if ( upperValue1 === "" ) {
        for ( var nextRow = row+1 ; nextRow <= ($("table").find("tr").length)-1 ; nextRow++ ) {
          var lowerValue1 = $("table").find("tr").eq(nextRow).find("td").eq(cells).html();
          if ( lowerValue1 !== "") {
            $("table").find("tr").eq(row).find("td").eq(cells).html(lowerValue1);
            $("table").find("tr").eq(nextRow).find("td").eq(cells).html("");
            if(nextRow===row+1)
            break;
          }
        }
      }
    }
    for ( var rows = 0 ; rows <= $("table").find("tr").length-1 ; rows++ ) {
      var upperValue = parseInt($("table").find("tr").eq(rows).find("td").eq(cells).html());
      var temp = rows;
      if ( upperValue !== "" ) {
        for ( var nextRows = rows+1 ; nextRows <= ($("table").find("tr").length)-1 ; nextRows++ ) {
          var lowerValue = parseInt($("table").find("tr").eq(nextRows).find("td").eq(cells).html());
          if ( lowerValue !== "" ) {
            if ( upperValue === lowerValue ) {
              $("table").find("tr").eq(nextRows).find("td").eq(cells).html("");
              $("table").find("tr").eq(rows).find("td").eq(cells).html(upperValue+lowerValue);
            }
          }
        }
      }
    }
  }
  randomNumber();
}
function right() {
  for ( var rows = 0 ; rows <= ($("table").find("tr").length)-1 ; rows++ ) {
    for ( var cells = ($("table").find("tr").eq(0).find("td").length)-1 ; cells >= 0  ; cells-- ) {
      var rightValue = parseInt($("table").find("tr").eq(rows).find("td").eq(cells).html());
      if ( rightValue !== "" ) {
        for ( var previousCells = cells-1 ; previousCells >= 0 ; previousCells-- ) {
          var leftValue = parseInt($("table").find("tr").eq(rows).find("td").eq(previousCells).html());
          if ( leftValue !== "" ) {
            if ( rightValue === leftValue ) {
              $("table").find("tr").eq(rows).find("td").eq(previousCells).html("");
              $("table").find("tr").eq(rows).find("td").eq(cells).html(leftValue+rightValue);
            }
          }
        }
      }
    }
    for ( var cell = ($("table").find("tr").eq(0).find("td").length)-1 ; cell >=0  ; cell-- ) {
      var rightValue1 = $("table").find("tr").eq(rows).find("td").eq(cell).html();
      if ( rightValue1 === "" ) {
        for ( var previousCell = cell-1 ; previousCell >= 0 ; previousCell-- ) {
          var leftValue1 = $("table").find("tr").eq(rows).find("td").eq(previousCell).html();
          if ( leftValue1 !== "") {
            $("table").find("tr").eq(rows).find("td").eq(previousCell).html("");
            $("table").find("tr").eq(rows).find("td").eq(cell).html(leftValue1);
            if(previousCell===cell-1)
            break;
          }
        }
      }
    }
  }
  randomNumber();
}
function down() {
  for ( var cells = 0 ; cells <= ($("table").find("tr").eq(0).find("td").length)-1 ; cells++ ) {
  for ( var rows = ($("table").find("tr").length)-1 ; rows >= 0 ; rows-- ) {
    var lowerValue = parseInt($("table").find("tr").eq(rows).find("td").eq(cells).html());
    if ( lowerValue !== "" ) {
      for ( var previousRows = rows-1 ; previousRows >= 0 ; previousRows-- ) {
        var upperValue = parseInt($("table").find("tr").eq(previousRows).find("td").eq(cells).html());
        if ( upperValue !== "" ) {
          if ( lowerValue === upperValue ) {
            $("table").find("tr").eq(previousRows).find("td").eq(cells).html("");
            $("table").find("tr").eq(rows).find("td").eq(cells).html(upperValue+lowerValue);
          }
        }
      }
    }
  }
for ( var row = ($("table").find("tr").length)-1 ; row >= 0  ; row-- ) {
    var lowerrValue1 = $("table").find("tr").eq(row).find("td").eq(cells).html();
    if ( lowerrValue1 === "" ) {
      for ( var previousRow = row-1 ; previousRow >= 0 ; previousRow-- ) {
        var upperValue1 = $("table").find("tr").eq(previousRow).find("td").eq(cells).html();
        if ( upperValue1 !== "") {
          $("table").find("tr").eq(previousRow).find("td").eq(cells).html("");
          $("table").find("tr").eq(row).find("td").eq(cells).html(upperValue1);
          if(previousRow===row-1)
          break;
        }
      }
    }
  }
}
randomNumber();
}
function randomNumber() {
  if($("table").find("tr").eq(number).find("td").eq(number2).html() === "") {
    $("table").find("tr").eq(number).find("td").eq(number2).html(2);
  } else {
      randomNumber();
    }
}
