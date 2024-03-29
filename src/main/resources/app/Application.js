/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    /*quickTips: false,
    
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },*/

    requires:[
        'MyApp.utils.Ajax',
        'MyApp.proxy.Ajax'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {		  	
    	/*CreateAjax.request({
			url: '/test1.test',
			success:(response) => {				
				console.log('response 12345', response)				
			}
    	}); */   	
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
