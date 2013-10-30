// determine if X or O.
function determineWinners(iboard) {
  var mark = '';
  var winners = {};

  if ((board[0] === board[1]) && (board[1] === board[2])){
    mark = board[0];
  } else if ((board[3] === board[4]) && (board[4] === board[5])){
    mark = board[3];
  } else if ((board[6] === board[7]) && (board[7] === board[8])) {
    mark = board[6];
  }else if ((board[0] === board[3]) && (board[3] === board[6])) {
    mark = board[0];;
  } else if ((board[1] === board[4]) && (board[4] === board[7])){
    mark = board[1];
  } else if ((board[2] === board[5]) && (board[5] === board[8])){
    mark = board[2];
  } else if ((board[0] === board[4]) && (board[4] === board[8])) {
    mark = board[0];
  } else if ((board[2] === board[4]) && (board[4] === board[6])) {
    mark = board[2];
  }

    if ((board[0] === board[1]) && (board[1] === board[2]) && (board[2] == mark)){
    winners[1] = 1;
    winners[2] = 1;
    winners[3] = 1;
  }

  if ((board[3] === board[4]) && (board[4] === board[5]) && (board[5] == mark)){
    winners[4] = 1;
    winners[5] = 1;
    winners[6] = 1;
  }

  if ((board[6] === board[7]) && (board[7] === board[8]) && (board[8] == mark)) {
    winners[7] = 1;
    winners[8] = 1;
    winners[9] = 1;
  }

  if ((board[0] === board[3]) && (board[3] === board[6]) && (board[6] == mark)) {
    winners[1] = 1;
    winners[4] = 1;
    winners[7] = 1;
  }

  if ((board[1] === board[4]) && (board[4] === board[7]) && (board[7] == mark)){
    winners[2] = 1;
    winners[5] = 1;
    winners[8] = 1;
  }

  if ((board[2] === board[5]) && (board[5] === board[8]) && (board[8] == mark)){
    winners[3] = 1;
    winners[6] = 1;
    winners[9] = 1;
  }

  if ((board[0] === board[4]) && (board[4] === board[8]) && (board[8] == mark)) {
    winners[1] = 1;
    winners[5] = 1;
    winners[9] = 1;
  }

  if ((board[2] === board[4]) && (board[4] === board[6]) && (board[6] == mark)) {
    winners[3] = 1;
    winners[5] = 1;
    winners[7] = 1;
  }

  return winners;
}

function stringifyWinners(win_list) {
  var wlist = 'Players ';

  for (var k in win_list) {
    if (win_list.hasOwnProperty(k)) {
      wlist += k + ' ';
    }
  }
  wlist += 'win!'

  return wlist;
}

function drawTable(itable) {
  var side = Math.sqrt(itable.length);
  var table = '<table border = "1">';
  for (var i = 0; i < side; i++) {
    table += '<tr>';

    // console.log("here")
    // console.log(users);

    for (var j = 0; j < side; j++) {
      // table += '<td>' + itable[i*side + j] + '</td>';

      // if (users[i*side + j] == 0) {
        // console.log('red');
        // table += '<td bgcolor="#FF0000">' + itable[i*side + j] + '</td>'
      // } else {
        // console.log('clear');
        table += '<td>' + itable[i*side + j] + '</td>'
      // };
    }

    table += '</tr>';
  }
  table += '</table>'

  var div = document.getElementById('boardDiv');
  div.innerHTML = table;
}
