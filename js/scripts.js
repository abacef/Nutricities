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
  /*  $.ajax({
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
function calc_weights() {
	var arr = [1000];
	arr[6] = 5;
	arr[152] = 5;
	arr[1] = 3;
	arr[3] = 4;
	arr[193] = 2;
	arr[5] = 2;
	arr[270] = 2;
	arr[159] = 4;
	arr[182] = 4;
	arr[168] = 3;
	arr[30] = 1;
	arr[491] = 3;
	arr[956] = 3;
	arr[111] = 4;
	arr[158] = 4;
	arr[25] = 4;
	arr[161] = 6;
	arr[100] = 1;
	arr[411] = 5;
	arr[541] = 3;
	arr[958] = 3;
	arr[959] = 1;
	arr[268] = 2;
	arr[651] = 5;
	arr[149] = 4;
	arr[38] = 5;
	arr[40] = 2;
	arr[298] = 3;
	arr[45] = 3;
	arr[501] = 2;
	arr[274] = 3;
	arr[134] = 4;
	arr[156] = 5;
	arr[143] = 7;
	arr[233] = 1;
	arr[148] = 4;
	arr[154] = 4;
	arr[55] = 3;
	arr[207] = 3;
	arr[60] = 4;
	arr[67] = 4;
	arr[136] = 4;
	arr[66] = 6;
	arr[70] = 6;
	arr[73] = 5;
	arr[137] = 4;
	arr[147] = 6;
	arr[996] = 5;
	arr[82] = 2;
	arr[219] = 5;
	arr[983] = 2;
	arr[361] = 4;
	arr[320] = 1;
	arr[998] = 7;
	arr[304] = 6;
	arr[83] = 6;
	arr[471] = 2;
	arr[966] = 3;
	arr[89] = 5;
	arr[141] = 2;
	arr[177] = 7;
	arr[179] = 5;
	arr[163] = 5;
	arr[964] = 2;
	arr[150] = 3;
	arr[95] = 5;
	arr[142] = 5;
	arr[308] = 7;
	arr[99] = 3;
}
