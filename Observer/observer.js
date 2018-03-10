/*********************************/
/*        OBSERVABLE CLASS       */
/*  declaration de l'observable  */
/*********************************/
function Observable() {
  this.observers = new Array();
};

/***********************************/
/* fonctions de l'objet observable */
/***********************************/
Observable.prototype = {

  // enregistre un observer a recevoir des notifications
  register: function(observer) {
    this.observers.push(observer);
    return this;
  },

  // envoie une notification a tous les observers enregistres
  notifyObservers: function(event, parameters) {
    $.each(this.observers, function(i, observer) {
      observer.notify(event, parameters);
    });
  }
};


/******************************************************************************/


/*********************************/
/*        OBSERVER CLASS         */
/*   declaration de l'observer   */
/*********************************/
var Observer = function() {
  this.observers = new Array();
};

/*********************************/
/* fonctions de l'objet observer */
/*********************************/
Observer.prototype = {
  register: function(observable) {
    this.observable = observable;
    this.notifyMe();

    return this;
  },

  notifyMe: function() {
    this.observable.register(this);
  },

  notifyObservers: function(event, parameters) {
    this.observable.notifyObservers(event, parameters);
  },

  notify: function(event, parameters) {
    return this;
  }
};
