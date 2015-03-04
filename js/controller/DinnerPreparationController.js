var DinnerPreparationController = function(view, model){
		  $("#dinnerPreparationToSelectDish").click(function() {
			view.hide();
		  });
		  $("#dinnerOverviewToDinnerPreparation").click(function() {
		  view.show();
		  view.updatePrepInfo();
		
		});
}
