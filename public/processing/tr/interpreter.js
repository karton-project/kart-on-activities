const p5code =
    "{0}\n" +
    "let ghost, asterisk;\n" +
    "preload = function() {\n" +
    "  ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');\n" +
    "  asterisk = loadAnimation('assets/asterisk_circle0000.png', 'assets/asterisk_circle0002.png');\n" +
    "};\n" +
    "simpleTriangle = function(x,y,w,h){\n" +
    "    triangle(x,y, x+w/2, y-h, x+w, y);\n" +
    "};\n" +
    "gridLines = function(){\n" +
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
    "};\n" +
    "drawThings = function(){\n" +
    " {1}\n" +
    " {2}\n" +
    "};\n" +
    "setup = function() {\n" +
    " var myCanvas = createCanvas(windowWidth,windowHeight);\n" +
    " myCanvas.parent('myContainer');\n" +
    " gridLines();\n" +
    "};\n" +
    "draw = function() {\n" +
    " drawThings();\n" +
    " {3}\n" +
    "};";

let condOnProgress = false;
let variableNames = [];
let variableBlocks = [];
let functionBlocks = [];
let drawBlocks = [];
let loopBlocks = [];
let condCodeType = 1;
let debug = false;
let ct = 3;
let fuse;
let inDrawLoop = false;

function initInterpreter() {
    const fuseOptions = {
        keys: ['title'],
        shouldSort: true,
        includeScore: true
    };
    fuse = new Fuse(codeList, fuseOptions);
}

function addCodeInput(codeInput, codeType) {
    let parsedText = parse(codeInput);
    ct = (typeof codeType !== 'undefined') ? codeType : parsedText[1];
    if (inDrawLoop) {
        loopBlocks.push(parsedText[0]);
    } else {
        if (ct === 1)
            variableBlocks.push(parsedText[0]);
        else if (ct === 2)
            functionBlocks.push(parsedText[0]);
        else if (ct === 3)
            drawBlocks.push(parsedText[0]);
    }

    if (debug) runP5Code();
}

function undo() {
    if (ct === 1)
        variableBlocks.pop();
    else if (ct === 2)
        functionBlocks.pop();
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
    let resultCode = result[0].item.code;
    if (result[0].score > 0.35) { // 0 is complete match, 1 is complete mismatch
        return ["", undefined];
    }
    let inputs = [];
    let codeType = condOnProgress ? condCodeType : result[0].item.code_type;
    if (result[0].item.input === "numeric") {
        inputs.push(code_sub.match(/\d+/g).map(Number));
        resultCode = resultCode.format(inputs);
    } else if (result[0].item.input === "color") {
        let r_index = code_sub.indexOf("r:");
        let g_index = code_sub.indexOf("g:");
        let b_index = code_sub.indexOf("b:");
        let r = code_sub.substring(r_index + 2, g_index - 1).trim();
        let g = code_sub.substring(g_index + 2, b_index - 1).trim();
        let b = code_sub.substring(b_index + 2, code_sub.length).trim();
        resultCode = resultCode.format([r, g, b]);
    } else if (result[0].item.input === "string") {
        let index = code_sub.indexOf(":");
        resultCode = resultCode.format(code_sub.substring(index + 1, code_sub.length).trim());
    } else if (result[0].item.input === "music") {
        if (result[0].item.no_in === 0) {
            resultCode = result[0].item.code;
        } else if (result[0].item.no_in === 1) {
            resultCode = resultCode.format(code_sub.substring(code_sub.lastIndexOf(" ") + 1, code_sub.length));
        }
        eval(resultCode);
    } else if (result[0].item.input === "call") {
        resultCode = resultCode.format(code_sub.substring(code_sub.indexOf(":") + 1, code_sub.length).trim().replace(/\s/g, '_'));
    } else if (result[0].item.input === "cond") {
        condOnProgress = true;
        condCodeType = result[0].item.code_type;
        if (result[0].item.no_in === 0) {
            resultCode = result[0].item.code;
        } else if (result[0].item.no_in === 1) {
            resultCode = resultCode.format(code_sub.substring(code_sub.indexOf(":") + 1, code_sub.length).trim());
        }
    } else if (result[0].item.input === "end") {
        resultCode = result[0].item.code;
        condOnProgress = false;
    } else if (result[0].item.input === "loop") {
        inDrawLoop = !inDrawLoop;
    } else if (result[0].item.input === "variable") {
        let n_index = code_sub.indexOf("n:");
        let v_index = code_sub.indexOf("v:");
        let var_name = code_sub.substring(n_index + 2, v_index - 1);
        if (variableNames.includes(var_name) && result[0].item.code_type === 1) {
            resultCode = "";
        } else {
            resultCode = resultCode.format(var_name, code_sub.substring(v_index + 2, code_sub.length));
            variableNames.push(var_name);
        }
    } else if (result[0].item.input === "shape") {
        let x_index = code_sub.indexOf("x:");
        let y_index = code_sub.indexOf("y:");
        let x = code_sub.substring(x_index + 2, y_index - 1).trim();
        if (result[0].item.no_in > 2) {
            let w_index = (code_sub.indexOf("w:") > 0) ? code_sub.indexOf("w:") : code_sub.lastIndexOf("x:");
            let h_index = (code_sub.indexOf("h:") > 0) ? code_sub.indexOf("h:") : code_sub.lastIndexOf("y:");
            let y = code_sub.substring(y_index + 2, w_index - 1).trim();
            let w = code_sub.substring(w_index + 2, h_index - 1).trim();
            let h = code_sub.substring(h_index + 2, code_sub.length).trim();
            resultCode = resultCode.format([x, y, w, h]);
        } else {
            let y = code_sub.substring(y_index + 2, code_sub.length).trim();
            resultCode = resultCode.format([x, y]);
        }
    } else if (result[0].item.input === "text") {
        code_sub = code_sub.replace(/\s+/g, " ").trim();
        let t_index = code_sub.indexOf(":");
        let x_index = code_sub.indexOf("x:");
        let y_index = code_sub.indexOf("y:");
        let s_index = code_sub.indexOf("s:");
        let t = code_sub.substring(t_index + 2, x_index - 1).trim();
        let x = code_sub.substring(x_index + 2, y_index - 1).trim();
        let y = code_sub.substring(y_index + 2, s_index - 1).trim();
        let s = code_sub.substring(s_index + 2, code_sub.length).trim();
        resultCode = resultCode.format(s, t, x, y);
    }
    return [resultCode, codeType];
}

function runP5Code() {
    let codeP5 = new CodeP5();
    if (!condOnProgress) {
        codeP5.runCode();
    }
}