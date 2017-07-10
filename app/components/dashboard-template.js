import Ember from 'ember';

export default Ember.Component.extend({
	routing: Ember.inject.service('-routing'),
	session: Ember.inject.service('session'),
	emailUser: '',
	init: function(){
        this._super();
        this.set('emailUser', this.get('session.currentUser.email'));
	},
	
	  actions: {
    
		signOut: function() {
			this.get("routing").transitionTo("login");
			this.get('session').close();
		},

		goToNewSerie : function(){
			this.get("routing").transitionTo("newSerie");
		},

        goToListSerie : function(){
            console.log(this.get("routing").transitionTo("listSerie"));
        },

	}


});
