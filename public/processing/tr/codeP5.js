class CodeP5 {
    constructor() {
        this.p5_obj = {};
        this.p5code =
            "sleep = function(s) {\n" +
            "  return new Promise(resolve => setTimeout(resolve, s*1000));\n" +
            "}\n" +
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
            "setup = function() {\n" +
            " var myCanvas = createCanvas(windowWidth,windowHeight);\n" +
            " myCanvas.parent('myContainer');\n" +
            " gridLines();\n" +
            " fill(125);\n" +
            "};\n" +
            "draw = async function() {\n" +
            " {1}\n" +
            " {2}\n" +
            "};";
    }

    runCode() {
        try {
            let code = this.p5code.format(functionBlocks.join(' '), variableBlocks.join(' '), drawBlocks.join(' '));
            let s = new Function("p", code);
            if (debug) console.log(code);
            this.p5_obj = new p5(s);
            if (soundOn) {
                playSong();
            }
        } catch (e) {
            alert(e);
        }
    }

}