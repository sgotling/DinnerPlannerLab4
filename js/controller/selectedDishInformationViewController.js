var SelectedDishInformationViewController = function (view, model) {

	

	this.addToMenu = function () {
		model.addDishToMenu(id);
	}

	$("#confirmDish").click(function () {
		var selectedDishId = model.selectedDish;
		model.addDishToMenu(selectedDishId);
	});

	$("#dishInformationToSelectDishButton").click(function () {
		view.hide();
		});

	$("#selectDishToDinnerOverviewButton").click(function () {
 		view.hide();
 	})

}