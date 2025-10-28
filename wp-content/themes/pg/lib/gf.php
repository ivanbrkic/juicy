<?php

add_action( 'gform_after_submission_1', 'create_gallery_item_post', 10, 2 );

function create_gallery_item_post( $entry, $form ) {
	// Get field values
	$title    = rgar( $entry, '1' ); // ime_i_prezime
	$file_url = rgar( $entry, '5' ); // fotografija
	$adresa   = rgar( $entry, '3' ); // adresa
	$mobitel  = rgar( $entry, '4' ); // broj_mobitela

	// Create the post
	$post_id = wp_insert_post(
		[
			'post_title'  => $title,
			'post_type'   => 'gallery_item',
			'post_status' => 'draft',
		]
	);

	// add ACF metadata
	update_field( 'ime_i_prezime', $title, $post_id );
	update_field( 'fotografija', $file_url, $post_id );
	update_field( 'adresa', $adresa, $post_id );
	update_field( 'broj_mobitela', $mobitel, $post_id );
	update_field( 'entry_id', $entry['id'], $post_id );

	// Set the uploaded file as featured image
	if ( $file_url && $post_id && ! is_wp_error( $post_id ) ) {
		// Required for media handling
		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';

		// Get the file path from URL
		$uploads   = wp_upload_dir();
		$file_path = str_replace( $uploads['baseurl'], $uploads['basedir'], $file_url );

		// Check if file exists
		if ( file_exists( $file_path ) ) {
			// Create a temporary copy of the file
			$temp_file = wp_tempnam( basename( $file_path ) );
			copy( $file_path, $temp_file );

			// Prepare file data
			$file_array = [
				'name'     => basename( $file_path ),
				'tmp_name' => $temp_file,
				'error'    => 0,
				'size'     => filesize( $file_path ),
			];

			// Copy file to media library
			$attachment_id = media_handle_sideload( $file_array, $post_id );

			if ( ! is_wp_error( $attachment_id ) ) {
				set_post_thumbnail( $post_id, $attachment_id );
			}

			// Clean up temp file
			@unlink( $temp_file );
		}
	}
}
