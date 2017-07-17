import Ember from 'ember';

export default Ember.Component.extend({
    
    init: function() {
        return this._super();
    },
    
    /**
     * si es block se ve si es hide no se ve
     */
    hideCss: 'block',
    
     dataObserver: Ember.observer('isHideProgres', function() {
        this.setHide(this.get('isHideProgres'));
    }),
    
    
    
    setHide: function(isHide) {
        
        if(isHide || isHide === undefined || isHide === null ){
            this.set('hideCss', 'none');
        }else{
            this.set('hideCss', 'block');
        }
    }
    
});
