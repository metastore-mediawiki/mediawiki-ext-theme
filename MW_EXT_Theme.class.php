<?php

namespace MediaWiki\Extension\METADATA;

use OutputPage, Skin;

/**
 * Class MW_EXT_Theme
 */
class MW_EXT_Theme {

	/**
	 * Load resource function.
	 *
	 * @param OutputPage $out
	 * @param Skin $skin
	 *
	 * @return bool
	 */
	public static function onBeforePageDisplay( OutputPage $out, Skin $skin ) {
		$out->addStyle( 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i|Roboto:400,400i,700,700i|Fira+Mono:400,700&amp;subset=cyrillic', 'screen' );
		$out->addStyle( 'https://use.fontawesome.com/releases/v5.1.1/css/all.css', 'screen' );
		$out->addStyle( '/extensions/MW_EXT_Meta/modules/styles/theme.css', 'screen' );
		$out->addModules( [ 'ext.mw.meta' ] );

		return true;
	}
}
