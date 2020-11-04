function readBook(bookLength, pagesPerDay) {
    var bookLength = document.getElementById("bookLength").value;
    var pagesPerDay = document.getElementById("pagesPerDay").value;
    var result = Math.round(bookLength / pagesPerDay);

    alert(`it will take you ${result} day(s) to finish your book!`);
}
