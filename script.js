$(document).ready(function () {

    $("#search").keydown(function(input) {
        if (input.keyCode == 13){
            var searchTerm = $("#search").val();
            input.preventDefault();
            if (searchTerm == "") {
                window.open("https://en.wikipedia.org/wiki/Special:Random")
            } else {
                console.log(searchTerm);
            }
        }
    });

});