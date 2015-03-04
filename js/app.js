$(function() {
	
	//Här skapar vi model, view och controller
	this.model = new DinnerModel();
	
	this.startPageTextboxView = new StartPageTextboxView();
	this.startPageTextboxViewController = new StartPageTextboxViewController(this.startPageTextboxView);
	
	this.myDinnerTableView = new MyDinnerTableView(this.model);
	this.myDinnerTableViewController = new MyDinnerTableViewController(this.myDinnerTableView, this.model);
	
	

	this.selectTheDishesView = new SelectTheDishesView(this.model);
	this.selectTheDishesViewController = new SelectTheDishesViewController(this.selectTheDishesView, this.model);

	this.selectedDishInformationView = new SelectedDishInformationView(this.model);
	this.selectedDishInformationViewController = new SelectedDishInformationViewController(this.selectedDishInformationView,this.model);
	
	this.dinnerOverviewView = new DinnerOverviewView(this.model);
	this.dinnerOverviewViewController = new DinnerOverviewViewController(this.dinnerOverviewView, this.model);
	
	this.dinnerPreparationView = new DinnerPreparationView(this.model);
	this.dinnerPreparationController = new DinnerPreparationController(this.dinnerPreparationView, this.model);
	

	//We instantiate our model
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));

});
