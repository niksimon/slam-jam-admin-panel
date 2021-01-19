$(document).ready(function () {
    $(".modal-close, #modal-confirm-no").on("click", function () {
        $(".modal-box").animate({
            opacity: 0
        }, 150, function () {
            $(".modal-box").css("display", "none");
        });
    });

    $(".modal-box").on("click", function (e) {
        if ($(e.target).attr("class") !== "modal-box modal-update-box") return;

        $(".modal-box").animate({
            opacity: 0
        }, 150, function () {
            $(".modal-box").css("display", "none");
        });
    });

    $("#hide-form-errors").on("click", function () {
        $(this).parent().hide();
    });

    $(".menu-open span").on("click", function () {
        $(this).toggleClass("click");
        if ($(".menu").css("opacity") == "1") {
            $(".menu-container").animate({"left": -237}, 300, function () {
                $(".menu").css("opacity", "0");
            });
            $(".menu-open").css("width", "50px");
            $(".menu-open span").css("left", "10px");
            $(".main-content").animate({"margin-left": "50px"}, 450);
        }
        else {
            $(".menu").css("opacity", "1");
            $(".menu-container").animate({"left": 0}, 400);
            $(".menu-open").css("width", "36px");
            $(".menu-open span").css("left", "7px");
            $(".main-content").animate({"margin-left": "283px"}, 400);
        }
    });

    // delete
    

    // delete selected
    

    // select all checkboxes
    $("#content").on("change", ".main-table #chbSelectAll", function () {
        $("input.chb-select-row").prop("checked", this.checked);
    });

    
});