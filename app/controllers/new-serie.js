import Ember from 'ember';
import SweetAlertMixin from 'ember-sweetalert/mixins/sweetalert-mixin';



const Validation = Ember.Object.extend({
    name: '',
    gender: '',
    description: ''
});

export default Ember.Controller.extend(SweetAlertMixin, {



    entitySerie: {},

    allSeries: null,

    validation: Validation.create({}),


    init: function() {
        var self = this;
        // this.set('entitySerie', this.store.createRecord('Serie'));

        this.store.findAll('Serie').then(function(series) {

            self.set('allSeries', series.toArray());
        });

        //  console.log(this.entitySerie);
    },

    actions: {
        saveSerie: function() {
            this.entitySerie.set("gender", Ember.$("#genderSelect").val());

            var result = this.entitySerie.doValidation();
            this.validation.set('name', result.get("name.errors"));
            this.validation.set('description', result.get("description.errors"));
            this.validation.set('gender', result.get("gender.errors"));

            if (result.get('isValid')) {



                var self = this;
                this.entitySerie.save().then(function() {



                    let sweetAlert = self.get('sweetAlert');
                    sweetAlert({
                        title: 'Guardado correctamente',
                        type: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        self.entitySerie.set('name', '');

                        self.entitySerie.set('description', '');
                        Ember.$("#genderSelect").prop("selectedIndex", 0);
                        self.validation.set('name', '');
                        self.validation.set('description', '');
                        self.validation.set('gender', '');

                    });



                }).catch(function() {
                    let msg = self.get('sweetAlert');
                    msg({
                        title: 'Error no se pudo guardar la inforacion',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    });

                });






            } else {


            }


        }
    } //end action


});