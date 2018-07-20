'use strict';

/**
 * WikiEditor. Submit post.
 */
function extJS_submitPost() {
	let formItems = [
		'#editform',
	];
	let inputItems = 'input[name=wpSave]';
	let keyCode01 = 10;
	let keyCode02 = 13;

	$(formItems.join()).keypress(function (event) {
		if (event.keyCode === keyCode01 || (event.ctrlKey && event.keyCode === keyCode02)) {
			$(this).find(inputItems).click();
			return false;
		}
	});
}

/**
 * WikiEditor. Wikificator.
 */
function extJS_wikiFicator() {
	if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
		mw.loader.load('https://ru.wikipedia.org/w/index.php?title=MediaWiki:Gadget-wikificator.js&action=raw&ctype=text/javascript');
	}

	let customizeToolbar = function () {

		$('#wpTextbox1').wikiEditor('addToToolbar', {
			'section': 'main',
			'group': 'format',
			'tools': {
				'wikify': {
					label: 'Викификатор',
					type: 'button',
					icon: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Wikify-toolbutton.png',
					action: {
						type: 'callback',
						execute: function (context) {
							Wikify();
						}
					}
				}
			}
		});
	};

	if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
		mw.loader.using('user.options', function () {
			if (mw.user.options.get('usebetatoolbar')) {
				mw.loader.using('ext.wikiEditor.toolbar', function () {
					$(document).ready(customizeToolbar);
				});
			}
		});
	}
}

/**
 * WikiEditor. Summary buttons.
 */
function extJS_summaryButtons() {
	if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
		mw.loader.load('https://ru.wikipedia.org/w/load.php?modules=ext.gadget.summaryButtons');
	}
}

/**
 * Loading functions.
 */
$(function () {
	extJS_submitPost();
	extJS_wikiFicator();
	extJS_summaryButtons();
});