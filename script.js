document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    var playButton = document.getElementById('play-button');
    var audioControls = document.getElementById('audio-controls');

    // Check if the user has already interacted with the site
    var isAutoplayAllowed = localStorage.getItem('isAutoplayAllowed');

    if (isAutoplayAllowed) {
        // Attempt to play the audio
        var playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(function() {
                // Audio is playing
            }).catch(function(error) {
                console.log('Audio playback failed: ' + error);
                // Show the play button to allow user interaction to play the audio
                audioControls.classList.remove('hidden');
            });
        }
    } else {
        // Show the play button initially
        audioControls.classList.remove('hidden');
    }

    playButton.addEventListener('click', function() {
        audio.play().then(function() {
            audioControls.classList.add('hidden');
            // Set the flag in localStorage to remember the user's interaction
            localStorage.setItem('isAutoplayAllowed', true);
        }).catch(function(error) {
            console.log('Audio playback failed: ' + error);
        });
    });
});
