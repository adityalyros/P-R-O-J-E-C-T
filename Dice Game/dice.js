document.addEventListener('DOMContentLoaded', function() {
    let diceRollCounts = 0; // Track how many times dice have been rolled

    document.querySelectorAll('.dice').forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.nextElementSibling.textContent === '') { // Check if this dice has not been rolled yet
                diceRollCounts++;
            }
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            this.nextElementSibling.textContent = diceRoll;
            this.disabled = true;
        });
    });
    
    document.getElementById('endButton').addEventListener('click', function() {
        if (diceRollCounts < document.querySelectorAll('.dice').length) {
            document.getElementById('winMessage').textContent = 'Please click on all "Roll the dice" buttons.';
            return;
        }

        let highestScore = 0;
        let winners = [];
        let scores = new Map();

        // Adjust the selector to target the span elements next to each button
        document.querySelectorAll('.dice').forEach(function(button) {
            const currentScore = parseInt(button.nextElementSibling.textContent) || 0;
            // Use the preceding input's value as the player's name
            const playerName = button.previousElementSibling.value;

            if (currentScore > highestScore) {
                highestScore = currentScore;
                winners = [playerName]; // Now using the actual names from input
            } else if (currentScore === highestScore) {
                winners.push(playerName); // Now using the actual names from input
            }
        });

        if (winners.length === 1) {
            document.getElementById('winMessage').textContent = `Game Over! The highest score is ${highestScore} by ${winners[0]}.`;
        } else if (winners.length > 1) {
            let winnersList = winners.join(', ');
            document.getElementById('winMessage').textContent = `Game is a pass due to a tie for the highest score among: ${winnersList}.`;
        } else {
            document.getElementById('winMessage').textContent = 'Game Over! No winner this time.';
        }

        // Optionally, reset for a new game
        document.querySelectorAll('.dice').forEach(button => {
            button.disabled = false; // Re-enable the button
            button.nextElementSibling.textContent = ''; // Clear the last roll result
        });
        diceRollCounts = 0; // Reset dice roll counts
    });
});
