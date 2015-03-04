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

	this.show = function () {
		$("#selectedDishInformation").show();
	}
	this.hide = function () {
		$("#selectedDishInformation").hide();
	}

	this.addDishInformation = function () {
		$('#dishInformaiton').empty();
		$('#tableElement').empty();
		var selectedDishId = model.selectedDish;
		var selectedDish = model.getDish(selectedDishId);

	  $('#dishInformaiton').append(" <h1 id='dishHead'>" + selectedDish.name + "</h1>" +
      	"<div width='100%' id='dishImage'></div><h4>PREPARATION</h4>" + selectedDish.description);
	   $('#dishImage').append("<img src='images/" + selectedDish.image + "' alt='Klematis' class='img-thumbnail' width='304' height='236'>");
	  	
	  var i = 0;
	  while(i < selectedDish.ingredients.length){
	    $('#tableElement').append('<tr><td>' + selectedDish.ingredients[i].quantity + 
	     " " + selectedDish.ingredients[i].unit + '</td><td>' + selectedDish.ingredients[i].name + '</td>' +
	     '<td>' + selectedDish.ingredients[i].price + " SEK" + '</td></tr>');
	    i++;
	  }
	 
	}// addDishInformation end

}// SelectedDishInformationView end