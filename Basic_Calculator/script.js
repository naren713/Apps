$(document).ready(function() {
    var x = 0,
        y = 0,
        z = "";
    $("#cal").hide().slideDown(2000);
    $("#inputbox").hide().slideDown(2000);
    $("#one").click(function() {
        var digit = $(".wbox").val();
        digit += "1";
        $(".wbox").val(digit);
    });
    $("#two").click(function() {
        var digit = $(".wbox").val();
        digit += "2";
        $(".wbox").val(digit);
    });
    $("#three").click(function() {
        var digit = $(".wbox").val();
        digit += "3";
        $(".wbox").val(digit);
    });
    $("#four").click(function() {
        var digit = $(".wbox").val();
        digit += "4";
        $(".wbox").val(digit);
    });
    $("#five").click(function() {
        var digit = $(".wbox").val();
        digit += "5";
        $(".wbox").val(digit);
    });
    $("#six").click(function() {
        var digit = $(".wbox").val();
        digit += "6";
        $(".wbox").val(digit);
    });
    $("#seven").click(function() {
        var digit = $(".wbox").val();
        digit += "7";
        $(".wbox").val(digit);
    });
    $("#eight").click(function() {
        var digit = $(".wbox").val();
        digit += "8";
        $(".wbox").val(digit);
    });
    $("#nine").click(function() {
        var digit = $(".wbox").val();
        digit += "9";
        $(".wbox").val(digit);
    });
    $("#zero").click(function() {
        var digit = $(".wbox").val();
        digit += "0";
        $(".wbox").val(digit);
    });
    $("#clear").click(function() {
        $(".wbox").val("");
    });
    $("#add").click(function() {
        var digit = $(".wbox").val();
        digit = parseInt(digit);
        x = digit;
        z = "+";
        $(".wbox").val("");
    });
    $("#mul").click(function() {
        var digit = $(".wbox").val();
        digit = parseInt(digit);
        x = digit;
        z = "*";
        $(".wbox").val("");
    });
    $("#divide").click(function() {
        var digit = $(".wbox").val();
        digit = parseInt(digit);
        x = digit;
        z = "/";
        $(".wbox").val("");
    });
    $("#sub").click(function() {
        var digit = $(".wbox").val();
        digit = parseInt(digit);
        x = digit;
        z = "-";
        $(".wbox").val("");
    });
    $("#equals").click(function() {
        var secNo = $(".wbox").val();
        secNo = parseInt(secNo);
        y = secNo;
        var result = 0;
        if (z == "+") {
            result = x + y;
        } else if (z == "-") {
            result = x - y;
        } else if (z == "*") {
            result = x * y;
        } else if (z == "/") {
            result = x / y;
        }
        $(".wbox").val(result);
    });
});