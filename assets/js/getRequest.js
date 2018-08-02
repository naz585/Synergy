const goSearch = () => {
  let search = document.getElementById("searchForm")
  $(document).ready(function() {

  event.preventDefault();

  var $form = $(this),
      term = $form.find('input[name="s"]').val(),
      url = $form.attr('action');

  var tacksSearch = 'tracks/search/'
  var fmurl = 'http://secure.galiboo.com/api/metadata/' + tacksSearch +
      '?token=08609866e0fe4ca96ac5d615b13c4c97ece49c2d&artist=' + term;
  console.log(fmurl);
  $.ajax({
    url: fmurl,
    method: "GET"
  })

  .then(function(response) {

    var artistList = response.results.artists;
    //var idList = response.results.artists.analysis_url;

    var searchReturn = $("<div>");

    searchReturn.attr("src", artistList);
    searchReturn.attr("alt", "artist List");

    $("#resultsName").prepend(searchReturn);
  });

/*     $.getJSON(fmurl, function(data) {
      var html = '';
      $.each(data.results.trackmatches.track, function(i, item) {
          html += "<p><a href=" + item.url + " target='_blank'>" + item.name + " - " + "Play count : " +item.playcount + "</a></p>" + "<img>" + item.image.medium + "</img>";
      });
      $('#results').append(html);
      console.log(fmurl);
  }); */



  });

}














