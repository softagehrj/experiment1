// Adding click event listener to the 'subscribe' button
document.getElementById('subscribe').addEventListener('click', function() {
    // Simulating subscription logic
    let userSubscribed = confirm('Would you like to subscribe to unblur the content?');

    // If user confirms the subscription
    if (userSubscribed) {
        // Remove the blur effect from all blurred content
        var blurredQualities = document.querySelectorAll('.quality.blurred');
        for (var i = 0; i < blurredQualities.length; i++) {
            blurredQualities[i].classList.remove('blurred');
        }

        // Display a thank you message or perform any additional logic here
        alert('Thank you for subscribing! The content is now unblurred.');
    } else {
        // Optional: Notify the user that the content will remain blurred
        alert('You chose not to subscribe. The content remains blurred.');
    }
});

// Adding click event listeners to all visible content
document.querySelectorAll('.quality:not(.blurred)').forEach(function(quality) {
    quality.addEventListener('click', function() {
        alert('You clicked on: ' + this.textContent);
    });
});
