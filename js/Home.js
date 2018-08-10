var nowPlaying = [];
//movies
var movieURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=1d4fcbf93a1ed30c52940c611efeca36&language=en-US&page=1";
$.ajax({
  url: movieURL,
  method: "GET"
}).then(function (response) {
  for (var i = 0; i < 12; i++) {
    console.log(response.results[i]);
    var movies = response.results;
    var moviePoster = $("<img>");
    moviePoster.attr("id", movies[i].title);
    moviePoster.attr("class", "image-movie");
    moviePoster.attr("src", "https://image.tmdb.org/t/p/w185" + movies[i].poster_path);
    $(".r1").append('<div class = "col-md-3"'+'id="'+movies[i].title+'">' +
      "<img src = https://image.tmdb.org/t/p/w185" + movies[i].poster_path + ">" +
      '<h5><a '+'id="'+movies[i].id+'" href="' + "#" + '" target="_blank">' + movies[i].title + '</a></h5>' + "</div>");
      trailer(movies[i].id)
  }


});
  
  function trailer(movieId){
    var trailerURL = "https:api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=1d4fcbf93a1ed30c52940c611efeca36&language=en-US";
    $.ajax({
  url: trailerURL,
  method: "GET"
}).then(function (response) {
  var YTkey = response.results[0].key
  $('#'+ movieId ).attr('href', "https://www.youtube.com/watch?v="+YTkey);

      });
  }



var bookURL = "https://api.nytimes.com/svc/books/v3/lists.json";
bookURL += '?' + $.param({
  'api-key': "1cfb28e059e64328949be6d11c53e1a0",
  'list': "Combined Print and E-Book Fiction"
});
$.ajax({
  url: bookURL,
  method: "GET"
}).then(function (response) {
  for (var i = 0; i <12 ; i++){
    book = response.results[i]
    console.log(book);
    var noIsbn;
    if (!Array.isArray(book.isbns)|| !book.isbns.length) {
      noIsbn = true;
      }
      else if ((Array.isArray(book.isbns)|| book.isbns.length)) {
        noIsbn = false;
      };

      var isbn;
      if (noIsbn === true) {
        isbn = 0;
      }
      else {
      isbn = book.isbns[1].isbn10;
      }
    
   
    var bookInfo = book.book_details[0];
    var lastWeekRank = book.rank_last_week;
    var weeksOnList = book.weeks_on_list;
    console.log(isbn)
    console.log(bookInfo)
    var listing = 
'<div id="' + book.rank + '" class="entry">' + 
'<p>' + 
  '<img src="" class="book-cover" id="cover-' + book.rank + '">' + 
'</p>' + 
'<h2><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h2>' +
'<h4>By ' + bookInfo.author + '</h4>' +
'<h4 class="publisher">' + bookInfo.publisher + '</h4>' +
'<p>' + bookInfo.description + '</p>' + 
'<div class="stats">' +
  '<hr>' + 
  '<p>Last Week: ' + lastWeekRank + '</p>' + 
  '<p>Weeks on list: ' + weeksOnList + '</p>' +
'</div>' +
'</div>';

$('.Books').append(listing);
$('#' + book.rank).attr('nyt-rank', book.rank);
  updateCover(book.rank, isbn);
  }
 
});

function updateCover(id, isbn) {
var googleBooks = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
$.ajax({
  url: googleBooks,
  method: "GET"
}).then(function (response){
  console.log(response)
var img = response.items[0].volumeInfo.imageLinks.thumbnail;
img = img.replace(/^http:\/\//i, 'https://');
$('#cover-' + id).attr('src', img);
})  

}

