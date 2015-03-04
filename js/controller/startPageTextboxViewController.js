var StartPageTextboxViewController = function (view) {
	view.show();
	this.startToSelectDishButtonClicked = new Event();
	var _this = this;
	$("#startToSelectDishButton").click(function () {
		view.hide();
	});

}










