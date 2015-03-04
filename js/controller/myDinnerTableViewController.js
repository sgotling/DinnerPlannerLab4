var MyDinnerTableViewController = function (view, model) {
	this.startToSelectDishButtonClicked = new Event();
	this.selectDishToDinnerOverviewButtonClicked = new Event();
	var _this = this;


	$("#startToSelectDishButton").click(function () {
		view.show();
 	});
 	$("#selectDishToDinnerOverviewButton").click(function () {
 		view.hide();
 	});
	$("#dinnerPreparationToSelectDish").click(function() {
		view.show();
	});
	$("#selectTheDishesDiv").click(function(){
	    view.show();
	});
	$("#dinnerOverviewToSelectDish").click(function() {
		view.show();
	});

 	$("#Guests").change(function(){

			model.setNumberOfGuests($("#Guests").val());

		});
 	
}// MyDinnerTableViewController end