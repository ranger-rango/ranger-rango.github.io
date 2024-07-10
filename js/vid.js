const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');

playPauseButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseButton.src = '../icons/pause.png';
    } else {
        video.pause();
        playPauseButton.src = '../icons/play.png';
    }
});

video.addEventListener('play', function() {
    playPauseButton.src = '../icons/pause.png';
});

video.addEventListener('pause', function() {
    playPauseButton.src = '../icons/play.png';
});

muteButton.addEventListener('click', function() {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
});
