'use strict';

/**
 * WikiEditor. Spoiler.
 */
function extJS_bbcSpoiler() {
	let spoilerWrapper = 'div.bbc-spoiler';
	let spoilerTitle = 'span.bbc-spoiler-title';
	let spoilerBody = 'div.bbc-spoiler-body';
	let spoilerContent = 'div.bbc-spoiler-content';
	let spoilerBodyClassHide = 'bbc-spoiler-body-hide';
	let spoilerBodyClassShow = 'bbc-spoiler-body-show';
	let spoilerIndicator = 'i.fa';
	let spoilerIndicatorClassHide = 'fa-plus-square-o';
	let spoilerIndicatorClassShow = 'fa-minus-square-o';
	let toggleSpeed = 200;

	jQuery(spoilerTitle).click(function () {
		jQuery(this).children(spoilerIndicator).toggleClass(spoilerIndicatorClassHide, spoilerIndicatorClassShow);
		jQuery(this).children(spoilerIndicator).toggleClass(spoilerIndicatorClassShow, spoilerIndicatorClassHide);
		jQuery(this).closest(spoilerWrapper).children(spoilerBody).toggleClass(spoilerBodyClassHide, spoilerBodyClassShow);
		jQuery(this).closest(spoilerWrapper).children(spoilerBody).toggleClass(spoilerBodyClassShow, spoilerBodyClassHide);
		jQuery(this).closest(spoilerWrapper).children(spoilerBody).children(spoilerContent).stop(true, true).slideFadeToggle(toggleSpeed);
		return false;
	});
}

/**
 * Loading functions.
 */
$(function () {
	extJS_bbcSpoiler();
});