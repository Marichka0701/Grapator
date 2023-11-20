// show animation loader and progress bar if photo is uploaded
analyzeButton.addEventListener('click', function () {
    if (preview.src) {
        fileUpload.value = null;

        animationLoader.style.display = 'block';
        hideElementsAfterAnalyze.forEach(function (item) {
            item.style.display = 'none';
        });

        progressBarContainer.style.display = 'flex';
        progressBarTextContainer.style.display = 'flex';
        progressBar.style.display = 'flex';

        animationLoaderContainer.style.height = '100%';
        animationLoaderContainer.style.display = 'flex';
        animationLoaderContainer.style.alignItems = 'center';
        animationLoaderContainer.style.justifyContent = 'center';

        // show progress bar and current % of progress
        interval = setInterval(function () {
            progress++;
            width++;

            progressBarText.innerText = progress + '%';
            progressBar.style.setProperty('--width', width);

            if (progress === 100 || width === 100) {
                progressBarTextContainer.style.display = 'none';
                progressBar.style.display = 'none';
                animationLoader.style.display = 'none';
                progress = 0;
                width = 0;
                clearInterval(interval);

                sectionTwoProcessedImageContainer.style.display = 'flex';
                animationLoaderContainer.style.display = 'none';
                photoFromNeuralNetwork.src = "../images/selected-grapes.svg";

                preview.src = "";
                preview.style.display = 'none';
                hideElementsAfterUploadFile.forEach(function (item) {
                    item.style.display = 'flex';
                });
            }
        }, 25);
    }

    analyzeButton.disabled = true;
});