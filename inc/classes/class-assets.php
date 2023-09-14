<?php
/**
 * Register sidebars 
 *
 * @package Fbs block
 */

namespace FBS_BLOCKS\Inc;

use FBS_BLOCKS\Inc\Traits\Singleton;

class Assets {

	use Singleton;

	protected function __construct() {
		$this->setup_hooks();
	}

	public function setup_hooks(){
		add_action( 'enqueue_block_editor_assets', [$this, 'block_editor_js'] );
	}

	/**
	 * To register block just need to add block name here
	 * block name should be same as block folder name
	 * @return array $block_names
	 * @author Fazle Bari
	 */
    public function block_editor_js(){
        wp_register_script( 'fbs-block', FBS_BLOCK_ASSETS . '/fbs-block.js', [], false, true );
        wp_enqueue_script('fbs-block');
    }

}