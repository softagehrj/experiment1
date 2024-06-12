document.getElementById('subscribe').addEventListener('click', function() {
    // Here you can add the subscription logic
    // For now, we just remove the blur effect
    var blurredQualities = document.querySelectorAll('.quality.blurred');
    for (var i = 0; i < blurredQualities.length; i++) {
        blurredQualities[i].classList.remove('blurred');
    }
});

document.querySelectorAll('.quality:not(.blurred)').forEach(function(quality) {
    quality.addEventListener('click', function() {
        alert('You clicked on: ' + this.textContent);
    });
});
