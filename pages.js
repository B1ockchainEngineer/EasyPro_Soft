
// function swapPages(pageNumber) {

//     var allRows = document.querySelectorAll('tr[id^="page_"]');
//     allRows.forEach(function (row) {
//         row.style.display = 'none';
//     });

//     // Show rows of the selected page
//     var selectedPageRows = document.querySelectorAll('#page_' + pageNumber);
//     selectedPageRows.forEach(function (row) {
//         row.style.display = 'table-row';
//     });

//     // Update active class for pagination
//     var paginationItems = document.querySelectorAll('.page-item');
//     paginationItems.forEach(function (item) {
//         item.classList.remove('active');
//     });

//     var activePaginationItem = document.querySelector('.page-item-' + pageNumber);
//     activePaginationItem.classList.add('active');
// }

function search(mode) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        a = tr[i].getElementsByTagName("a")[0];
        if (a) {
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
    
}

function category() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("categoryOption");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        div = tr[i].getElementsByTagName("div")[0];
        if (div) {
        txtValue = div.textContent || div.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}

