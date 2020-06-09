const codeList = [{
        title: "doldur r:",
        code: "fill({0});\n",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "arkaplan r:",
        code: "background({0});\n",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "kenar r:",
        code: "stroke({0});\n",
        input: "color",
        code_type: 3,
        no_in: 3
    },
    {
        title: "elips x:",
        code: "ellipse({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 3
    },
    {
        title: "dikdörtgen x:",
        code: "rect({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "üçgen x:",
        code: "simpleTriangle({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "çizgi sx:",
        code: "line({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "yazı:",
        code: "textSize({0}); \n text('{1}', {2}, {3});\n",
        input: "text",
        code_type: 3,
        no_in: 3
    },
    {
        title: "hayalet animasyonu x:",
        code: "animation(ghost, {0});\n",
        input: "shape",
        code_type: 3,
        no_in: 2
    },
    {
        title: "fonksiyon tanımla: ",
        code: "let {0} = function(){\n",
        input: "cond",
        code_type: 2,
        no_in: 1
    },
    {
        title: "bitir",
        code: "}\n",
        input: "end",
        code_type: 3,
        no_in: 0
    },
    {
        title: "çağır:",
        code: "{0}();\n",
        input: "call",
        code_type: 3,
        no_in: 1
    },
    {
        title: "değişken tanımla n:",
        code: "let {0} = {1};\n",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "değerini artır",
        code: "{0} += {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "değerini düşür",
        code: "{0} -= {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "değer ata",
        code: "{0} = {1};\n",
        input: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "eğer : ",
        code: "if({0}){\n",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "değilse",
        code: "}else{\n",
        input: "cond",
        code_type: 3,
        no_in: 0
    },
    {
        title: "tekrarla: ",
        code: "for(let i = 0; i < {0}; i++){\n",
        input: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "sürekli tekrarı aç",
        code: "loop()",
        input: "end",
        code_type: 3,
        no_in: 1
    },
    {
        title: "sürekli tekrarı kapat",
        code: "noLoop()",
        input: "end",
        code_type: 3,
        no_in: 1
    },
    {
        title: "rastgele sayı:",
        code: "let {0} = random({1});\n",
        input: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "cihazı sallayınca",
        code: "function deviceShaken() {\n",
        input: "cond",
        code_type: 2,
        no_in: 0
    },
    {
        title: "ötele x:",
        code: "translate({0});\n",
        input: "shape",
        code_type: 3,
        no_in: 1
    },
    {
        title: "döndür:",
        code: "rotate({0});\n",
        input: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "bekle:",
        code: "await sleep({0});\n",
        input: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "",
        code: "",
        input: "numeric",
        code_type: 2,
        no_in: 1
    }
]