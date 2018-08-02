    //movies

    var queryURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=1d4fcbf93a1ed30c52940c611efeca36&language=en-US&page=1";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      for (var i = 0; i < 5; i++) {
        console.log(response.results[i]);
        $(".movies").append("<img " + "src =" + "http://image.tmdb.org/t/p/w185" + response.results[i].poster_path + " class=rounded>");


      }
      console.log(response.results[1].poster_path);

      //src= "http://image.tmdb.org/t/p/w185"'+ response.results[1].poster_path+'
    });

    
    
    //books
    var url = "https://api.nytimes.com/svc/books/v3/lists.json";
    url += '?' + $.param({
      'api-key': "1cfb28e059e64328949be6d11c53e1a0",
      'list': "Combined Print and E-Book Fiction"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (response) {
      for (var i = 0; i < 5; i++) {
        console.log(response.results[i].isbns["0"].isbn10);
        $(".Books").append("<p>" + response.results[i].book_details["0"].title)
      }
    }).fail(function (err) {
      throw err;
    });

    
    
    //book image
    var isbn = $('.book').data('isbn');

    $.ajax({
      dataType: 'json',
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
      success: handleResponse
    });

    function handleResponse(response) {
      $.each(response.items, function (i, item) {

        var title = item.volumeInfo.title,
          author = item.volumeInfo.authors[0],
          thumb = item.volumeInfo.imageLinks.thumbnail;

        $('.title').text(title);
        $('.author').text(author);
        $('.thumbnail').attr('src', thumb);
      });
    }



    //Dw5dokHcFkhgPfx9zCFQ
    //1cfb28e059e64328949be6d11c53e1a0 ny times api key

