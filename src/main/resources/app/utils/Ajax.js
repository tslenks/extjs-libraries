Ext.define('MyApp.utils.Ajax', {

	/** @inheritdoc */
	extend: 'Ext.data.Connection',

	singleton: true,

	alternateClassName: 'CreateAjax',

	/** @inheritdoc */
	cors: true,

	/** @inheritdoc */
	timeout: 120000,

	/** @inheritdoc */
	request(options) {		
		let url = (options || {}).url || '';
		const headers = (options || {}).headers || {};		
		if (url.startsWith('/')) {
			url = `http://localhost:8080/first-app${url}`;
			/**
			 * To create a CORS request, we have to disable the default Xhr header, enable
			 * the credentials and set the CSRF token to the request header
			 */
			this.setUseDefaultXhrHeader(false);
			this.setWithCredentials(false);
			Ext.apply(headers, {
				Accept: 'application/json',
				'x-csrf-token': 'testtoken',
			});
		}

		return this.callParent([Ext.apply(options || {}, {
			url,
			headers,
		})]);
	},

	/**
	 * A shortcut that calls {@link Ext.Ajax.request} and directly returns you the
	 * decoded response text through a Promise.
	 * @param {auto} args See {@link Ext.Ajax.request}.
	 * @return {Promise<String>} A promise that resolves on the decoded response text of the server.
	 * @public
	 */
	async requestPromise(...args) {
		const response = await Ext.Ajax.request(...args).getPromise();
		return Ext.decode(response.responseText);
	},
});
