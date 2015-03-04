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
              "<img src='images/" + menu[i].image +"' width='110' height='90'>" +
          "</div>" +
          "<div class='col-sm-6' id='descrip'>" +
            "<p>" +
              "<h3>" + menu[i].name + "</h3>" +
            "</p>" +
            "<p>" +
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
            "</p></div></div>" +
        "<div class='col-sm-6' id='preparation'>" +
          "<p>" +
            "<h4>PREPARATION</h4>" +
          "</p><p>" +
          menu[i].description +
          "</p></div></div>");
    i++;
    }
  }

}