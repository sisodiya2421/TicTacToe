let cells = document.querySelectorAll('.row > div');
var count = 0;
const win_combination = [
    ['top left','top middle','top right'],
    ['center left','center middle','center right'],
    ['bottom left','bottom middle','bottom right'],
    ['top left','center left','bottom left'],
    ['top middle','center middle','bottom middle'],
    ['top right','center right','bottom right'],
    ['top left','center middle','bottom right'],
    ['top right','center middle','bottom left']
]

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    /*Checks for empty spaces and fills up X for even turn and O for Odd turn.
    If position already filled nothing happens.
    */
    if (filled() === true){
        reset();
    }
    if (event.target.textContent === '') {
        if (count % 2 === 0) {
            player('X');
            count += 1;
            if (won() === true) {
                winner();
                reset();
            }
            else if (filled() === true) {
                    draw();
            }
        }
        else {
            player('O');
            count += 1;
            if (won() === true) {
                winner();
                reset();
            }
            else if (filled() === true) {
                    draw();
            }
        }
    }
};

function winner() {
    alert(event.target.textContent + ' Wins');
};

function draw() {
    alert("Draw Match");
};

function won() {
    for (let i = 0; i < win_combination.length; i++) {
        if (document.getElementsByClassName(win_combination[i][0])[0].innerHTML === 'X' && document.getElementsByClassName(win_combination[i][1])[0].innerHTML === 'X' && document.getElementsByClassName(win_combination[i][2])[0].innerHTML === 'X') {
            return true;
        }
        else if(document.getElementsByClassName(win_combination[i][0])[0].innerHTML === 'O' && document.getElementsByClassName(win_combination[i][1])[0].innerHTML === 'O' && document.getElementsByClassName(win_combination[i][2])[0].innerHTML === 'O') {
            return true;
        }
    }
    return false;
};

function filled() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === '') {
            return false;
        }
    };
    return true;
};

function player(player) {
    /* Changes the text content of the cell to the player value */
    event.target.textContent = player;
}

function reset() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = ''
        }
};