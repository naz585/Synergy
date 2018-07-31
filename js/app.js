
const goArtists = () => {
  let topArtists = document.getElementById("top-artists");
  $(document).ready(function() {
      $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=test&api_key=34348eae6672b6e0bff528a9068359fa&limit=10&format=json&callback=?", function(json) {
          var html = '';
          $.each(json.topartists.artist, function(i, item) {
              html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>" + "<img>" + item.artwork + "</img>";
          });
          $('#artists').append(html);
      });
  });
}

const goSongs = () => {
  let topSongs = document.getElementById("top-songs");
    $(document).ready(function() {
      $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&user=test&api_key=34348eae6672b6e0bff528a9068359fa&limit=10&format=json&callback=?", function(json) {
          var html = '';
          $.each(json.toptracks.track, function(i, item) {
              html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>" + "<img>" + item.artwork + "</img>";
          });
          $('#songs').append(html);
      });
  });
}

const goAlbums = () => {
  let topAlbums = document.getElementById("top-albums");
    $(document).ready(function() {
      $.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&user=test&api_key=34348eae6672b6e0bff528a9068359fa&limit=10&format=json&callback=?", function(json) {
          var html = '';
          $.each(json.topalbums.album, function(i, item) {
              html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " + item.playcount + "</a></p>" + "<img>" + item.artwork + "</img>";
          });
          $('#albums').append(html);
      });
  });
}

const goSearch = () => {
  let search = document.getElementById("searchForm")
  $(document).ready(function() {

  event.preventDefault();

  var $form = $(this),
      term = $form.find('input[name="s"]').val(),
      url = $form.attr('action');

  var fmurl = 'https://ws.audioscrobbler.com/2.0/?method=track.search&track=' + term + '&api_key=34348eae6672b6e0bff528a9068359fa&format=json&callback=?';

    $.getJSON(fmurl, function(data) {
      var html = '';
      $.each(data.results.trackmatches.track, function(i, item) {
          html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>" + "<img>" + item.artwork + "</img>";
      });
      $('#results').append(html);
      console.log(fmurl);
  });
  });
}

const clearPage = () => {
  let clearButton = document.getElementById('clear');
  location.reload();
}
