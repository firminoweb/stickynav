(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.stickyNav = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

	'use strict';

	var settings, eventHandler;

	var stickyNav = {}; // Object for public APIs
	var supports = 'querySelector' in document && 'addEventListener' in root; // Feature test

	var defaults = {
		scrollNav: document.getElementById('scrollNav'),
		mainNav: document.getElementById('mainNav'),
		scrollY: 72,
		callback: function () {}
	};

	//* Private Events
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	//
	eventHandler = function () {
		if (settings.scrollNav) {
			if(this.scrollY > settings.scrollY) {
				settings.mainNav.classList.add("fadeOut");

				settings.scrollNav.classList.remove("fadeOut");
				settings.scrollNav.classList.add("fadeIn");
				settings.scrollNav.classList.remove("hidden-xs-up");
			}
			else {
				settings.scrollNav.classList.remove("fadeIn");
				settings.scrollNav.classList.add("fadeOut");

				settings.mainNav.classList.remove("fadeOut");
			}
		} else {
			if(this.scrollY > settings.scrollY) {
				settings.mainNav.classList.add("bg-inverse");
				settings.mainNav.classList.add("fadeIn");
			}
			else {
				settings.mainNav.classList.remove("bg-inverse");
				settings.mainNav.classList.remove("fadeIn");
			}	
		}


		settings.callback();

	};

	//* Initialize Sticky Nav
	stickyNav.init = function (options) {

		// feature test
		if (!supports) return;

		// Selectors and variables
		settings = extend(defaults, options || {}); // Merge user options with defaults

		// 
		root.window.addEventListener('scroll', eventHandler, false);

	};

	//* Public API
	return stickyNav;

});