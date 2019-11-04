let index = 0;
let inLoop = false;
let soundOn = false;

let song = [];
let loopedSong = [];

let trigger = 0;
let autoplay = false;
let oscS, oscT;
let lowFreq = false;
let highFreq = true;
let osc = "sine";
let recorder, soundFile;
let loopTimes = 2;
let currentBlock = "start";
let p_a3, p_a4, p_b3, p_b4, p_c3, p_c4, p_d3, p_d4, p_e3, p_e4, p_f3, p_f4, p_g3, p_g4;
let g_a3, g_a4, g_b3, g_b4, g_c3, g_c4, g_d3, g_d4, g_e3, g_e4, g_f3, g_f4, g_g3, g_g4;

function preload() {
    p_a3 = loadSound('sound/piano/A3.mp3');
    p_a4 = loadSound('sound/piano/A4.mp3');
    p_b3 = loadSound('sound/piano/B3.mp3');
    p_b4 = loadSound('sound/piano/B4.mp3');
    p_c3 = loadSound('sound/piano/C3.mp3');
    p_c4 = loadSound('sound/piano/C4.mp3');
    p_d3 = loadSound('sound/piano/D3.mp3');
    p_d4 = loadSound('sound/piano/D4.mp3');
    p_e3 = loadSound('sound/piano/E3.mp3');
    p_e4 = loadSound('sound/piano/E4.mp3');
    p_f3 = loadSound('sound/piano/F3.mp3');
    p_f4 = loadSound('sound/piano/F4.mp3');
    p_g3 = loadSound('sound/piano/G3.mp3');
    p_g4 = loadSound('sound/piano/G4.mp3');

    g_a3 = loadSound('sound/guitar/A3.mp3');
    g_a4 = loadSound('sound/guitar/A4.mp3');
    g_b3 = loadSound('sound/guitar/B3.mp3');
    g_b4 = loadSound('sound/guitar/B4.mp3');
    g_c3 = loadSound('sound/guitar/C3.mp3');
    g_c4 = loadSound('sound/guitar/C4.mp3');
    g_d3 = loadSound('sound/guitar/D3.mp3');
    g_d4 = loadSound('sound/guitar/D4.mp3');
    g_e3 = loadSound('sound/guitar/E3.mp3');
    g_e4 = loadSound('sound/guitar/E4.mp3');
    g_f3 = loadSound('sound/guitar/F3.mp3');
    g_f4 = loadSound('sound/guitar/F4.mp3');
    g_g3 = loadSound('sound/guitar/G3.mp3');
    g_g4 = loadSound('sound/guitar/G4.mp3');
}

function setup() {
    createCanvas(10, 10);

    // Triangle oscillator
    oscT = new p5.TriOsc();
    oscT.start();
    oscT.amp(0);

    // Sine oscillator
    oscS = new p5.SinOsc();
    oscS.start();
    oscS.amp(0);

    recorder = new p5.SoundRecorder();
    recorder.setInput();
    soundFile = new p5.SoundFile();
}

function addMusic() {
    soundOn = true;
}

function playSong() {
    if (inLoop) {
        createLoopedSong(loopTimes);
    }
    if (!autoplay) {
        index = 0;
        autoplay = true;
    }
}

function changeFreq(val) {
    if (val === 'bass') {
        lowFreq = true;
        highFreq = false;
    } else if (val === 'treble') {
        lowFreq = false;
        highFreq = true;
    }
}

function startSynth() {
    clearCode();
}

function clearCode() {
    song = [];
}

function startLoop() {
    inLoop = !inLoop;
    currentBlock = "loop";
}

function createLoopedSong(num) {
    loopedSong = [];
    for (let i = 0; i < num; i++) {
        loopedSong = loopedSong.concat(song);
    }
}

function addNote(note, dur) {
    switch (note) {
        case 'a':
            if (lowFreq) {
                song.push({note: 57, duration: dur, soundType: osc, display: "A"});
            } else {
                song.push({note: 69, duration: dur, soundType: osc, display: "A"});
            }
            break;
        case 'b':
            if (lowFreq) {
                song.push({note: 59, duration: dur, soundType: osc, display: "b"});
            } else {
                song.push({note: 71, duration: dur, soundType: osc, display: "B"});
            }
            break;
        case 'c':
            if (lowFreq) {
                song.push({note: 48, duration: dur, soundType: osc, display: "C"});
            } else {
                song.push({note: 60, duration: dur, soundType: osc, display: "C"});
            }
            break;
        case 'd':
            if (lowFreq) {
                song.push({note: 50, duration: dur, soundType: osc, display: "D"});
            } else {
                song.push({note: 62, duration: dur, soundType: osc, display: "D"});
            }
            break;
        case 'e':
            if (lowFreq) {
                song.push({note: 52, duration: dur, soundType: osc, display: "E"});
            } else {
                song.push({note: 64, duration: dur, soundType: osc, display: "E"});
            }
            break;
        case 'f':
            if (lowFreq) {
                song.push({note: 53, duration: dur, soundType: osc, display: "F"});
            } else {
                song.push({note: 65, duration: dur, soundType: osc, display: "F"});
            }
            break;
        case 'g':
            if (lowFreq) {
                song.push({note: 59, duration: dur, soundType: osc, display: "G"});
            } else {
                song.push({note: 71, duration: dur, soundType: osc, display: "G"});
            }
            break;
        case 'n':
            song.push({note: 0, duration: dur, soundType: osc, display: "G"});
            break;
        default:
            break;
    }
}

function addPiano() {
    osc = "piano";
}

function addGuitar() {
    osc = "guitar";
}

function addSine() {
    osc = "sine";
}

function addSquare() {
    osc = "square";
}


function playNote(note, duration, soundType) {
    if (soundType === "piano") {
        switch (note) {
            case 48:
                p_c3.setVolume(1);
                p_c3.play();
                p_c3.stop(1);
                break;
            case 50:
                p_d3.setVolume(1);
                p_d3.play();
                p_d3.stop(1);
                break;
            case 52:
                p_e3.setVolume(1);
                p_e3.play();
                p_e3.stop(1);
                break;
            case 53:
                p_f3.setVolume(1);
                p_f3.play();
                p_f3.stop(1);
                break;
            case 55:
                p_g3.setVolume(1);
                p_g3.play();
                p_g3.stop(1);
                break;
            case 57:
                p_a3.setVolume(1);
                p_a3.play();
                p_a3.stop(1);
                break;
            case 59:
                p_b3.setVolume(1);
                p_b3.play();
                p_b3.stop(1);
                break;
            case 60:
                p_c4.setVolume(1);
                p_c4.play();
                p_c4.stop(1);
                break;
            case 62:
                p_d4.setVolume(1);
                p_d4.play();
                p_d4.stop(1);
                break;
            case 64:
                p_e4.setVolume(1);
                p_e4.play();
                p_e4.stop(1);
                break;
            case 65:
                p_f4.setVolume(1);
                p_f4.play();
                p_f4.stop(1);
                break;
            case 67:
                p_g4.setVolume(1);
                p_g4.play();
                p_g4.stop(1);
                break;
            case 69:
                p_a4.setVolume(1);
                p_a4.play();
                p_a4.stop(1);
                break;
            case 71:
                p_b4.setVolume(1);
                p_b4.play();
                p_b4.stop(1);
                break;
            default:
                break;
        }
    }
    if (soundType === "guitar") {
        switch (note) {
            case 48:
                g_c3.setVolume(1);
                g_c3.play();
                g_c3.stop(1);
                break;
            case 50:
                g_d3.setVolume(1);
                g_d3.play();
                g_d3.stop(1);
                break;
            case 52:
                g_e3.setVolume(1);
                g_e3.play();
                g_e3.stop(1);
                break;
            case 53:
                g_f3.setVolume(1);
                g_f3.play();
                g_f3.stop(1);
                break;
            case 55:
                g_g3.setVolume(1);
                g_g3.play();
                g_g3.stop(1);
                break;
            case 57:
                g_a3.setVolume(1);
                g_a3.play();
                g_a3.stop(1);
                break;
            case 59:
                g_b3.setVolume(1);
                g_b3.play();
                g_b3.stop(1);
                break;
            case 60:
                g_c4.setVolume(1);
                g_c4.play();
                g_c4.stop(1);
                break;
            case 62:
                g_d4.setVolume(1);
                g_d4.play();
                g_d4.stop(1);
                break;
            case 64:
                g_e4.setVolume(1);
                g_e4.play();
                g_e4.stop(1);
                break;
            case 65:
                g_f4.setVolume(1);
                g_f4.play();
                g_f4.stop(1);
                break;
            case 67:
                g_g4.setVolume(1);
                g_g4.play();
                g_g4.stop(1);
                break;
            case 69:
                g_a4.setVolume(1);
                g_a4.play();
                g_a4.stop(1);
                break;
            case 71:
                g_b4.setVolume(1);
                g_b4.play();
                g_b4.stop(1);
                break;
            default:
                break;
        }
    }
    if (soundType === "square") {
        oscT.freq(midiToFreq(note));
        oscT.fade(0.5, 0.2);
        if (duration) {
            setTimeout(function () {
                oscT.fade(0, 0.2);
            }, duration - 50);
        }
    } else if (soundType === "sine") {
        oscS.freq(midiToFreq(note));
        oscS.fade(0.5, 0.2);
        if (duration) {
            setTimeout(function () {
                oscS.fade(0, 0.2);
            }, duration - 50);
        }

    }
}

// TODO: Change it as an NFC function
function mousePressed() {
    getAudioContext().resume();
}

function touchStarted() {
    getAudioContext().resume()
}

// TODO: Change it to save block
function keyTyped() {
    if (key === 's') {
        save(soundFile, 'mySound.wav');
    }
}

function keyPressed() {
    if (currentBlock === "loop") {
        if (keyCode === UP_ARROW) {
            (loopTimes > 10) ? loopTimes = 10 : loopTimes++;
        }
        if (keyCode === DOWN_ARROW) {
            (loopTimes < 2) ? loopTimes = 2 : loopTimes--;
        }
    }
}

function startNewPart() {

}

function draw() {
    if (autoplay && millis() > trigger) {
        recorder.record(soundFile);
        if (inLoop) {
            playNote(loopedSong[index].note, loopedSong[index].duration, loopedSong[index].soundType);
            trigger = millis() + loopedSong[index].duration;
        } else {
            playNote(song[index].note, song[index].duration, song[index].soundType);
            trigger = millis() + song[index].duration;
        }
        index++;
        if (index >= song.length + 2) {
            recorder.stop();
        }
    } else if (inLoop ? index >= loopedSong.length : index >= song.length) {
        autoplay = false;
    }
}