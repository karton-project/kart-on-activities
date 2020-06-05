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
        code_type: 2,
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
        title: "müzik ekle",
        code: "addMusic();\n",
        input: "music",
        code_type: 2,
        no_in: 0
    },
    {
        title: "sürekli çal",
        code: "startLoop();\n",
        input: "music",
        code_type: 2,
        no_in: 0
    },
    {
        title: "nota:",
        code: "addNote('{0}', 200);\n",
        input: "music",
        code_type: 2,
        no_in: 1
    },
    {
        title: "ses: piyano",
        code: "addPiano();\n",
        input: "music",
        code_type: 2,
        no_in: 0
    },
    {
        title: "ses: gitar",
        code: "addGuitar();\n",
        input: "music",
        code_type: 2,
        no_in: 0
    },
    {
        title: "frekans: düşük",
        code: "changeFreq('bass');\n",
        input: "music",
        code_type: 2,
        no_in: 1
    },
    {
        title: "frekans: yüksek",
        code: "changeFreq('treble');\n",
        input: "music",
        code_type: 2,
        no_in: 1
    },
    {
        title: "fonksiyon tanımla: ",
        code: "let {0} = function(){\n",
        input: "cond",
        code_type: 1,
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
        title: "döngü",
        code: "for(let i = 0; i < {0}; i++){\n",
        input: "cond",
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
        code_type: 1,
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
]