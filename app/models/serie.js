import DS from 'ember-data';
import EmberValidator from 'ember-validator';


export default DS.Model.extend( EmberValidator, {
  name: DS.attr('string'),
  gender: DS.attr('string'),
  description: DS.attr('string'),



  rules : {
    name: {
      required: {
        message: "El nombre es requerido"
      },
      length: {
        minimum: 4,
        maximum: 128,
          messages: {
            minimum: 'El nombre debe tener por lo menos 4 caracteres',
            maximum: 'El nombre no puede tener mas de 100 caracteres'
          }
        }
    },
    gender: {
      contains: {
        exclude: ['Selecciona'],
        message: 'Debes seleccionar un genero'
      }
    },
    description: {
      length: {
        minimum: 15,
        maximum: 255,
          messages: {
            minimum: 'La descripcion debe tener por lo menos 15 caracteres',
            maximum: 'La descripcion no puede tener mas de 255 caracteres'
          }
      }
    }
  },


  doValidation : function(){

    var result = this.validate({
      validations: this.rules,
      noPromise: true
    });
    return result;
  }


});
