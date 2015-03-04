var SelectTheDishesViewController = function (view) {

	var _this = this;


	// startToSelectDishButtonClicked
	$("#startToSelectDishButton").click(function () {
		view.show();
		view.updateImages();
	});

	$("#dishInformationToSelectDishButton").click(function () {
		view.show();
	});
	
	$("#dinnerPreparationToSelectDish").click(function() {
		view.show();
	});
	$("#dinnerOverviewToSelectDish").click(function() {
		view.show();
	});

	$("#selectTypeForm").change(function () {
		view.updateImages();
	});

	$("#selectDishToDinnerOverviewButton").click(function (){
			view.hide();
		});
	$("#searchBar").on('keyup', function(evt){
			// if(evt.keyCode == 13){} // For enter key
			view.updateImages();
		});


}// SelectTheDishesViewController end