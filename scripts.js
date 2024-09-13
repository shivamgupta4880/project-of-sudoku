document.getElementById("sudoku-board").addEventListener("keyup", function(event) {
    if(event.target && event.target.nodeName === "TD") {
      let validNum = /[1-9]/;
      let tdEl = event.target;
      if (tdEl.innerText.length > 0 && validNum.test(tdEl.innerText[0])) {
        tdEl.innerText = tdEl.innerText[0];
      } else {
        tdEl.innerText = "";
      }
    }
  });
  
  document.getElementById("solve-button").addEventListener("click", function() {
    let boardString = boardToString();
    let solution = SudokuSolver.solve(boardString);
    if (solution) {
      stringToBoard(solution);
    } else {
      alert("Invalid board!");
    }
  });
  
  document.getElementById("clear-button").addEventListener("click", clearBoard);
  
  function clearBoard() {
    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
      tds[i].innerText = "";
    }
  }
  
  function boardToString() {
    let string = "";
    let validNum = /[1-9]/;
    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
      if (validNum.test(tds[i].innerText[0])) {
        string += tds[i].innerText;
      } else {
        string += "-";
      }
    }
    return string;
  }
  
  function stringToBoard(string) {
    let currentCell;
    let validNum = /[1-9]/;
    let cells = string.split("");
    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
      currentCell = cells.shift();
      if (validNum.test(currentCell)) {
        tds[i].innerText = currentCell;
      }
    }
  }
  