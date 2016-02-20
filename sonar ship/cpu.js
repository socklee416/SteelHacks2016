var theNewScript = document.createElement("script");
theNewScript.type = "text/javascript";
theNewScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
//------------------------------ single ticket function ------------------------------------

//This function takes an array holding the user's hint in [x0,y0,x1,y1...] format
//Returns false if it misses 10 times.
//Returns true if it hits all of the spots the user hit and blew up the ship.
//Also returns an array containing the computer's guess.
function makeGuess(user_guess) {
	var coord_vals = user_guess.length * 2;
	var comp_guess = [];
	var x, y;
	var x2, y2;
	var hit = false;
	var new_coord;
	var misses = 0;
	var hits = 0;
	var max_miss = 10;
	
	while (!hit) {
		x = Math.floor(Math.random() * 10);		//Choose a start point
		y = Math.floor(Math.random() * 10);
		comp_guess.push(x);
		comp_guess.push(y);	
		for (var i = 0; i < coord_vals; i=i+2) {
			if (user_guess[i] == x) {
				if (user_guess[i+1] == y) {
					hit = true;
					hits++;
					if (hits*2 == coord_vals) {
						return [true, comp_guess];
					}
				}
			}
		}
		if (!hit) {
			misses++;
			if (misses*2 == max_miss) {
				return [false, comp_guess];
			}
		}
	}
	hit = false;
	while (misses*2 != max_miss) {
		new_coord = false;
		hit = false;
		var dir = false;
		while (!new_coord) {
			new_coord = true;
			if (!dir)
				direction = Math.floor(Math.random() * 4);	//Pick a direction to branch from		
			if (direction == 0) {			//Go right
				x2 = x + 1;
			}
			else if (direction == 1) {		//Up
				y2 = y + 1;
			}
			else if (direction == 2) {		//Left
				x2 = x - 1;
			}
			else {							//Down
				y2 = y - 1;
			}
			for (var j = 0; j < comp_guess.length; j=j+2) {
				if (comp_guess[j] == x2) {
					if (comp_guess[j+1] == y2) {
						new_coord = false;
					}
				}
			}
		}
		comp_guess.push(x2);
		comp_guess.push(y2);
		for (var k = 0; k < coord_vals; k=k+2) {
			if (user_guess[k] == x2) {
				if (user_guess[k+1] == y2) {
					hit = true;
					hits++;
					if (hits*2 == coord_vals) {
						return [true, comp_guess];
					}
					x = x2;
					y = y2;
					dir = true;
				}
			}
		}
		if (!hit) {
			misses++;
			if (misses*2 == max_miss) {
				return [false, comp_guess];
			}
		}
	}
}

function takeTurn() {
	var length = Math.floor((Math.random() * 5) + 1);
	x = Math.floor(Math.random() * 10);		//Choose a start point
	y = Math.floor(Math.random() * 10);
	var direction;
	var comp_move = [];
	comp_move.push(x);
	comp_move.push(y);
	
	var dir = false;
	while (!dir) {
		direction = Math.floor(Math.random() * 4);	//Pick a direction to branch from		
		if (direction == 0) {			//Go right
			if (x+length <= 10)
				dir = true
		}
		else if (direction == 1) {		//Up
			if (y+length <= 10)
				dir = true
		}
		else if (direction == 2) {		//Left
			if (x-length >= 0)
				dir = true
		}
		else {							//Down
			if (y-length >= 0)
				dir = true
		}
	}
	for (i = 0; i < length; i++) {
		if (direction == 0) {			//Go right
			x = x + 1;
		}
		else if (direction == 1) {		//Up
			y = y + 1;
		}
		else if (direction == 2) {		//Left
			x = x - 1;
		}
		else {							//Down
			y = y - 1;
		}
		comp_move.push(x);
		comp_move.push(y);
	}
	return comp_move;
}