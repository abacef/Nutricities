$(document).ready(function() {

  function initialize() {
  var input = document.getElementById('citysearch');
  new google.maps.places.Autocomplete(input);
 }

  google.maps.event.addDomListener(window, 'load', initialize);
  //on click of 'Add' button on create transaction form, sends information
  //to new_trans.php
  //on success:
  $("#submit").click(function() {
    console.log("Starts create");
    city = $("#citysearch").val();
    console.log(city)
    /*$.ajax({
      type: "POST",
      url: "actions/new_trans.php",
      data: "date=" + date + "&merchant=" + merchant + "&amt=" + amount + "&token=" + token,
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
