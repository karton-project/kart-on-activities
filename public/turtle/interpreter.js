let drawBlocks = [];
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

function runP5Code() {
    eval(drawBlocks.join(" "));
}

initInterpreter();