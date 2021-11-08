let res;
var tangle;

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

String.prototype.format = function () {
    var args = [].slice.call(arguments);
    return this.replace(/({\d+})/g, function (a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
    });
};

let fuseOptions = {keys: ["title"]};

let displayFunction = function (result) {
    return "<b>" + result['title'] + "</b> - " + result['input_type'];
};

let options = {
    display: displayFunction,
    displayValue: "title",
    key: "title",
    fuseOptions: fuseOptions
};

function save(){

}

$(document).ready(function () {
    $("#codeNamePicker").fuzzyComplete(codeList, options);
    $("#codeNamePicker").on('keyup blur', function (result) {
        $("#input-container").html(codeList.find(o => o.title === $(this).parent().find("select").val()).input);
        tangle = new Tangle(document, {
            initialize: function () {
                this.h = 255;
                this.x = 50;
                this.y = 50;
                this.w = 100;
                this.h = 100;
                this.t = "Hello";
                this.s = 24;
                this.n = "name";
                this.v = 30;
                this.v1 = 5;
                this.v2 = 35;
            },
            update: function () {
                let colorCode = hslToHex(this.h, 100, 50);
                if (document.getElementById("color") !== null){
                    document.getElementById("color").style.background = colorCode;
                    document.getElementById("color").addEventListener("click", function() {
                        document.getElementById("c").focus();
                        document.getElementById("c").value = colorCode;
                        document.getElementById("c").click();
                    });
                }
            }
        });
    });
});