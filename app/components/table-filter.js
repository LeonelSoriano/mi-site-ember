import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    data: null,

    dataFilter: null,
    dataHeader: null,
    headerName: null,
    tableValue: null,
    exe: null,


    value: function() { return this.get('data'); }.property('data'),

    init: function() {
        // this.set("headerName",this.get("headerName"));

        // var ejemplo = this.get('store').findAll('serie');
        // console.log("prueba: " + this.get('sample'));
        //console.log(this.get("headerName").name);
        return this._super();
    },

    dataObserver: Ember.observer('data', function() {

        this.tableOperation();
    }),

    tableOperation: function() {
        var data = this.get('data');
        var headerName = JSON.parse(this.get('headerName'));

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
                this.get('dataHeader').push(tmpName);
                // console.log('value =' + data[0].get(name));
            });
        }


        if (data !== undefined && Array.isArray(data) && data.length >= 1) {
            this.set("tableValue", []);


            for (var i = 0; i < data.length; i++) {
                var json = data[i];
                var tmpTableValue = [];
                tmpTableValue.push(json.get("id"));

                json.eachAttribute((name, meta) => {

                    tmpTableValue.push(json.get(name));
                });
                this.get("tableValue").push(tmpTableValue);
            }
            console.log(this.get("tableValue"));
        }



        this.set('dataFilter', data);
    },

    actions: {
        prueba: function() {
            console.log(this.get('exe'));
            console.log(this.get("data"));
        }

    }





});