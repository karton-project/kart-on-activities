const colorHTML = "# <span data-var='h' class='TKAdjustableNumber' data-min='0' data-max='360'></span> " +
    "<input type='color' id='c' hidden>" +
    "<div id='color'></div>"

const locHTML = "# <span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'></span> " +
    "# <span data-var='y' class='TKAdjustableNumber' data-min='0' data-max='500'></span> " +
    "<span id='shape'></span>"

const sizeHTML = "# <span data-var='w' class='TKAdjustableNumber' data-min='0' data-max='500'></span> " +
    "# <span data-var='h' class='TKAdjustableNumber' data-min='0' data-max='500'></span> " +
    "<span id='shape'></span>"

const codeList = [{
    title: "doldur",
    input: colorHTML,
    code: "fill({0});\n",
    input_type: "color",
    code_type: 3,
    no_in: 1
},
    {
        title: "arkaplan",
        input: colorHTML,
        code: "background({0});\n",
        input_type: "color",
        code_type: 3,
        no_in: 1
    },
    {
        title: "kenar",
        input: colorHTML,
        code: "stroke({0});\n",
        input_type: "color",
        code_type: 3,
        no_in: 1
    },
    {
        title: "boyut",
        input: sizeHTML,
        code: "ellipse({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 3
    },
    {
        title: "konum",
        input: locHTML,
        code: "ellipse({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 3
    },
    {
        title: "elips",
        input: "",
        code: "ellipse({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 3
    },
    {
        title: "dikdörtgen",
        input: "",
        code: "rect({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "üçgen",
        input: "",
        code: "simpleTriangle({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "çizgi",
        input: "sx: <span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'></span> sy: <span data-var='y' class='TKAdjustableNumber' data-min='0' data-max='500'></span> ex: <span data-var='w' class='TKAdjustableNumber' data-min='0' data-max='500'></span> ey: <span data-var='h' class='TKAdjustableNumber' data-min='0' data-max='500'></span> <span id='shape'></span>",
        code: "line({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 4
    },
    {
        title: "yazı",
        input: "t: <span data-var='t' class='TKStringField' contenteditable='true'></span> x: <span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'></span> y: <span data-var='y' class='TKAdjustableNumber' data-min='0' data-max='500'></span> s: <span data-var='s' class='TKAdjustableNumber' data-min='0' data-max='50'></span> <span id='shape'></span>",
        code: "textSize({0}); \n text('{1}', {2}, {3});\n",
        input_type: "text",
        code_type: 3,
        no_in: 3
    },
    {
        title: "hayalet animasyonu",
        input: "x: <span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'></span> y: <span data-var='y' class='TKAdjustableNumber' data-min='0' data-max='500'></span> <span id='shape'></span>",
        code: "animation(ghost, {0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 2
    },
    {
        title: "fonksiyon tanımla: ",
        input: "<span data-var='t' class='TKStringField' contenteditable='true'></span>",
        code: "{0} = function(){\n",
        input_type: "cond",
        code_type: 2,
        no_in: 1
    },
    {
        title: "bitir",
        input: "",
        code: "}\n",
        input_type: "end",
        code_type: 3,
        no_in: 0
    },
    {
        title: "çağır:",
        input: "<span data-var='t' class='TKStringField' contenteditable='true'></span>",
        code: "{0}();\n",
        input_type: "call",
        code_type: 3,
        no_in: 1
    },
    {
        title: "değişken tanımla",
        input: "n: <span data-var='n' class='TKStringField' contenteditable='true'></span> v: <span data-var='v' class='TKStringField' contenteditable='true'></span> <span id='variable'></span>",
        code: "let {0} = {1};\n",
        input_type: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "değerini artır",
        input: "n: <span data-var='n' class='TKStringField' contenteditable='true'></span> v: <span data-var='v' class='TKStringField' contenteditable='true'></span> <span id='variable'></span>",
        code: "{0} += {1};\n",
        input_type: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "değerini düşür",
        input: "n: <span data-var='n' class='TKStringField' contenteditable='true'></span> v: <span data-var='v' class='TKStringField' contenteditable='true'></span> <span id='variable'></span>",
        code: "{0} -= {1};\n",
        input_type: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "değer ata",
        input: "n: <span data-var='n' class='TKStringField' contenteditable='true'></span> v: <span data-var='v' class='TKStringField' contenteditable='true'></span> <span id='variable'></span>",
        code: "{0} = {1};\n",
        input_type: "variable",
        code_type: 3,
        no_in: 2
    },
    {
        title: "eğer:",
        input: "<span data-var='t' class='TKStringField' contenteditable='true'></span>",
        code: "if({0}){\n",
        input_type: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "değilse",
        input: "",
        code: "}else{\n",
        input_type: "cond",
        code_type: 3,
        no_in: 0
    },
    {
        title: "tekrarla:",
        input: "<span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='100'></span>",
        code: "for(let i = 0; i < {0}; i++){\n",
        input_type: "cond",
        code_type: 3,
        no_in: 1
    },
    {
        title: "sürekli tekrarı aç/kapat",
        code: "",
        input: "loop",
        code_type: 0,
        no_in: 0
    },
    {
        title: "rastgele sayı seç",
        input: "n: <span data-var='n' class='TKStringField' contenteditable='true'></span> v: <span data-var='v1' class='TKAdjustableNumber' data-min='0' data-max='100'></span> - <span data-var='v2' class='TKAdjustableNumber' data-min='0' data-max='100'></span>",
        code: "let {0} = random({1});\n",
        input_type: "variable",
        code_type: 1,
        no_in: 2
    },
    {
        title: "cihazı sallayınca",
        input: "",
        code: "deviceShaken = function() {\n",
        input_type: "cond",
        code_type: 2,
        no_in: 0
    },
    {
        title: "ötele",
        input: "x: <span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'></span> y: <span data-var='y' class='TKAdjustableNumber' data-min='0' data-max='500'></span> <span id='shape'></span>",
        code: "translate({0});\n",
        input_type: "shape",
        code_type: 3,
        no_in: 1
    },
    {
        title: "döndür:",
        input: "r: <span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'>",
        code: "rotate({0});\n",
        input_type: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "bekle:",
        input: "<span data-var='x' class='TKAdjustableNumber' data-min='0' data-max='500'>",
        code: "await sleep({0});\n",
        input_type: "numeric",
        code_type: 3,
        no_in: 1
    },
    {
        title: "",
        input: "",
        code: "",
        input_type: "",
        code_type: 2,
        no_in: 1
    }
]