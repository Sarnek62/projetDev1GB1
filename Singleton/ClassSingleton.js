
var Singleton = (function() {

	var compteBancaire = function(){
		this.methodePrivee = numero();
		this.methodePrivee = solde();
	}
	
	
	var instance = null;
	return new function() {
			this.getInstance = function() {
					if (instance == null) {
							instance = new compteBancaire();
							instance.compteBancaire = null;
					}
					
					return instance;
			}
	}
})();