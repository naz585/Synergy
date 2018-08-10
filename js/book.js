$( function() {
    var availableTags = [
      "Of Mice and Men",
      "The Outsiders",
      "Origin",
      "Crazy Rich Asians",
      "Don Quixote",
      "In Search of Lost Time",
      "Ulysses",
      "The Great Gatsby",
      "Moby Dick",
      "Hamlet",
      "War and Peace",
      "One Hundred Years of Solitude",
      "The Divine Comedy",
      "The Brothers Karamazov",
      "Madame Bovary",
      "The Adventures of Huckleberry",
      "Lolita",
      "The Iliad",
      "Crime and Punishment",
      "Alice's Adventures",
      "Wuthering Heights",
      "Pride and Prejudice"
    ];
    $( "#Title" ).autocomplete({
      source: availableTags
    });
  } );






 var name;
$("button").on("click", function () {
  event.preventDefault();
  $( ".bookList" ).empty();
  name = $("#Title").val();


 var googleBooks = "https://www.googleapis.com/books/v1/volumes?q=" + name;
  $.ajax({
      url: googleBooks,
      method: "GET"
    }).then(function (response){
      console.log(response)
      for (var i = 0; i < 10; i++){
        var volume = response.items[i].volumeInfo
    var img;
    
      if (volume.hasOwnProperty('imageLinks') === false) {
        img = "https://books.google.com/books/content?id=cicXAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      }
      else {
        img = response.items[i].volumeInfo.imageLinks.thumbnail;
      }
    
    
    img = img.replace(/^http:\/\//i, 'https://');
    $(".bookList").append("<div class = 'bookcover col-md-3'>" +
          "<img src = " + img + ">" +
          "<p>" + response.items[i].volumeInfo.title + "</p>" + "</div>");
      }
  }); 

});


//'https://www.googleapis.com/books/v1/volumes?q='
