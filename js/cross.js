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

  console.log("Not working yet, stop clicking.");

});
