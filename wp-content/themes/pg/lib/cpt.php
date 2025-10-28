<?php

function register_gallery_item_post_type() {
	register_post_type(
		'gallery_item',
		[
			'labels'       => [
				'name'          => 'Gallery Items',
				'singular_name' => 'Gallery Item',
			],
			'public'       => false,
			'show_ui'      => true,
			'show_in_menu' => true,
			'capabilities' => [
				'create_posts'       => 'manage_options',
				'edit_post'          => 'manage_options',
				'edit_posts'         => 'manage_options',
				'edit_others_posts'  => 'manage_options',
				'delete_post'        => 'manage_options',
				'delete_posts'       => 'manage_options',
				'read_post'          => 'manage_options',
				'read_private_posts' => 'manage_options',
				'publish_posts'      => 'manage_options',
			],
			'has_archive'  => false,
			'supports'     => [ 'title', 'thumbnail' ],
			'show_in_rest' => false,
		]
	);
}

add_action( 'init', 'register_gallery_item_post_type' );

// Add the thumbnail column
function add_gallery_item_columns( $columns ) {
	$new_columns = [];
	foreach ( $columns as $key => $value ) {
		if ( $key === 'title' ) {
			$new_columns[ $key ] = $value;
			$new_columns['thumbnail'] = 'Fotografija';
		} else {
			$new_columns[ $key ] = $value;
		}
	}
	return $new_columns;
}
add_filter( 'manage_gallery_item_posts_columns', 'add_gallery_item_columns' );

// Populate the thumbnail column
function display_gallery_item_columns( $column, $post_id ) {
	if ( $column === 'thumbnail' ) {
		if ( has_post_thumbnail( $post_id ) ) {
			echo get_the_post_thumbnail( $post_id, 'medium' );
		} else {
			echo '-';
		}
	}
}
add_action( 'manage_gallery_item_posts_custom_column', 'display_gallery_item_columns', 10, 2 );

// Add some styling to control the thumbnail size in admin
function add_gallery_item_column_style() {
	echo '<style>
		.column-thumbnail { width: 150px; }
		.column-thumbnail img { max-width: 100%; height: auto; }
	</style>';
}
add_action( 'admin_head', 'add_gallery_item_column_style' );
