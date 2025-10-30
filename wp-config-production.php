<?php
/**
 * Production settings.
 *
 * @version 1.0.3
 */

/**
 * Database configuration.
 */
define( 'DB_NAME', 'blagdanijuicyhr' ); // The name of the database for WordPress.
define( 'DB_USER', 'blagdanijuicyhr' ); // MySQL database username.
define( 'DB_PASSWORD', 'IZz1qfkZFaIkwCr' ); // MySQL database password.
define( 'DB_HOST', 'localhost' ); // MySQL hostname.

/**
 * Disable WordPress from editing our files.
 */
define( 'DISALLOW_FILE_EDIT', true ); // File editor.
define( 'DISALLOW_FILE_MODS', true ); // File modifications.

/**
 * Debug.
 */
// WordPress debug.
define( 'SCRIPT_DEBUG', false );
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );

// Neuralab debug.
define( 'SHOW_DEBUG_CONSOLE', false );
define( 'SHOW_RESPONSIVE_CONSOLE', false );

/**
 * Force SSL in WP Admin.
 */
$_SERVER['HTTPS'] = 'on';
define( 'FORCE_SSL_ADMIN', false );
define( 'FORCE_SSL_LOGIN', false );

/**
 * Memory limit.
 */
define( 'WP_MEMORY_LIMIT', '256M' );
