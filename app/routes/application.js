/*jshint esversion: 6 */
import Ember from 'ember';

export default Ember.Route.extend({
 beforeModel: function() {

	//console.log(this.get('session.currentUser.email'));
    
    return this.get('session').fetch().catch(function() {});

  },

afterModel(){
	if (this.get('session.isAuthenticated')) {
      //this.transitionTo('welcome');
    }else{
		this.transitionTo('login');
	}

},
  actions: {

    accessDenied() {
      this.transitionTo('login');
    }
  }
});
