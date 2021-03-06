var SelectTheDishesView = function (model) {
	var _this = this;

	model.selectedDishChanged.addObserver(function () {
		_this.hide();
	})
	model.menuChanged.addObserver(function () {
	 	_this.show();
 	})
	model.dishCashChanged.addObserver(function () {
		_this.updateImages();
	});

	this.show = function () {
 		$("#selectTheDishesDiv").show();
 	}// showMyDinnerTable end

 	this.hide = function () {
 		$("#selectTheDishesDiv").hide();
 	}// hideMyDinnerTable end

 	this.waitingForAPIData = function () {
 		// body...
 	}

 	this.updateImages = function () {
 		$("#selectPICTdish").empty();
 		var index = 0;
 		var selectedType = $("#selectTypeForm").val()
 		var dishes = model.getAllDishes(selectedType, $("#searchBar").val());
		// var dishes = model.dishCash;
		//console.log(dishes);
		while(index < dishes.length){
			$('#selectPICTdish').append("<div class='img'>" +
			"<a id='" + dishes[index].RecipeID + "' class='clickAbleDish'>" +
			  "<img  src=" + dishes[index].ImageURL + " width='110' height='90'>" +
			  "<div class='desc'>" + dishes[index].Title + "</div>" + 
			"</div>");
			index++;
		}
		// denna ska egentligen inte ligga här men jag får den inte att funka annars.........
		$(".clickAbleDish").on("click", function(evt){
		model.setSelectedDish($(this).attr("id"));
		//console.log(model.selectedDish);
		model.getDishByID($(this).attr("id"));
	});
 	}// updateImages


 	model.selectedDishCollected.addObserver(_this.hide);
}// SelectTheDishesView end


// prototype används för att objekten ska återanvända samma funktion. Gör det även möjligt för override