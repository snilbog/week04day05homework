var players = [];
var myMath = {};

myMath.random = function() {
	return 0.8;
};

function swal(s) {

}

var getWinner = function () {
    if (parseInt(players[0].bid) == parseInt(players[1].bid)) {
        swal("The auction was a tie! Both players bid the same amount. The winner will instead be decided by a coin flip.");
        return (myMath.random()>.5)?1:0;
    } else if (parseInt(players[0].bid) > parseInt(players[1].bid)) {
        return 0;
    } else if (parseInt(players[0].bid) < parseInt(players[1].bid)) {
        return 1;
    }
};

QUnit.test("Testing is true is true!", function(assert) {
	players[0] = {
		bid: 100
	};
	players[1] = {
		bid: 200
	};

	var result = getWinner();

	// the first parameter is the output of the thing to be tested
	// The second parameter is the expected output
	// the third parameter is the message you get when things go wrong
	equal(result, 1, "Player 2 should win");
	
	players[0].bid = 10000000;

	var result = getWinner();

	equal(result, 0, "Player 1 should win");
});
