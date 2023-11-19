// delete uploaded file and show elements
resetButton.addEventListener('click', function () {
    progress = 0;
    width = 0;
    clearInterval(interval);

    fileUpload.value = null;
    photo_URLInput.value = '';

    preview.src = "";
    preview.style.display = 'none';
    hideElementsAfterUploadFile.forEach(function (item) {
        item.style.display = 'flex';
    });

    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    });

    sectionTwoProcessedImageContainer.style.display = 'none';
    animationLoaderContainer.style.height = '0px';

    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    });

    animationLoader.style.display = 'none';
    progressBarContainer.style.display = 'none';

    analyzeButton.disabled = true;
});