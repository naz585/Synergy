let buttonClick = () => {
    //launch onclick funtionality
    $("#addBook").on("click", function() {
        //This is my API key
        let APIKey = "3UW4SavsDyOzAIqS5uwA";

        //This is the value of the clicked
        let title = $("#title-input").val();
        let author = $("#author-input").val();

        console.log(title);
        console.log(author);

        // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
        var queryURL = "https://crossorigin.me/https://www.goodreads.com/book/title.xml?author=" + author + "&key="+ APIKey +"&title=" + title;
        // var queryURL = "https://crossorigin.me/https://www.goodreads.com/book/title.xml?author=Arthur+Conan+Doyle&key=3UW4SavsDyOzAIqS5uwA&title=Hound+of+the+Baskervilles";
    
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            console.log("hi");
        });
    });
};

// A $( document ).ready() block.
$( document ).ready(function() {
    buttonClick();
    
});




// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
// });