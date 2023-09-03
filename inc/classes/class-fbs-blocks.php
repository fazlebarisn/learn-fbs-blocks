<?php
/**
 * Register sidebars 
 *
 * @package Fbs block
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

	public function setup_hooks(){
		add_action( 'init', [$this, 'fbs_blocks'] );
		add_filter( 'block_categories_all', [$this, 'register_block_category'] );
	}

	public function register_block(){
		$names = [
			'block',
			'block2'
		];

		return $names;
	}

	public function fbs_blocks(){

		if( is_array( $this->register_block() ) && ! empty( $this->register_block() ) ){
			foreach( $this->register_block() as $block_name ){
				register_block_type( FBS_BLOCKS_DIR_PATH . "/build/$block_name" );
			}
		}
	}

	public function fbs_categories(){
		$category_names = [
			[
				'title'	=> esc_html__( 'Fbs Test', 'fbs-block' ),
				'slug' => 'fbs-test',
			],
			[
				'title'	=> esc_html__( 'Fbs Blocks', 'fbs-block' ),
				'slug' => 'fbs-blocks',
			],
		];

		return $category_names;
	}

	public function register_block_category( $categories ){

		$category_slugs = wp_list_pluck( $categories, 'slug' );

		if( is_array( $this->fbs_categories() ) && ! empty( $this->fbs_categories() ) ){
			foreach ( $this->fbs_categories() as $category ){
				if ( ! in_array( $category['slug'], $category_slugs, true ) ) {

					// Add the category to the array.
					$categories[] = $category;
		
				}
			}
		}
		// Return the array of categories.
		return $categories;
	}

}