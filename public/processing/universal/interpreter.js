let p5code =
    "{0}\n" +
    "let ghost, asterisk;\n" +
    "preload = function() {\n" +
    "  ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');\n" +
    "  asterisk = loadAnimation('assets/asterisk_circle0000.png', 'assets/asterisk_circle0002.png');\n" +
    "}\n" +
    "simpleTriangle = function(x,y,w,h){\n" +
    "    triangle(x,y, x+w/2, y-h, x+w, y);\n" +
    "}\n" +
    "setup = function() {\n" +
    " var myCanvas = createCanvas(windowWidth,windowHeight);\n" +
    " myCanvas.parent('myContainer');\n" +
    "  fill(212);\n" +
    "  stroke(232);\n" +
    "  for (var i = 0; i < width; i += 50) {\n" +
    "    line(i, 0, i, height);\n" +
    "    text(i, i + 1, 10);\n" +
    "  }\n" +
    "  for (var i = 0; i < height; i += 50) {\n" +
    "    line(0, i, width, i);\n" +
    "    text(i, 0, i - 1);\n" +
    "  }\n" +
    " fill(125);\n" +
    " {1}\n" +
    "};\n" +
    "draw = function() {\n" +
    " {2}\n" +
    "};";

let condOnProgress = false;
let variableNames = [];
let variableBlocks = [];
let setupBlocks = [];
let drawBlocks = [];
let condCodeType = 1;
let debug = false;
let ct = 3;
let fuse;

function initInterpreter() {
    window.$.getJSON('./universal/code.json', function (response) {
        fuse = new Fuse(response, {
            keys: ['title'],
            shouldSort: true
        });
    });
}

function addCodeInput(codeInput, codeType) {
    let parsedText = parse(codeInput);
    ct = (typeof codeType !== 'undefined') ? codeType : parsedText[1];
    if (ct === 1)
        variableBlocks.push(parsedText[0]);
    else if (ct === 2)
        setupBlocks.push(parsedText[0]);
    else if (ct === 3)
        drawBlocks.push(parsedText[0]);

    if(debug) runP5Code();
}

function undo() {
    if (ct === 1)
        variableBlocks.pop();
    else if (ct === 2)
        setupBlocks.pop();
    else if (ct === 3)
        drawBlocks.pop();

    runP5Code();
}

function parse(code_text) {
    let code_sub = "";
    if (code_text.indexOf("\n") > 0) {
        code_sub = code_text.substring(0, code_text.indexOf("\n"));
    } else {
        code_sub = code_text;
    }
    code_sub = code_sub.toLowerCase();
    code_sub = code_sub.replace(/\s+/g, " ").trim();
    let result = fuse.search(code_sub.replace(/\s+/g, " ").trim().substring(0, (code_sub.indexOf(':') > 0) ? code_sub.indexOf(':') : code_sub.length));
    let resultCode = result[0].code;
    let code_rest = code_sub.substring(code_sub.indexOf(':') + 1, code_sub.length);
    let codeType = condOnProgress ? condCodeType : result[0].code_type;
    if (result[0].input === "single") {
        let single = code_rest.split(',');
        resultCode = resultCode.format(single);
    } else if (result[0].input === "text") {
        let inputs = code_rest.split(',');
        resultCode = resultCode.format(inputs[3], inputs[0], inputs[1], inputs[2]);
    } else if (result[0].input === "music") {
        if (result[0].no_in === 0) {
            resultCode = result[0].code;
        } else if (result[0].no_in === 1) {
            resultCode = resultCode.format(code_sub.substring(code_sub.lastIndexOf(" ") + 1, code_sub.length));
        }
        eval(resultCode);
    } else if (result[0].input === "call") {
        resultCode = resultCode.format(code_sub.substring(code_sub.indexOf(":") + 1, code_sub.length).trim().replace(/\s/g, '_'));
    } else if (result[0].input === "cond") {
        condOnProgress = true;
        condCodeType = result[0].code_type;
        if (result[0].no_in === 0) {
            resultCode = result[0].code;
        } else if (result[0].no_in === 1) {
            resultCode = resultCode.format(code_sub.substring(code_sub.indexOf(":") + 1, code_sub.length).trim());
        }
    } else if (result[0].input === "end") {
        resultCode = result[0].code;
        condOnProgress = false;
    } else if (result[0].input === "variable") {
        let variable = code_rest.split(',');
        let var_name = variable[0];
        let var_rest = (variable.length > 2) ? variable[1] + variable[2] : variable[1];
        if (variableNames.includes(var_name) && result[0].code_type === 1) {
            resultCode = "";
        } else {
            resultCode = resultCode.format(var_name, var_rest);
            variableNames.push(var_name);
        }
    }
    return [resultCode, codeType];
}

function runP5Code() {
    var codeP5 = new CodeP5();
    if(!condOnProgress){
        codeP5.runCode();
        if(debug)  console.log(p5code.format(variableBlocks.join(' '), setupBlocks.join(' '), drawBlocks.join(' ')));
    }
}
