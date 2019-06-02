Ext.define('MyApp.model.TestModel',{

    extend:'Ext.data.Model',
    
    fields:[ 
        {name: 'color', type: 'string'},
        {name: 'type',  type: 'string'},
        {name: 'tiresNb', type: 'int'}
    ],

});