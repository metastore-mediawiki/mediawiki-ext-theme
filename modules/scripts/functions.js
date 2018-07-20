'use strict';

/**
 * Slide & fade toggle.
 */
jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
	return this.animate(
		{
			opacity: 'toggle',
			height: 'toggle',
		}, speed, easing, callback,
	);
};