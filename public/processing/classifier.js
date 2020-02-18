let net;
let webcamElement;
let buttonColor = 0;
let model;
const classifier = knnClassifier.create();

async function setupWebcam() {
    webcamElement = document.getElementById('cardClassifierCam');
    return new Promise((resolve, reject) => {
        const navigatorAny = navigator;
        navigator.getUserMedia = navigator.getUserMedia ||
            navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
            navigatorAny.msGetUserMedia;
        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true},
                stream => {
                    webcamElement.srcObject = stream;
                    webcamElement.addEventListener('loadeddata', () => resolve(), false);
                },
                error => reject());
        } else {
            reject();
        }
    });
}

async function loadSavedModel(){
    model = await tf.loadLayersModel('localstorage://my-model');
}

async function saveModel(){
    await model.save('localstorage://my-model');
}


async function startClassifier() {
    console.log('Loading mobilenet..');

    // Load the model.
    net = await mobilenet.load();
    //mynet = await tf.loadLayersModel('localstorage://mymodel');
    console.log('Sucessfully loaded model');

    await setupWebcam();

    // Reads an image from the webcam and associates it with a specific class
    // index.
    const addExample =  function () {
        // Get the intermediate activation of MobileNet 'conv_preds' and pass that to the KNN classifier.
        const activation = net.infer(webcamElement, 'conv_preds');
        // Pass the intermediate activation to the classifier.
        classifier.addExample(activation, p5code);
    };

    // When clicking a button, add an example for that class.
    document.getElementById('addInstanceButton').addEventListener('click', () => {
        buttonColor = (buttonColor > 100) ? 100 : buttonColor += 5;
        document.getElementById('addInstanceButton').style.backgroundColor = "hsl(145," + buttonColor  + "%, 50%)";
        addExample(index);
    });

    document.getElementById('predict').addEventListener('click', () => runClassLabel());

}

async function runClassLabel() {
    if (classifier.getNumClasses() > 0) {
        // Get the activation from mobilenet from the webcam.
        const activation = net.infer(webcamElement, 'conv_preds');
        // Get the most likely class and confidences from the classifier module.
        const result = await classifier.predictClass(activation);
        console.log(result.label);
        runP5Code();
    }

    await tf.nextFrame();
}
