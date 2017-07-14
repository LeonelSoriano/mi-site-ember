/*jshint esversion: 6 */
import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    data: null,

    /**
     * data que se filtrara
     */
    dataFilter: null,


    /**
     * son los header con los alias enviasdos desde el component
     */
    dataHeader: null,

    /**
     * son los alias de los header
     */
    headerName: null,

    /*
     * este es para conseguir los valores originales del array
     */
    headerNameOriginal: null,

    /*
     * son los valoes de la tabla en brutos enviados desde el component
     */
    tableValue: null,


    /**
     * guarda los valores de los filtros
     */
    filterValues: {},

    exe: null,


    value: function() { return this.get('data'); }.property('data'),

    init: function() {

        return this._super();
    },


    dataObserver: Ember.observer('data', function() {


        this.set("headerName", JSON.parse(this.get('headerName')));

        var headerName = this.get('headerName');

        var data = this.get('data');


        this.set("headerNameOriginal", {});

        this.set('dataHeader', []);

        if (data !== undefined && Array.isArray(data) && data.length >= 1) {
            data[0].eachAttribute((name, meta) => {
                // console.log('key =' + name);
                var tmpName = null;

                if (headerName[name] !== undefined) {
                    tmpName = headerName[name];

                } else {
                    tmpName = name;
                }
                this.get("headerNameOriginal")[tmpName] = name;

                this.get('dataHeader').push(tmpName);
                // console.log('value =' + data[0].get(name));
            });
        }

        console.log(this.get("headerNameOriginal"));
        this.tableOperation();
    }),


    tableOperation: function() {
        var data = this.get('data');

        if (data !== undefined && Array.isArray(data) && data.length >= 1) {
            this.set("tableValue", []);

            var isFilterActivate = false;

            //verfico si hay un filtro activado
            for (var filterItem in this.get('filterValues')) {

                if (this.get('filterValues')[filterItem] !== undefined && this.get('filterValues')[filterItem].length > 0) {
                    isFilterActivate = true;
                    break;
                }
            }




            for (var i = 0; i < data.length; i++) {

                //verficica si es un item correcto o no
                var correctItem = true;

                var json = data[i];
                var tmpTableValue = [];
                tmpTableValue.push(json.get("id"));


                json.eachAttribute((name, meta) => {
                    if (correctItem) {
                        var patt = new RegExp(this.get('filterValues')[name]);
                        correctItem = patt.test(json.get(name));
                    }
                    tmpTableValue.push(json.get(name));
                });

                if (!isFilterActivate || correctItem) {
                    this.get("tableValue").push(tmpTableValue);

                }

            }

        }


        this.set('dataFilter', data);
    },


    actions: {
        prueba: function() {
            console.log(this.get('exe'));
            console.log(this.get("data"));
        },
        onFilter: function(nameFilter) {

            this.get('filterValues')[this.get('headerNameOriginal')[nameFilter]] = arguments[1];

            this.tableOperation();
        }

    }





});