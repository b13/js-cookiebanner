js-cookieBanner
===================

Lightweight javascript cookie banner plugin

### Default use

	window.cookieBanner(options);
	
### Use as AMD module
	require(['js-cookieBanner'], function(cookieBanner) {
		new cookieBanner(options);
	});
	
### Default options
	
	options = {
			// html cookie banner container
		htmlContainer: '<div id="bJS_cookieBanner" class="b_cookieBanner">' +
					   '<div class="c_contentContainer">' +
					   '<div id="bJS_cookieBannerContent" class="c_content">' +
					   '</div>' +
					   '</div>' +
					   '</div>'

			// html cookie banner content
			// will append to #bJS_cookieBannerContent
		, htmlContent: '<p>We use cookies on this site to enhance your user experience</p>' +
					   '<a href="#">more infos</a><button class="bJS_acceptCookieBanner">accept</button>'

			// cookie name
		, cookieName: "cookieBanner"

			// cookie timeout: 13 months in milliseconds
		, cookieTimeout: 33696000000

			// banner position
			// can be "bottom" || "top"	
		, position: "bottom"

			// deploy to show cookie banner
		, delay: 600

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
	}