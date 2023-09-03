<?php
/**
 * Register sidebars 
 *
 * @package Hadudu
 */

namespace FBS_BLOCKS\Inc;

use FBS_BLOCKS\Inc\Traits\Singleton;

class FBS_BLOCKS {

	use Singleton;

	protected function __construct() {
		// load class.
		// Assets::get_instance();


		$this->setup_hooks();
	}

	protected function setup_hooks() {
		add_action( 'after_setup_theme', [ $this, 'setup_theme'] );
	}



}