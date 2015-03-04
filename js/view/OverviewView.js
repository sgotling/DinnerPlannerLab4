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
			"<a id='" + menu[index].id + "' class='clickAbleDish'>" +
				"<img src=" + "images/" + menu[index].image + " width='110' height='90'>" +
				"<div class='desc'>" + menu[index].name + "</div>" + 
			"</div>" +
			"<script>" +
			"$('#" + menu[index].name + "').click(function() {" +
			"});" +
			"</script>");
			index++;
			
	    }
	}
}