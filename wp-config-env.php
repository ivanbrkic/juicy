<?php
/**
 * Setup environments.
 * Development environment is the default value and doesn't require a $hostname value.
 *
 * @version 1.0.3
 */

switch ( $hostname ) {
	case 'juicyblagdani.hr':
	case 'www.juicyblagdani.hr':
		define( 'WP_ENV', 'production' );
		break;

	default:
		define( 'WP_ENV', 'development' );
}
