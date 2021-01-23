let drawBlocks = [];
let commands = [];
let debug = false;
let fuse;

function initInterpreter() {
    const fuseOptions = {
        keys: ['title'],
        shouldSort: true,
        includeScore: true
    };
    fuse = new Fuse(codeList, fuseOptions);
}

function addCodeInput(codeInput) {
    let parsedText = parse(codeInput);
    drawBlocks.push(parsedText);
}

function parse(code_text) {
    let code_sub = code_text.toLowerCase().replace(/\s+/g, " ").trim();
    let result = fuse.search(code_sub.replace(/\s+/g, " ").trim().substring(0, (code_sub.indexOf(':') > 0) ? code_sub.indexOf(':') : code_sub.length));
    let resultCode = result[0].item.code;
    if(code_sub.match(/\d+/g)) resultCode = resultCode.format(code_sub.match(/\d+/g).map(Number));
    return resultCode;
}

function getListOfElementIDs() {
    var containerElements = document.getElementById("right-copy-1tomany").children;
    var containerElementIDs = [];
    for (var i = 0; i < containerElements.length; i++) {
        containerElementIDs.push(containerElements[i].getElementsByTagName("label")[0].textContent + " " + containerElements[i].getElementsByTagName("input")[0].value);
    }
    return containerElementIDs;
}

function runCommandArray() {
    drawBlocks = [];
    commands = getListOfElementIDs();
    for(var i = 0; i < commands.length; i++){
        addCodeInput(commands[i]);
    }
    runP5Code();
}

function runP5Code() {
    eval(drawBlocks.join(" "));
}

initInterpreter();