
function swapPages(pageNumber) {

    var allRows = document.querySelectorAll('tr[id^="page_"]');
    allRows.forEach(function (row) {
        row.style.display = 'none';
    });

    // Show rows of the selected page
    var selectedPageRows = document.querySelectorAll('#page_' + pageNumber);
    selectedPageRows.forEach(function (row) {
        row.style.display = 'table-row';
    });

    // Update active class for pagination
    var paginationItems = document.querySelectorAll('.page-item');
    paginationItems.forEach(function (item) {
        item.classList.remove('active');
    });

    var activePaginationItem = document.querySelector('.page-item-' + pageNumber);
    activePaginationItem.classList.add('active');
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mySearch");
    li = li.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

