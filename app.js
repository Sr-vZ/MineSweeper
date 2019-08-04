field = $('#field')

// minegield grid
function setupMinefield() {


  maxCol = 10
  maxRow = 10

  gridHtml = ''
  gridNumber = 1
  for (row = 0; row < maxRow; row++) {
    gridHtml += '<tr>'
    for (col = 0; col < maxCol; col++) {
      gridHtml += "<td id='gn-" + gridNumber + "'onclick='stepOn(this)'>" + gridNumber + "</td>"
      gridNumber++
    }
    gridHtml += '</tr>'
  }

  $('#field').html(gridHtml)
}

minesLoc = []

function throwMines(maxMines) {
  var mines = []
  while (mines.length < maxMines) {
    var r = Math.floor(Math.random() * 100) + 1;
    if (mines.indexOf(r) === -1) mines.push(r);
  }
  mines.sort(function (a, b) {
    return a - b
  });
  console.log(mines)

  for (m = 0; m < mines.length; m++) {
    $('#gn-' + mines[m]).html('M')
  }
  // minesLoc = mines
  return mines
}

function stepOn(field) {
  
  fieldNo = field.id.split('-')[1]
  console.log(fieldNo)
  if(minesLoc.includes(fieldNo*1)){
    // boom
    for(m=0;m<minesLoc.length;m++){
      $('#gn-' + minesLoc[m]).css('background-color','#FF0000')
    }
    alert('You stepped on mine! You Lost!')

  }else{
    for(m=0;m<minesLoc.length;m++){
      // $('#gn-' + minesLoc[m]).css('background-color','#FF0000')
      
    }
    $('#'+field.id).css('background-color','#C0C0C0')

  }

}


// initiate the game
setupMinefield()
minesLoc = throwMines(10)