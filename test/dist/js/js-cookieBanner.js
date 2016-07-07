/**
 * js cookie banner
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else
		if (typeof exports === 'object') {
			// Node, CommonJS-like
			module.exports = factory(require('jquery'));
		} else {
			// Browser globals (root is window)
			root.cookieBanner = factory(root.jQuery);
		}
}(this, function($) {

	return (function(options) {

		var
			me = this
			, _opts = {}
			, _defaultOptions = {
					// html cookie banner container
				htmlContainer: '<div id="bJS_cookieBanner" class="b_cookieBanner">' +
							   '<div class="c_contentContainer">' +
							   '<div id="bJS_cookieBannerContent" class="c_content">' +
							   '</div>' +
							   '</div>' +
							   '</div>'

					// html cookie banner content
					// will append to #bJS_cookieBannerContent
				, htmlContent : '<p>We use cookies on this site to enhance your user experience</p>' +
							   '<a href="#">more infos</a><button class="bJS_acceptCookieBanner">accept</button>'

					// cookie name
				, cookieName : "cookieBanner"

					// cookie timeout: 13 months in milliseconds
				, cookieTimeout : 33696000000

					// banner position
				, position : "bottom"

					// deploy to show cookie banner
				, delay : 600

					// selectors
				, selectors: {
					cookieBanner          : '#bJS_cookieBanner'
					, cookieBannerContent : '#bJS_cookieBannerContent'
					, acceptCookieBanner  : '.bJS_acceptCookieBanner'
				}
					// class names
				, classNames: {
					positionTop      : "b_cookieBannerPosition-top"
					, positionBottom : "b_cookieBannerPosition-bottom"
				}
					// states
				, states: {
					active : "b_cookieBannerActive"
				}
			};


			/**
			 * initialize
			 * @returns {*}
			 */
		function initialize() {

			_opts = $.extend({}, _defaultOptions, options );

				// check if cookie banner is needed
			if (hasConsent() === false) {

				// add cookie banner position and container
				if (_opts.position == "bottom") {
					$('body').append(_opts.htmlContainer);
					$(_opts.selectors.cookieBanner).addClass(_opts.classNames.positionBottom);

				} else if (_opts.position == "top") {
					$('body').prepend(_opts.htmlContainer);
					$(_opts.selectors.cookieBanner).addClass(_opts.classNames.positionTop);
				}

				// append cookie content
				$(_opts.selectors.cookieBanner).find(_opts.selectors.cookieBannerContent).append(_opts.htmlContent);

				// show cookie banner
				setTimeout(function() {
					$(_opts.selectors.cookieBanner).addClass(_opts.states.active);
				},_opts.delay);

				events();
			}

			return me;
		}


			/**
			 * events
			 */
		function events() {

				// click accept cookie banner
			$(document).on('click', _opts.selectors.acceptCookieBanner, function(evt) {
				evt.preventDefault();
				setCookie(true);
				// hide banner and remove it
				$(_opts.selectors.cookieBanner).removeClass(_opts.state.active);
				setTimeout(function() {
					$(_opts.selectors.cookieBanner).remove();
				},1000);
			});
		}


			/**
			 * set cookie
			 */
		function setCookie(value){
			var date = new Date();
			date.setTime(date.getTime() + _opts.cookieTimeout);
			document.cookie = _opts.cookieName + "=" + value + ";expires=" + date.toGMTString() + ";path=/";
		}


			/**
			 * Check if user already consent
			 */
		function hasConsent(){
			if (document.cookie.indexOf(_opts.cookieName+"=true") > -1) {
				return true;
			} else if (document.cookie.indexOf(_opts.cookieName+"=false") > -1) {
				return false;
			}
			return false;
		}

		return initialize();
	});
}));