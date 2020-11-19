const p5code =
"var Pjs;\n" +

    "var s = function(p) {\n" +
    "\tvar turtles_path = [];\t// array of Turtle objects\n" +
    "\tvar pathPointer = 0;\n" +
    "\tvar turtle;\n" +
    "\tvar turtleSprite;\n" +
    "\tvar tPlane;\t\t\t\t// graphic plane for pen layer\n" +

    "\tp.setup = function() {\n" +
    "\t\tp.createCanvas(480, 360);\n" +
    "\t\tp.background(200);\n" +
    "\t\t// p.fill(200);\n" +

    "\t\t// pen layer\n" +
    "\t\ttPlane = p.createGraphics(480, 360, 0, 0);\n" +
    "\t\t//tPlane = p.createImage(480, 360, 0, 0);\n" +
    "\t\t//tPlane = this\n" +

    "\t\tturtleSprite = p.createSprite(0, 0, 56, 64);\n" +
    "\t\tturtleSprite.addAnimation(\"moving\", \"turtle_1.png\", \"turtle_4.png\");\n" +
    "\t\tturtleSprite.changeAnimation(\"moving\");\n" +

    "\t\t// Start turtle code - recording turtle move. -------------------------------------\n" +
    "\t\tturtle = new p.Turtle();\n" +
    "\t\tturtle.x = 120;\n" +
    "\t\tturtle.y = 150;\n" +
    "\t\tturtle.angleInRadians = Math.PI / 360 * 90;\n" +
    "\t\tturtle.penDown = true;\n" +
    "\t\tturtle.penColor = turtle.color.blue;\n" +

    "\t\t\tturtle.forward(200);\n" +
    "\t\t\t{0}\n" +
    "\t\tturtle.penDown = true;\n" +
    "\t\t// // End of turtle code ------------------------------------------------------------\n" +
    "\t};\n" +

    "\tp.draw = function() {\n" +
    "\t\t// Playback turtle moving for animation.\n" +
    "\t\tp.background(200);\n" +
    "\t\tturtle.draw2(pathPointer);\n" +

    "\t\tp.image(tPlane);\n" +
    "\t\t//turtleSprite.position.x = p.mouseX;\n" +
    "\t\t//turtleSprite.position.y = p.mouseY;\n" +
    "\t\tp.drawSprites();\n" +

    "\t\tpathPointer += 1;\n" +
    "\t\tif (pathPointer >= turtles_path.length) {\n" +
    "\t\t\tpathPointer = 0;\n" +
    "\t\t\t// p.fill(200);\n" +
    "\t\t\t// p.noStroke();\n" +
    "\t\t\t// p.rect(0, 0, p.width, p.height);\n" +
    "\t\t\ttPlane.fill(200);\n" +
    "\t\t\ttPlane.noStroke();\n" +
    "\t\t\ttPlane.rect(0, 0, p.width, p.height);\n" +
    "\t\t}\n" +
    "\t};\n" +

    "\t/** Turtle Data */\n" +
    "\tp.TBody = function() {\n" +
    "\t\tthis.x = 200;\n" +
    "\t\tthis.y = 60;\n" +
    "\t\tthis.step = 10;\n" +
    "\t\tthis.stepAngle = Math.PI / 10;\n" +
    "\t\tthis.angleInRadians = 0;\n" +
    "\t\tthis.penDown = false;\n" +
    "\t\tthis.penColor = \"#000000\";\n" +
    "\t\tthis.lineWidth = 2;\n" +
    "\t};\n" +

    "\t/** Turtle class */\n" +
    "\tp.Turtle = function() {\n" +
    "\t\tvar body = new p.TBody();\n" +
    "\t\tfor (var prop in body) {\n" +
    "\t\t\tthis[prop] = body[prop];\n" +
    "\t\t};\n" +

    "\t\tthis.color = {\n" +
    "\t\t\tblack : \"#000000\",\n" +
    "\t\t\tgray: \"#808080\",\n" +
    "\t\t\tlightgray: \"#C0C0C0\",\n" +
    "\t\t\tred: \"#ff0000\",\n" +
    "\t\t\tgreen: \"#00ff00\",\n" +
    "\t\t\tblue: \"#0000ff\",\n" +
    "\t\t\tyellow: \"#ffff00\",\n" +
    "\t\t\tmagenta: \"#ff00ff\",\n" +
    "\t\t\taqua: \"#00ffff\",\n" +
    "\t\t\twhite: \"#ffffff\"\n" +
    "\t\t};\n" +

    "\t\tthis.forward = function(length) {\n" +
    "\t\t\tvar x0 = this.x;\n" +
    "\t\t\tvar y0 = this.y;\n" +
    "\t\t\tvar xx = Math.sin(this.angleInRadians);\n" +
    "\t\t\tvar yy = Math.cos(this.angleInRadians);\n" +

    "\t\t\tvar count = p.abs(p.int(length / this.step));\n" +
    "\t\t\tvar dir = 1;\n" +
    "\t\t\tif(length < 0) {dir = -1};\n" +

    "\t\t\tfor(var i=0; i < count - 1; i++) {\n" +
    "\t\t\t\tthis.x += dir * this.step * xx;\n" +
    "\t\t\t\tthis.y += dir * this.step * yy;\n" +
    "\t\t\t\tthis.copy();\n" +
    "\t\t\t}\n" +

    "\t\t\tthis.x = x0 + length * xx;\n" +
    "\t\t\tthis.y = y0 + length * yy;\n" +

    "\t\t\t/* \t\t\tif (this.penDown) {\n" +
    "                            p.stroke(this.penColor);\n" +
    "                            p.strokeWeight(this.lineWidth);\n" +
    "                            p.line(this.x, this.y, x0, y0);\n" +
    "                        } */\n" +
    "\t\t\tthis.copy();\n" +
    "\t\t};\n" +
    "\t\tthis.back = function(length) {\n" +
    "\t\t\tthis.forward(-length);\n" +
    "\t\t};\n" +
    "\t\tthis.left = function(angleInDegrees) {\n" +
    "\t\t\tvar angle0 = this.angleInRadians;\n" +
    "\t\t\tvar targetAngle = angleInDegrees * Math.PI / 180.0;\n" +
    "\t\t\tvar count = p.abs(p.int(targetAngle / this.stepAngle));\n" +
    "\t\t\tvar dir = 1;\n" +
    "\t\t\tif(targetAngle < 0) {dir = -1};\n" +
    "\t\t\tfor(var i=0; i < count - 1; i++) {\n" +
    "\t\t\t\tthis.angleInRadians += dir * this.stepAngle;\n" +
    "\t\t\t\tthis.copy();\n" +
    "\t\t\t}\n" +
    "\t\t\tthis.angleInRadians = angle0 + targetAngle;\n" +
    "\t\t\tif(targetAngle >= Math.PI) {\n" +
    "\t\t\t\ttargetAngle -= Math.PI;\n" +
    "\t\t\t}\n" +
    "\t\t\tthis.copy();\n" +
    "\t\t};\n" +
    "\t\tthis.right = function(angleInDegrees) {\n" +
    "\t\t\tthis.left(-angleInDegrees);\n" +
    "\t\t};\n" +
    "\t\t// copy TBody object\n" +
    "\t\tthis.copy = function() {\n" +
    "\t\t\tturtles_path.push(new p.TBody());\n" +
    "\t\t\tvar target = turtles_path[turtles_path.length - 1];\n" +
    "\t\t\tfor (var prop in this) {\n" +
    "\t\t\t\ttarget[prop] = this[prop];\n" +
    "\t\t\t}\n" +
    "\t\t};\n" +
    "\t\t// drawing turtle in loop\n" +
    "\t\tthis.draw2 = function(pointer) {\n" +
    "\t\t\tvar target = turtles_path[pointer];\n" +
    "\t\t\t// draw path by Pen\n" +
    "\t\t\tif (target.penDown) {\n" +
    "\t\t\t\t//p.strokeWeight(target.lineWidth);\n" +
    "\t\t\t\t//p.stroke(target.penColor);\n" +
    "\t\t\t\ttPlane.strokeWeight(target.lineWidth);\n" +
    "\t\t\t\ttPlane.stroke(target.penColor);\n" +
    "\t\t\t\tvar nextPointer = pointer + 1;\n" +
    "\t\t\t\tif(nextPointer >= turtles_path.length) {\n" +
    "\t\t\t\t\tnextPointer = 0;\n" +
    "\t\t\t\t}\n" +
    "\t\t\t\t//p.line(target.x, target.y, turtles_path[nextPointer].x, turtles_path[nextPointer].y);\n" +
    "\t\t\t\ttPlane.line(target.x, target.y, turtles_path[nextPointer].x, turtles_path[nextPointer].y);\n" +
    "\t\t\t}\n" +
    "\t\t\t// draw turtle by sprite\n" +
    "\t\t\tturtleSprite.rotation = target.angleInRadians / Math.PI * (-180) + 180;\n" +
    "\t\t\tturtleSprite.position.x = target.x;\n" +
    "\t\t\tturtleSprite.position.y = target.y;\n" +
    "\t\t};\n" +
    "\t};\n" +
    "};\n" +
    "Pjs = new p5(s, \"p5Canvas\");\n";

let drawBlocks = [];
let loopBlocks = [];
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
    resultCode = resultCode.format(code_sub.match(/\d+/g).map(Number));
    return resultCode;
}

function runP5Code() {
    let codeP5 = new CodeP5();
    codeP5.runCode();
}