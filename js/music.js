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
  $( ".musicList" ).empty();
  name = $("#Title").val();


 var TracksURL = "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+name+"&api_key=5b739394f1d01a1b4d5a81b276fcecc0&format=json"
  $.ajax({
      url: TracksURL,
      method: "GET"
    }).then(function (response){
        for (var i = 0; i < 24; i++){
     var Tracks = response.results.trackmatches.track[i];
     var img = Tracks.image[2]['#text'];
      var trackURL = Tracks.url;
      var trackName = Tracks.name;
      var artists = Tracks.artist;

    $(".musicList").append("<div class = 'trackcover col-md-3'>" +
    "<h5>" +  artists + "</h5>"+
        "<img src = " + img + ">" +
          '<h5><a '+'id="' + trackName +'" href="' +  
          trackURL + '" target="_blank">' + 
          trackName + '</a></h5>' + "</div>");
      
        }
});
});
