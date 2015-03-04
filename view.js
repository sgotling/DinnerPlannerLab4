//Denna fil ska troligtvis inte används. Ska dubbelkolla saken.


//add view objects to model

//function: update (object from model, the event)
//if event1 do this...

var DinnerView = function(model) {

	//model.numberOfGuestsChanged.noti

var type = "starter"
//var model = new DinnerModel;

model.addDishToMenu(3);
model.addDishToMenu(1); 
model.addDishToMenu(2); 
var menu = model.getFullMenu();
var dishes = model.getAllDishes(type);
var totalPrice = model.getTotalMenuPrice();
var numberOfGuests = model.getNumberOfGuests();
var selectedDish = menu[2];




//selectdish.html
this.selectDish = function() {
	}//selectDish end

	

	this.homeleteGrey = function() {
	}//homeleteGrey end

	this.myDinner = function() {

		$('#myDinner').append("<div class='col-sm-4'  color='#??????'>" +
		      + "<h1>My Dinner</h1>" +
		      + "<div style>" +
		      	"<input> <!-- Probably to be fixed -->"+
		        "<label for='sel1'>Specify number of guests</label>"+
		      "</div>" +           
		        "<table class='table'>" + 
		          "<thead>" + 
		            "<tr>" + 
		              "<th>Cost</th>" + 
		              "<th>Dishes</th>" + 
		            "</tr>" + 
		          "</thead>" + 
		          "<tbody id='menuDishes'>" + 
		          "</tbody>" + 
		        "</table>" + 
		      "<a href='dinner_overview.html''>" + 
		        "<button type='button' style=' background:orange'>Confirm dinner</button>" + 
		      "</a>" + 
		    "</div>"); 


	var i = 0;
		while(i < menu.length){
			var price=0;
			var j = 0;
			while(j < menu[i].ingredients.length){
				//console.log(menu[i] + menu[i].ingredients[j].price);
				price = price + menu[i].ingredients[j].price;
				//console.log(price);
				j++;
			}
			$('#menuDishes').append('<tr><td>' + price * numberOfGuests + ' SEK' + '</td><td>' + menu[i].name + '</td></tr>');
			i++;
		}
		$('#menuDishes').append('<tr><td>' + totalPrice + ' SEK' + '</td><td>Total</td></tr>');
			i++;


	}//myDinner end

	this.selectDishYellow = function(){
	}//selectDishYellow end

	this.selectDishImages = function() {
		var index = 0;
	while(index < dishes.length){
		//console.log(dishes[index].name);
		$('#selectPICTdish').append("<div class='img'>" +
		"<a href='dish.html' id='" + dishes[index].name + "'>" +
			"<img src=" + "images/" + dishes[index].image + " width='110' height='90'>" +
			"<div class='desc'>" + dishes[index].name + "</div>" + 
		"</div>");
		index++;
	}
}//selectDishImages end
	







//Dish.html
this.dish = function() {
	$('#dishHead').append(selectedDish.name);
	$('#dishImage').append("<img src='images/" + selectedDish.image + "' alt='Klematis' class='img-thumbnail' alt='Cinque Terre' width='304' height='236'>");
	$('#dishPreparation').append(selectedDish.description);

	var i = 0;
	while(i < selectedDish.ingredients.length){
		//console.log(selectedDish.ingredients[i].name);
		$('#tableElement').append('<tr><td>' + selectedDish.ingredients[i].quantity + 
		 " " + selectedDish.ingredients[i].unit + '</td><td>' + selectedDish.ingredients[i].name + '</td>' +
		 '<td>' + selectedDish.ingredients[i].price + " SEK" + '</td></tr>');

		i++;
	}
	$('#tableElement').append("<a href='selectdish.html'>" + 
		"<button type='button' style='background:orange'>Confirm dish" + 
		"</button></a>");
}//dish end




this.ingredients = function() {
	var i = 0;
	while(i < selectedDish.ingredients.length){
		//console.log(selectedDish.ingredients[i].name);
		$('#tableElement').append('<tr><td>' + selectedDish.ingredients[i].quantity + 
		 " " + selectedDish.ingredients[i].unit + '</td><td>' + selectedDish.ingredients[i].name + '</td>' +
		 '<td>' + selectedDish.ingredients[i].price + " SEK" + '</td></tr>');

		i++;
	}
}//ingredients end


//dinner_overview.html
this.dinnerOverview = function() {
	var index = 0;
	while(index < menu.length){
	    $('#overviewPict').append("<div class='img'>" +
		"<a href='dish.html' id='" + menu[index].name + "'>" +
			"<img src=" + "images/" + menu[index].image + " width='110' height='90'>" +
			"<div class='desc'>" + menu[index].name + "</div>" + 
		"</div>" +
		"<script>" +
		"$('#" + menu[index].name + "').click(function() {" +
		"});" +
		"</script>");
		index++;
	}
}//dinnerOverview end
/*
	$('#overviewPict').append("<a href='dish.html'>" + 
            "<img src=images/" + menu[i].image + " width='110' height='90'></a>");
	*/


//dinner_preparation.html
this.dinnerPreparation = function() {
var i = 0;
while(i < menu.length){
	//console.log(selectedDish.ingredients[i].name);
	$('#preparationList').append("<div class='col-sm-12' id='Dish1'>" +
      "<div class='col-sm-6' id='pictAndDescrip'>" +
        "<div class='col-sm-6' style='padding:10pt' id='pict'>" +
          "<a href='dish.html'>" +
            "<img src='images/" + menu[i].image +"' width='110' height='90'>" +
          "</a>" +
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
}//dinnerPreparation end



$('#addOne').click(function() {
	    $('#selectPICTdish').append("<div class='img'>" +
	    	"<a href='dish.html'>" +
	    		"<img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWIHg8dw6d888laJZjXqr15SHE9wb2VFH0b7OneFhmWpOIuRv4' alt='Klematis' width='110' height='90'>" +
	    		"<div class='desc'>Add a description of the image here</div>" + 
	    	"</div>");
});



}//DinnerView end




