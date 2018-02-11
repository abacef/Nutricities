$(document).ready(function() {

  function initialize() {
  var input = document.getElementById('citysearch');
  new google.maps.places.Autocomplete(input);
 }

  google.maps.event.addDomListener(window, 'load', initialize);
  //disallow key press of enter in order to submit on city seleciton
  $('#city-pick').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    return false;
  }
});

  $("#submit").click(function() {
    console.log("Starts create");
    city = $("#citysearch").val();
    console.log(city)
    $.ajax({
      type: "POST",
      url: "actions/rest_data.php",
      data: "location=" + city,
      dataType: 'json',
      success: function(html) {
        alert("Transaction was created, please refresh page to view new"+
        "transaction. If transaction is not found, please re-enter,"+
        "fill all fields, and check date formatting.");
      },
      error: function(html) {
        alert("Failed to create transaction. Please check that all information entered and entered with correct formatting.");
      }
    });*/
    return false;
  });



});
