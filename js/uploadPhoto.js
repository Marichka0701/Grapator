const upload = document.getElementById('upload'); // container for upload file
const fileUpload = document.getElementById('fileUpload'); // input for upload file
const preview = document.getElementById('preview'); // preview photo after upload

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

let progress = 0;
let width = 0;
let interval;

upload.addEventListener('click', function () {
    fileUpload.click();
});

fileUpload.addEventListener('change', function (e) {
    const file = this.files[0];
    const reader = new FileReader();

    // to check file size
    if (file.size > 200 * 1024 * 1024) { // 200MB
        alert('File is too large, please select a file smaller than 200MB.');
        e.target.value = '';
    }

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
});

// to delete uploaded file and show elements
resetButton.addEventListener('click', function () {
    fileUpload.value = null;

    preview.src = "";
    preview.style.display = 'none';
    hideElementsAfterUploadFile.forEach(function (item) {
        item.style.display = 'flex';
    });

    hideElementsAfterAnalyze.forEach(function (item) {
        item.style.display = 'block';
    });

    progress = 0;
    width = 0;
    clearInterval(interval);
    animationLoader.style.display = 'none';
    progressBarContainer.style.display = 'none';
});

// to show animation loader and progress bar if photo is uploaded
analyzeButton.addEventListener('click', function () {
    if (preview.src) {
        animationLoader.style.display = 'block';
        hideElementsAfterAnalyze.forEach(function (item) {
            item.style.display = 'none';
        });

        animationLoaderContainer.style.height = '100%';
        animationLoaderContainer.style.display = 'flex';
        animationLoaderContainer.style.alignItems = 'center';
        animationLoaderContainer.style.justifyContent = 'center';

        progressBarContainer.style.display = 'flex';

        // to show progress bar and current % of progress
        interval = setInterval(function () {
            progress++;
            width++;

            progressBarText.innerText = progress + '%';
            progressBar.style.setProperty('--width', width);

            if (progress === 100 || width === 100) {
                progressBarTextContainer.style.display = 'none';
                progressBar.style.display = 'none';
                animationLoader.style.display = 'none';
            }

            if ((progress || width) >= 100) {
                clearInterval(interval);
            }
        }, 25);
    }
});

