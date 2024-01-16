
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

