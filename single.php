<?php get_header(); ?>
<?php
global $post;
$output =  apply_filters( 'the_content', $post->post_content );
$output_title =  apply_filters( 'the_title', $post->post_title );
echo '<h2>' . $output_title . '</h2>';
echo $output;
?>


<?php 
// Add related category posts
$related = get_posts( array( 'category__in' => wp_get_post_categories($post->ID), 'numberposts' => 5, 'post__not_in' => array($post->ID) ) );
if( $related ) foreach( $related as $post ) {
setup_postdata($post); ?>
 <ul>
        <li>
        <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title(); ?>"><?php the_title(); ?></a>

        </li>
    </ul>
<?php }
wp_reset_postdata(); ?>



<!-- Add comment section -->
<?php
 if ( comments_open()) :
 comments_template();
endif;
?>
<?php get_footer() ?>
