<div class="py-8" id="">
<div class="wrapper">
	<div class="row gallery">
	<?php

$images = new WP_Query(
	[
		'post_type'      => 'gallery_item',
		'post_status'    => 'publish',
		'orderby'        => 'rand',
		'posts_per_page' => 12,

	]
);

if ( $images->have_posts() ) {
	while ( $images->have_posts() ) {
		$images->the_post();

		$image = get_the_post_thumbnail_url( get_the_ID(), 'large' );
		?>
		<div class="col-12 col-sm-4 gallery__item">
			<div class="">
				<img src="<?php echo esc_url( $image ); ?>" />
			</div>
		</div>
		<?php
	}
}
	?>
	</div>
</div>
