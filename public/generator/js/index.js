let res;
var tangle;

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
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

$(document).ready(function () {
    $("#codeNamePicker").fuzzyComplete(codeList, options);
    $("#codeNamePicker").on('keyup blur', function (result) {
        $("#input-container").html(codeList.find(o => o.title === $(this).parent().find("select").val()).input);
        tangle = new Tangle(document, {
            initialize: function () {
                this.r = 255;
                this.g = 100;
                this.b = 0;
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
                this.color = rgbToHex(this.r, this.g, this.b);
                if (document.getElementById("color") !== null)
                    document.getElementById("color").style.background = this.color;
            }
        });
    });
});