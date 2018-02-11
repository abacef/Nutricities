$(document).ready(function(){
  $('#load').hide();
  $('#error').hide();
  $('#success').hide();
  var main_arr = [];
  $('.right').hide();
  $("#display").hide();
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
    $('#city-prompt').hide();
    $('#load').show();
    city = $("#citysearch").val();
    console.log(city);
    $.ajax({
      type: "POST",
      url: "actions/rest_data.php",
      data: "location=" + city,
      dataType: 'json',
      success: function(html) {
        var obj = load_table();
        $('#load').hide();
        console.log(html);
        main_arr = get_data(html.restaurants, obj);
        $('#sxs').append(html.restaurants[0].restaurant.location.city);
        $('#success').show();
        $('.right').show();
      },
      error: function(html) {
        $('#load').hide();
        console.log("Failure");
        console.log(html);
        $('#error').show();
        setTimeout(function(){
          $('#error').hide();
          $('#city-prompt').show();
        }, 3000);

      }
    });
    return false;
  });

  $(".right").click(function() {
    console.log("movin on");
    $("#mean_val").hide();
    $("#whole2").hide();
    $("#display").show();
    $('#mean_val').append(main_arr[2]);
    $("#mean_val").fadeIn(2000);
    $('#spice').append(main_arr[0].restaurant.location.city);
    $('#loss').append(main_arr[1].restaurant.name);
    $('#W').append(main_arr[0].restaurant.name);
    });
// will return the weight of the string
function calc_weights(str, obj) {
  if (obj[str] == undefined) {
    return 3;
  }
  else {
    return obj[str];
  }
}
// loads a index based data structure and returns it
function load_table() {
	var obj = {};
	obj["Afghani"] = 5;
	obj["African"] = 5;
	obj["American"] = 3;
	obj["Asian"] = 4;
	obj["BBQ"] = 2;
	obj["Bakery"] = 2;
	obj["Bar Food"] = 2;
	obj["Beverages"] = 2;
	obj["Brazilian"] = 4;
	obj["Breakfast"] = 3;
	obj["Burger"] = 3;
	obj["Cafe"] = 1;
	obj["Cajun"] = 3;
	obj["California"] = 3;
	obj["Cambodian"] = 4;
	obj["Caribbean"] = 4;
	obj["Chinese"] = 4;
	obj["Coffee and Tea"] = 2;
	obj["Deli"] = 6;
	obj["Desserts"] = 1;
	obj["Dim Sum"] = 5;
	obj["Diner"] = 3;
	obj["Dominican"] = 3;
	obj["Donuts"] = 1;
	obj["Drinks Only"] = 2;
	obj["Eastern European"] = 5;
	obj["Ethiopian"] = 4;
	obj["European"] = 5;
	obj["Fast Food"] = 2;
	obj["Fish and Chips"] = 3;
	obj["French"] = 3;
	obj["Frozen Yogurt"] = 3;
	obj["Fusion"] = 3;
	obj["German"] = 4;
	obj["Greek"] = 5;
	obj["Healthy Food"] = 7;
	obj["Ice Cream"] = 1;
	obj["Indian"] = 4;
	obj["International"] = 4;
	obj["Italian"] = 3;
	obj["Jamican"] = 3;
	obj["Japanese"] = 4;
	obj["Korean"] = 4;
	obj["Latin American"] = 4;
	obj["Lebanese"] = 6;
	obj["Mediterranean"] = 6;
	obj["Mexican"] = 5;
	obj["Middle Eastern"] = 4;
	obj["Moroccan"] = 6;
	obj["New American"] = 5;
	obj["Pizza"] = 2;
	obj["Polish"] = 5;
	obj["Pub Food"] = 2;
	obj["Pureto Rican"] = 4;
	obj["Ramen"] = 1;
	obj["Salad"] = 7;
	obj["Sandwich"] = 6;
	obj["Seafood"] = 6;
	obj["Southern"] = 2;
	obj["Southwestern"] = 3;
	obj["Spanish"] = 5;
	obj["Steak"] = 3;
	obj["Sushi"] = 7;
 	obj["Tapas"] = 5;
	obj["Tea"] = 5;
	obj["Teriyaki"] = 2;
	obj["Tex-Mex"] = 3;
	obj["Thai"] = 5;
	obj["Turkish"] = 5;
	obj["Vegetarian"] = 7;
 	obj["Vietnamese"] = 3;
	return obj;
}

function get_data(data, ref_table){
    var arr = [13]; // mindata, minweight, max5data, max5weight, max4data,
					// max4weight, max3data, max3weight, max2data, max2weight,
					// max1data, max1weight, weightedMean;
    var ct = 0; // total weight counter
    var ct2 = 0; // how many there has been
    for (i in data) {
      ct2++;
      console.log(data[i].restaurant);
      if (data[i].restaurant.cuisines.includes(",")) {
        var i2 = data[i].restaurant.cuisines.split(',');
        i2 = i2[0].trim(); // the cusine for the current resturant
      }
      else {
        i2 = data[i].restaurant.cuisines.trim();
      }

	  var curWeight = calc_weights(i2, ref_table);

      if (ct2 == 1){
    	for (var j = 1; j < 12; j += 2) {
			arr[j] = curWeight;
			arr[j - 1] = data[i];
		}
      }

	  if (curWeight < arr[1]) {
	    arr[1] = curWeight;
		arr[0] = data[i];
	  }

	  var tmpWeight = 0;
	  var tmpData = undefined;
	  for (var k = 11; k > 1; k -= 2) {
		console.log(k);
	  	if (tmpData == undefined) {
			var holder = arr[k];
			arr[k] = tmpWeight;
			tmpWeight = holder;
			holder = arr[k - 1];
			arr[k - 1] = tmpData;
			tmpData = holder;
		}
		else {
			tmpWeight = arr[k];
			tmpData = arr[k - 1];
			arr[k] = curWeight;
			arr[k - 1] = data[i];
		}
	  }
      ct += curWeight;
    }
    arr[12] = ct/ct2;
    console.log(arr);
    return arr;
  }

});
