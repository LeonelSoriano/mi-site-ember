import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    
    init : function(){
       var ejemplo = this.get('store').findAll('serie');
       console.log(ejemplo);
        return this._super(); 
    },

    
    


});
