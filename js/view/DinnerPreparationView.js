var DinnerPreparationView = function(model){
	
	this.show = function () {
		$("#DinnerPreparation").show();
	}
	this.hide = function () {
		$("#DinnerPreparation").hide();
	}
	this.updatePrepInfo = function () {
		$('#preparationList').empty();
		

  var menu = model.getFullMenu();

  var i = 0;

  while(i < menu.length){
    //console.log(selectedDish.ingredients[i].name);
    $('#preparationList').append("<div class='col-sm-12 dishPreparation'>" +
        "<div class='col-sm-6' id='pictAndDescrip'>" +
          "<div class='col-sm-6' style='padding:10pt' id='pict'>" +
              "<img src='" + menu[i].ImageURL +"' width='110' height='90'>" +
          "</div>" +
          "<div class='col-sm-6' id='descrip'>" +
            "<p>" +
              "<h3>" + menu[i].Title + "</h3>" +
            "</p>" +
            "<p>" +
              menu[i].Description +
            "</p></div></div>" +
        "<div class='col-sm-6' id='preparation'>" +
          "<p>" +
            "<h4>PREPARATION</h4>" +
          "</p><p>" +
          menu[i].Instructions +
          "</p></div></div>");
    i++;
    }
  }

}