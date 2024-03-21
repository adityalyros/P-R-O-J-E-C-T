document.addEventListener('DOMContentLoaded', function() {
    // Attach click event listeners to each dice roll button
    document.querySelectorAll('.dice').forEach(function(button) {
        button.addEventListener('click', function() {
            // Generate a random number between 1 and 6 (inclusive)
            const diceRoll = Math.floor(Math.random() * 6) + 1;

            // Display the dice roll result in the next span element
            this.nextElementSibling.textContent = diceRoll;
        });
    });

    // Optionally, implement logic for the End Button here
    document.getElementById('endButton').addEventListener('click', function() {
        // Example: Display a message. You can customize this part.
        document.getElementById('winMessage').textContent = 'Game Over! Check the scores.';
    });
});
