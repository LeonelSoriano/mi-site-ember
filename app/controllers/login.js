import Ember from 'ember';

export default Ember.Controller.extend({



	actions: {
		signIn: function() {
			 let self = this;
				

			this.get('session').open('firebase', {
			   provider: 'password',
			  email: this.get('email'),
			  password:  this.get('myPassword')
			}).then(function(data) {
				console.log(data);
				self.transitionToRoute("welcome");
			}).catch(function(data) {
				 Ember.$("#msg-login-erro").show();
				self.set('logionErrorMsg',data);

			});

		}
}

});




    /*signIn: function(provider) {

this.get('session').open('firebase', {
  provider: 'password',
  email: 'leonelsoriano3@gmail.com',
  password: '19165597'
}).then(function(data) {
        console.log(data.currentUser);

      });
*/
