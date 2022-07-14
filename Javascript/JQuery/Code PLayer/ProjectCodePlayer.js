let displayNum = 2;

const adjustDisplay = function () {
    if (displayNum === 2) {
        $(".display").css("width", "49.93%");
    } else if (displayNum === 3) {
        $(".display").css("width", "33.25%");
    } else if (displayNum === 1) {
        $(".display").css("width", "100%");
    } else {
        $(".display").css("width", "24.93%");
    };
};

$("#html-btn").click(function () {

    if ($("#html-display").css("display") === "block") {
        $("#html-display").css("display", "none");
        displayNum--;
    } else {
        $("#html-display").css("display", "block");
        displayNum++;
    };

    adjustDisplay();
});

$("#css-btn").click(function () {

    if ($("#css-display").css("display") === "block") {
        $("#css-display").css("display", "none");
        displayNum--;
    } else {
        $("#css-display").css("display", "block");
        displayNum++;
    };

    adjustDisplay();
});

$("#java-btn").click(function () {

    if ($("#java-display").css("display") === "block") {
        $("#java-display").css("display", "none");
        displayNum--;
    } else {
        $("#java-display").css("display", "block");
        displayNum++;
    };

    adjustDisplay();
});

$("#output-btn").click(function () {

    if ($("#output-display").css("display") === "block") {
        $("#output-display").css("display", "none");
        displayNum--;
    } else {
        $("#output-display").css("display", "block");
        displayNum++;
    };

    adjustDisplay();
});

$("#html-text").change(function () {
    const text = $("#html-text").val();
    $("#render").html(text);
});

$("#css-text").change(function () {
    const text = $("#css-text").val();
    $("#style").html(text);
});

$("#java-text").change(function () {
    const text = $("#java-text").val();
    $("#java").html(text);
});

