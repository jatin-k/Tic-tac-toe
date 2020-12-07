// Restart Game Button
var Restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll('td');

// Clear all the squares
function clearBoard() {
	for(var i = 0; i < squares.length; i++){
		squares[i].textContent = '';
	}
}

Restart.addEventListener('click', clearBoard);

// For Loop to add event Listeners to all the squares

function changeMarker(){
	if(this.textContent === ''){
		this.textContent = 'X';
	}else if(this.textContent === 'X'){
		this.textContent = 'O';
	}else {
		this.textContent = '';
	}
}

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener('click', changeMarker);
}