// open full screen photo from neural network
openFullScreenButton.addEventListener('click', function() {
    if (photoFromNeuralNetwork.requestFullscreen) {
        photoFromNeuralNetwork.requestFullscreen();
    } else if (photoFromNeuralNetwork.mozRequestFullScreen) { // Firefox
        photoFromNeuralNetwork.mozRequestFullScreen();
    } else if (photoFromNeuralNetwork.webkitRequestFullscreen) { // Chrome, Safari and Opera
        photoFromNeuralNetwork.webkitRequestFullscreen();
    } else if (photoFromNeuralNetwork.msRequestFullscreen) { // IE/Edge
        photoFromNeuralNetwork.msRequestFullscreen();
    }
});