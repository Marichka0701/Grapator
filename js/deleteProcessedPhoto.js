// delete processed image
deleteButton.addEventListener('click', function () {
    sectionTwoProcessedImageContainer.style.display = 'none';
    photoFromNeuralNetwork.src = "";

    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    });
    animationLoaderContainer.style.display = 'flex';
});