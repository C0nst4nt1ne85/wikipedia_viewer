//Get random wiki
function random(){
    window.open("https://en.wikipedia.org/wiki/Special:Random"); 
}

//search and display content and nav
function wikipedia(search, place){
    //retreive data
    $.ajax({
        url: `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=${search}&gsrlimit=50&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&formatversion=2&origin=*`
    }).done(function (data) {
        var html = "";
        //display nav
        
        if (place == 0) {
            $("#prevBut").css("display", "none");
            $("#moreBut").css("display", "inline-block");
        } else if (place == 40) {
            $("#moreBut").css("display", "none");
        } else {
            $("#prevBut").css("display", "inline-block");
            $("#moreBut").css("display", "inline-block");
        }
        //display data
        for (var i = place; i - place < 10; i++) {
            var title = data.query.pages[i].title;
            var extract = data.query.pages[i].extract;
            html += `<a href="https://en.wikipedia.org/wiki/${title}"><h4>${title}</h4>
        <p>${extract}</p></a>`;
        }
        $("#main").html(html);
    })
}



$(document).ready(function () {
var place = 0;
var searchTerm ="";

    $("#search").keydown(function(input) {
        if (input.keyCode == 13){
            searchTerm = $("#search").val();
            input.preventDefault();
            place = 0;
            if (searchTerm == "") {
                random();
            } else {
                wikipedia(searchTerm, place);
            }
            searchTerm = searchTerm
        }

    })

    $("#random").click(function(){
        random();
    })

    $("#moreBut").click(function () {
        place += 10;
        wikipedia(searchTerm, place);
    })

    $("#prevBut").click(function () {
        place -= 10;
        wikipedia(searchTerm, place);
    })
});

