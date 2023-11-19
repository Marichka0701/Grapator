const upload = document.getElementById('upload'); // container for upload file
const fileUpload = document.getElementById('fileUpload'); // input for upload file
const preview = document.getElementById('preview'); // preview photo after upload

const photo_URLInput = document.getElementById('photo_URL'); // input for photo URL

const hideElementsAfterUploadFile = document.querySelectorAll('.hide');

const resetButton = document.getElementById('reset');
const analyzeButton = document.getElementById('analyze');

//animation from lottier + progress bar
const animationLoaderContainer = document.querySelector('.main_section_two_imageContainer');
const animationLoader = document.getElementById('lottiePlayer');
const hideElementsAfterAnalyze = document.querySelectorAll('.hideAfterAnalyze');

const progressBarContainer = document.querySelector('.main_section_two_progressContainer');
const progressBar = document.getElementById('progress');
const progressBarTextContainer = document.getElementById('progress_text');
const progressBarText = document.getElementById('progress_text_percentage');

const sectionTwoProcessedImageContainer = document.getElementById('processedImageFinished');

const photoFromNeuralNetwork = document.getElementById('selectedGrapesPhoto');
const deleteButton = document.getElementById('delete');
const openFullScreenButton = document.getElementById('open');

let progress = 0;
let width = 0;
let interval;
