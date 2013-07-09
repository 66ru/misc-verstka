$(document).ready(function() {

    var popup_secret = $("#select_secret_div");
    var popupShadow_secret = $("#select_secret_div_shadow");

    $(document).delegate("#select_secret_btn", "click", function(e) {
        var popupWidth = $("#select_secret_div").width();
        var popupHeight = $("#select_secret_div").height();
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        var topChords_secret =  scrollTop + (screenHeight/2-(popupHeight*2)) - 300;
        var leftChords_secret =  (screenWidth/2-(popupHeight*2)) - 300;
        if (topChords_secret < 0) topChords_secret = 0;
        if (leftChords_secret < 0) leftChords_secret = 0;
        popup_secret.css("top",  topChords_secret + "px");
        popup_secret.css("left", leftChords_secret + "px");

        popup_secret.show();
        popupShadow_secret.show();
        return false;
    });

    $(document).delegate("#select_secret_div__close", "click", function() {
        popup_secret.hide();
        popupShadow_secret.hide();
        return false;
    });

    $(document).delegate("#btn_secret_choose", "click", function() {
        popup_secret.hide();
        popupShadow_secret.hide();
        return false;
    });

    $(document).delegate("#select_secret_div__content_table label", "click", function() {
        var secret_id = $(this).children("input").val();
        var input_secret = $('input#input_secret').val();

        if ($(this).closest("li").hasClass("cur")) {
            $(this).closest("li").removeClass("cur");
            if (!(input_secret == "")) {
                var arr_secret = input_secret.split(',');
                if (arr_secret.indexOf(secret_id.toString()) != -1) {
                    var index = arr_secret.indexOf(secret_id.toString());
                    arr_secret.splice(index, 1);
                    $('input#input_secret').attr("value", arr_secret.toString());
                }
                if (arr_secret.length == 0) {
                    $('input#input_secret').attr('disabled', 'disabled');
                }
            }
        } else {
            $(this).closest("li").addClass("cur");
            if (input_secret == "") {
                $('input#input_secret').attr("value", secret_id.toString());
            } else {
                var arr_secret = input_secret.split(',');
                if (!(secret_id.toString() in arr_secret)) {
                    arr_secret.push(secret_id);
                    $('input#input_secret').attr("value", arr_secret.toString());
                }
            }
            $('input#input_secret').removeAttr('disabled')
        }
    });


});

$(window).resize(function() {
    topChords_secret = ($(window).height() - popup.height())+$(window).scrollTop() -700;
    if (topChords_secret < 0) topChords_secret = 0;
    popup_secret.css("top",  topChords_secret + "px");
});