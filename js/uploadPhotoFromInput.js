upload.addEventListener('click', function () {
    fileUpload.click();
});

fileUpload.addEventListener('change', function (e) {
    const file = this.files[0];
    const reader = new FileReader();

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

    // check file size
    if (file.size > 200 * 1024 * 1024) { // 200MB
        alert('File is too large, please select a file smaller than 200MB.');
        e.target.value = '';
    } else if (this.files.length > 0) {
        analyzeButton.disabled = false;
        resetButton.disabled = false;

        reader.onloadend = function () {
            preview.src = reader.result;
            preview.style.display = 'block';

            // hide elements after upload file, set "display: none"
            hideElementsAfterUploadFile.forEach(function (item) {
                item.style.display = 'none';
            });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
});
