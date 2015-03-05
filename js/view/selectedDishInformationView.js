var SelectedDishInformationView = function (model) {
	var _this = this;

	model.menuChanged.addObserver(function () {
	 	_this.hide();
 	})
	model.selectedDishChanged.addObserver(function () {
		_this.show();
	});
	model.selectedDishChanged.addObserver(function () {
		_this.addDishInformation();
	});

	model.selectedDishCollected.addObserver(function () {
		_this.addDishInformation();
	})

	this.show = function () {
		$("#selectedDishInformation").show();
	}
	this.hide = function () {
		$("#selectedDishInformation").hide();
	}

	this.addDishInformation = function (dish) {
		$('#dishInformaiton').empty();
		$('#tableElement').empty();
		var selectedDishId = model.selectedDish;
		var selectedDish = model.getDish(selectedDishId);
		console.log("dish ", dish);
		selectedDish = dish;

	  $('#dishInformaiton').append(" <h1 id='dishHead'>" + selectedDish.Title + "</h1>" +
      	"<div width='100%' id='dishImage'></div><h4>PREPARATION</h4>" + selectedDish.Description);
	   $('#dishImage').append("<img src='images/" + selectedDish.ImageURL + "' alt='Klematis' class='img-thumbnail' width='304' height='236'>");
	  	
	  var i = 0;
	  while(i < selectedDish.Ingredients.length){
	    $('#tableElement').append('<tr><td>' + selectedDish.Ingredients[i].MetricDisplayQuantity+ 
	     " " + selectedDish.ingredients[i].MetricUnit + '</td><td>' + selectedDish.ingredients[i].Name + '</td>' +
	     '<td>' + selectedDish.ingredients[i].MetricQuantity + " SEK" + '</td></tr>');
	    i++;
	  }
	 
	}// addDishInformation end

}// SelectedDishInformationView end