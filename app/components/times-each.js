import Ember from 'ember';

let component =  Ember.Component.extend({
    
    
  counter: Ember.computed('times', function() {
    let counter = [];

    for (let i = 1; i <= this.get('times'); i++) {
      counter.push(i); 
    }
    return counter;
  })
    
    
});

component.reopenClass({
  positionalParams: ['times']
});

export default component;