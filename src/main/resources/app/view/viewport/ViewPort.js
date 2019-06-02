Ext.define('MyApp.view.viewport.Viewport',{

    extend:'Ext.Container',

    xtype:'appviewport',

    requires:['MyApp.view.grid.Grid'],

    items:[{
        xtype:'appviewgrid',
        reference:'appviewgrid',        
        flex:1,
        viewConfig: {
            trackOver: false
        },
        loadMask: true,
        multiSelect: true,
    }],

    layout:{
        type: 'vbox',
        align: 'stretch'
    },    
});