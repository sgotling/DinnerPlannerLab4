var DinnerOverviewView = function(model) {
	
	this.show = function () {
		$("#Overview").show();
	}
	this.hide = function () {
		$("#Overview").hide();
	}
	this.updateImages = function () {
		$('#overviewPict').empty();
		var menu = model.getFullMenu();
	



var index = 0;
		while(index < menu.length){
		    $('#overviewPict').append("<div class='img'>" +
			"<a id='" + menu[index].RecipeID + "' class='clickAbleDish'>" +
				"<img src=" + menu[index].ImageURL + " width='110' height='90'>" +
				"<div class='desc'>" + menu[index].Title + "</div>" + 
			"</div>" +
			"<script>" +
			"$('#" + menu[index].Title + "').click(function() {" +
			"});" +
			"</script>");
			index++;
			
	    }
	}
}