$(document).ready(function() {

    //api key for movies
    
    
    var apiKey = "5e9b8219d17ae51908a78c4fc6a63166";
    $("#on-start").on("click", function(event) {
        getPopular();
        return false;
    });
    
    var popularMovies = [];
    
    var getPoster = "https://image.tmdb.org/t/p/w500"
    
    
    
    
    function displayInfo(){
        
    }
    
    
    
    
    
    function getPopular() {
    
        
         
        var queryURLPopular = "https://api.themoviedb.org/3/movie/popular?api_key=5e9b8219d17ae51908a78c4fc6a63166&language=en-US&page=1";
        
        
        $.ajax({
        url: queryURLPopular,
        method: "GET"
        })
        .then(function(response) {
            var results = response.data;
         
            console.log(response);
            
            
            var movies = response.results;
            for (var i = 0; i < movies.length; i+=1){
                var movieDiv = $("<div class='item'>")
    
    
                console.log(movies);
    
                var moviesTitles = movies[i].title;
                console.log(moviesTitles)
    
                var moviePoster = $("<img>");
                moviePoster.attr("class", "image-movie");
                moviePoster.attr("src", "https://image.tmdb.org/t/p/w500" + movies[i].poster_path);
                
                var t = $("<p>").text(moviesTitles);
                
    
                movieDiv.prepend(t);
                movieDiv.prepend(moviePoster);
    
                $("#movie-goes-here").append(movieDiv); 
    
    
    
    
            
            }
    
    
    
    
       
           });
       };
    
    });
    