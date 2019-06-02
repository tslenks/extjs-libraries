Ext.define('MyApp.proxy.Ajax', {
    
    extend: 'Ext.data.proxy.Ajax',

    alias:'proxy.appajax',

    config:{
        url: 'http://localhost:8080/first-app/test1.test',       
        reader:{
            type:'json',
            rootProperty:'data',
            totalProperty:'total_count',
        },
        writer:'json' ,
        headers: {
            Accept: 'application/json',
            'x-csrf-token': 'testtoken',
        },
        useDefaultXhrHeader:false,
        withCredentials:false,
    },

    initConfig(config) {
        return this.callParent([config]);
    },
});