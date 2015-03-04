var DinnerOverviewViewController = function(view, model) {
		$("#dinnerOverviewToSelectDish").click(function() {
		  view.hide();
		});
		//Knappevent
		$("#dinnerOverviewToDinnerPreparation").click(function() {
		  view.hide();
		
		});
		$(".clickAbleDish").on("click", function(evt){
		model.setSelectedDish($(this).attr("id"));
		
	});
	$("#selectDishToDinnerOverviewButton").click(function (){
			view.show();
			view.updateImages();
		});
	}