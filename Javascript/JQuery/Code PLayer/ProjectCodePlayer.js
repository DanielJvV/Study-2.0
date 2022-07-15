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

const updateOutput = function () {
    $("#render").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-text").val() + "</style></head><body>" + $("#html-text").val() + "</body></html>");
    document.getElementById("render").conentWindow.eval($("#java-text").val());
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

updateOutput();

$("textarea").on("change keyup paste", function () {
    updateOutput();

});




