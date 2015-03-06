var SelectTheDishesViewController = function (view, model) {

	var _this = this;


	// startToSelectDishButtonClicked
	$("#startToSelectDishButton").click(function () {
		view.show();
		model.getAllDishesApi("appetizer");
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
		model.getAllDishesApi($("#selectTypeForm").val());
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