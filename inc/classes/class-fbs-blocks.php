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
		add_filter( 'block_categories_all', [$this, 'fbs_block_category'] );
	}

	/**
	 * To register block just need to add block name here
	 * block name should be same as block folder name
	 * @return array $block_names
	 * @author Fazle Bari
	 */
	public function register_block(){
		$block_names = [
			'testimonial',
			'subscribe'
		];
		
		return $block_names;
	}

	/**
	 * To register block a categoy just need to add the expand the array
	 * add title and slug
	 * slug should be unicq 
	 * @return array $category_names
	 * @author Fazle Bari
	 */
	public function register_categories(){
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

	/**
	 * loop though the $block_names array and register block
	 * @return void
	 * @author Fazle Bari
	 */
	public function fbs_blocks(){

		if( is_array( $this->register_block() ) && ! empty( $this->register_block() ) ){
			foreach( $this->register_block() as $block_name ){
				register_block_type( FBS_BLOCKS_DIR_PATH . "/build/$block_name" );
			}
		}
	}

	/**
	 * loop though the $category_names array and register new  block category
	 * @return void
	 * @author Fazle Bari
	 */
	public function fbs_block_category( $categories ){

		$category_slugs = wp_list_pluck( $categories, 'slug' );

		if( is_array( $this->register_categories() ) && ! empty( $this->register_categories() ) ){
			foreach ( $this->register_categories() as $category ){
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