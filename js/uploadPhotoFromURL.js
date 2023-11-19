photo_URLInput.addEventListener('change', function(e) {
    const url = e.target.value;

    // reset progress bar
    progress = 0;
    width = 0;

    // clear interval if it exists
    if (interval) {
        clearInterval(interval);
    }

    sectionTwoProcessedImageContainer.style.display = 'none';
    animationLoaderContainer.style.display = 'flex';
    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    })

    if (url) {
        analyzeButton.disabled = false;
        resetButton.disabled = false;

        preview.src = url;
        preview.style.display = 'block';

        // hide elements after upload file, set "display: none"
        hideElementsAfterUploadFile.forEach(function (item) {
            item.style.display = 'none';
        });
    } else {
        preview.src = "";
        preview.style.display = 'none';
    }
});