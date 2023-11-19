const upload = document.getElementById('upload'); // container for upload file
const fileUpload = document.getElementById('fileUpload'); // input for upload file
const preview = document.getElementById('preview'); // preview photo after upload

const photo_URLInput = document.getElementById('photo_URL'); // input for photo URL

const hideElementsAfterUploadFile = document.querySelectorAll('.hide');

const resetButton = document.getElementById('reset');
const analyzeButton = document.getElementById('analyze');

const animationLoaderContainer = document.querySelector('.main_section_two_imageContainer');
const animationLoader = document.getElementById('lottiePlayer');
const hideElementsAfterAnalyze = document.querySelectorAll('.hideAfterAnalyze');

const progressBarContainer = document.querySelector('.main_section_two_progressContainer');
const progressBar = document.getElementById('progress');
const progressBarTextContainer = document.getElementById('progress_text');
const progressBarText = document.getElementById('progress_text_percentage');

const sectionTwoImageContainer = document.getElementById('processedImageFinished');

const photoFromNeuralNetwork = document.getElementById('selectedGrapesPhoto');
const deleteButton = document.getElementById('delete');
const openFullScreenButton = document.getElementById('open');

let progress = 0;
let width = 0;
let interval;

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

    sectionTwoImageContainer.style.display = 'none';
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

photo_URLInput.addEventListener('change', function(e) {
    const url = e.target.value;

    // reset progress bar
    progress = 0;
    width = 0;

    // clear interval if it exists
    if (interval) {
        clearInterval(interval);
    }

    sectionTwoImageContainer.style.display = 'none';
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

    sectionTwoImageContainer.style.display = 'none';
    animationLoaderContainer.style.height = '0px';

    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    });

    animationLoader.style.display = 'none';
    progressBarContainer.style.display = 'none';

    analyzeButton.disabled = true;
});

// show animation loader and progress bar if photo is uploaded
analyzeButton.addEventListener('click', function () {
    if (preview.src) {
        fileUpload.value = null;
        photo_URLInput.value = '';

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

                if (preview.src) {
                    sectionTwoImageContainer.style.display = 'flex';
                    animationLoaderContainer.style.display = 'none';
                    photoFromNeuralNetwork.src = "../images/selected-grapes.svg";
                }

                preview.src = "";
                preview.style.display = 'none';
                hideElementsAfterUploadFile.forEach(function (item) {
                    item.style.display = 'flex';
                });
            }
        }, 25);
    }
});

// delete processed image
deleteButton.addEventListener('click', function () {
    sectionTwoImageContainer.style.display = 'none';
    photoFromNeuralNetwork.src = "";

    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    });
    animationLoaderContainer.style.display = 'flex';
});

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
