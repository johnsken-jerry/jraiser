bowljs.config({
	libPath: '../lib',
	appPath: './app',
	preload: [
		Function.prototype.bind ? '' : 'compatibility/es5-shim',
		window.JSON ? '' : 'compatibility/json2',
		window.localStorage ? '' : 'compatibility/localstorage'
	]
});