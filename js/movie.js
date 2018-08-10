$( function() {
    var availableTags = [
        
    ];
    $( "#Title" ).autocomplete({
      source: availableTags
    });
  } );






 var name;
$("button").on("click", function () {
  event.preventDefault();
  $( ".movieList" ).empty();
  name = $("#Title").val();


 var MovieURL = "https://api.themoviedb.org/3/search/movie?api_key=1d4fcbf93a1ed30c52940c611efeca36&language=en-US&query="+name+"&page=1&include_adult=false"
  $.ajax({
      url: MovieURL,
      method: "GET"
    }).then(function (response){
        console.log(response);
        for (var i = 0; i < 20; i++){
      var movies = response.results[i];
      $(".movieList").append('<div class = "col-md-3"'+'id="'+movies.title+'">' +
      "<img src = https://image.tmdb.org/t/p/w185" + movies.poster_path + ">" +
      '<h5><a '+'id="'+movies.id+'" href="' + "#" + '" target="_blank">' + movies.title + '</a></h5>' + "</div>");
      trailer(movies.id)
    
        }
});
});





function trailer(movieId){
    var trailerURL = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=1d4fcbf93a1ed30c52940c611efeca36&language=en-US";
    $.ajax({
  url: trailerURL,
  method: "GET"
}).then(function (response) {
console.log(response);

var YTkey;

if (!Array.isArray(response.results)|| !response.results.length) {
    $('#'+ movieId ).attr('href', "https://www.themoviedb.org");

  }
  else {
    var YTkey = response.results[0].key
    $('#'+ movieId ).attr('href', "https://www.youtube.com/watch?v="+YTkey);
  }

  
 

      });
  }
