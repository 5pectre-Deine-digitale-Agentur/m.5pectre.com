<section id="work" class="side all">
  <div class="wrapper">
    <div class="grid">

      <?php $args = array( 'post_type' => 'Spectre-blank', 'posts_per_page' => 100, 'orderby' => 'rand' );
        $loop = new WP_Query( $args );
        while ( $loop->have_posts() ) : $loop->the_post(); ?>

        <a href="<?php the_permalink(); ?>" class="item item_v">
            <div class="item__image">
                <img src="<?php echo get_template_directory_uri(); ?>/img/assets/background.png" alt="">
            </div>

            <h4 class="item__title heading"><?php the_title(); ?></h4>
        </a>

      <?php endwhile; ?>

    </div>
  </div>
</section>
