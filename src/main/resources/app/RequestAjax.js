Ext.define('MyApp.RequestAjax', {
    alternateClassName: 'commonUtility',
    singleton: true,
    config: {
        /*
         * you can put local or live also or whatever you want.
         * for local it will be ip address like this {'http://192.168.30.83:8080/'}
         * for live is will be live tomcate  host  url {http://example.com/}
         */
        serverUrl: 'http://localhost:8080/first-app'
    },

    constructor: function(config) {
        var me = this;

        me.initConfig(config);
    },
});