<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package tester
 */

get_header(); ?>

<div class="gallery">
	<div class="gallery__grid">

		<?php
		$args = array(
			'post_type' => 'attachment',
			'post_mime_type' => 'image',
			'orderby' => 'post_date',
			'order' => 'desc',
			'posts_per_page' => '30',
			'post_status' => 'inherit'
		);

		$loop = new WP_Query($args);

		while ($loop->have_posts()) : $loop->the_post();

			$image = wp_get_attachment_image_src(get_the_ID());
			echo "<div class=\"gallery__grid__item\"><img src='" . $image[0] . "'></div>";

		endwhile;
		?>

	</div>
</div>

<?php get_footer(); ?>
