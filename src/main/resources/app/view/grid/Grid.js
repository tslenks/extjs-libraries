Ext.define('MyApp.view.grid.Grid', {
    
    extend: 'Ext.grid.Panel',

    xtype:'appviewgrid',

    requires:['MyApp.model.TestModel'],

    title:'LOOOL',

    selModel:{
        prunedRemoved:false
    },

    columns: [
        { text: 'Color',  dataIndex: 'color',flex:1 },
        { text: 'Type', dataIndex: 'type',flex:1 },
        { text: 'Tire numbers', dataIndex: 'tiresNb',flex:1}
    ],

    store:{
        type:'buffered',
        leadingBufferZone:40,
        trailingBufferZone:10,
        pageSize:40,
        autoLoad:true,        
        purgePageCount:0,       
        proxy:{
            type:'appajax',
            model:'MyApp.model.TestModel',
        }
    },
});