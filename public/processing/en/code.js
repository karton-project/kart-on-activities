const codeList = [{
        title: "fill r:",
        code: "fill({0});",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "background r:",
        code: "background({0});",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "stroke r:",
        code: "stroke({0});",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "ellipse x:",
        code: "ellipse({0});",
        input: "shape",
        code_type: 3,
        no_in: 3
    },
    {
        title: "rect x:",
        code: "rect({0});",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "triangle x:",
        code: "simpleTriangle({0});",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "line sx:",
        code: "line({0});",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "text:",
        code: "textSize({0}); \n text('{1}', {2}, {3});",
        input: "text",
        code_type: 3,
        no_in: 3
    },
    {
        title: "ghost animation x:",
        code: "animation(ghost, {0});",
        input: "shape",
        code_type: 3,
        no_in: 2
    },
    {
        title: "define function: ",
        code: "let {0} = function(){",
        input: "cond",
        code_type: 2,
        no_in: 1
    },
    {
        title: "end",
        code: "};",
        input: "end",
        code_type: 3,
        no_in: 0
    },
    {
        title: "call:",
        code: "{0}();",
        input: "call",
        code_type: 3,
        no_in: 1
    },
    {
        title: "define variable n:",
        code: "let {0} = {1};",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "increase value n:",
        code: "{0} += {1};",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "decrease value n:",
        code: "{0} -= {1};",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "change value n:",
        code: "{0} = {1};",
        input: "variable",
        code_type: 3,
        no_in: 2
    },

    {
        title: "if: ",
        code: "if({0}){",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "else",
        code: "}else{",
        input: "cond",
        code_type: 3,
        no_in: 0
    },
    {
        title: "loop:",
        code: "for(let i = 0; i < {0}; i++){",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "random number:",
        code: "random({0})",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "when shake the device",
        code: "function deviceShaken() {",
        input: "cond",
        code_type: 2,
        no_in: 0
    },
    {
        title: "move x:",
        code: "translate({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 1
    },
    {
        title: "rotate:",
        code: "rotate({0});\n",
        input: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "wait:",
        code: "frameRate({0});\n",
        input: "numeric",
        code_type: 2,
        no_in: 1
    },
    {
        title: "",
        code: "",
        input: "numeric",
        code_type: 2,
        no_in: 1
    }
];