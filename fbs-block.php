<?php
/**
 * Plugin Name:       AA Fbs Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Fazle Bari
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fbs-block
 *
 * @package           fbs-blocks
 */

 if (!defined('ABSPATH')) {
	die('-1');
}

/**
 * Only for developer
 * @author Fazle Bari <fazlebarisn@gmail.com>
 */
if( ! function_exists('dd') ){
	function dd( ...$vals){
		if( ! empty($vals) && is_array($vals) ){
			foreach($vals as $val ){
				echo "<pre>";
				var_dump($val);
				echo "</pre>";
			}
		}
	}
}


if ( ! defined( 'FBS_BLOCKS_DIR_PATH' ) ) {
	define( 'FBS_BLOCKS_DIR_PATH', __DIR__ );
}

require_once FBS_BLOCKS_DIR_PATH . '/inc/helpers/autoloader.php';

function fbs_blocks_plugin_instance() {
	\FBS_BLOCKS\Inc\FBS_BLOCKS::get_instance();
}

fbs_blocks_plugin_instance();
