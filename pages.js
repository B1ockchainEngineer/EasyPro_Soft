
function swapPages(mode) {


    if (mode == 1) {
        $("#first_page").css("display", "table-row");
        $("#second_page").css("display", "none");

    } else if (mode == 2) {
        $("#first_page").css("display", "none");
        $("#second_page").css("display", "table-row");
    }

}

