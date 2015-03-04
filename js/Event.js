//Detta är en klass som gör det möjligt att lägga till och notifiera observers

var Event = function(){
	this.observers = [];

    this.addObserver = function(observer) {
    	this.observers.push(observer);
    }//addObserver end

   this.notifyObservers = function(arg) {
    	for(var i = 0; i< this.observers.length; i++){
    		this.observers[i](arg);
    	}
    }

}//Event end
