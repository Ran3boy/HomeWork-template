<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div class="wrapper">
        <div class="container">
            <header class="header">
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                </div>
                <nav class="main__navigation" id="navMenu">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'header',
                        'container' => '',
                        'depth' => 0,
                    ));
                    ?>
                </nav>
                <div class="header__contact">
                    <a href="<?php echo get_field('header_btn')['url'] ?>" class="header__contact--item header__contact--item-1 btn"> <?php echo get_field('header_btn')['title'] ?></a>
                    <a href="<?php echo get_field('header_btn2')['url'] ?>" class="header__contact--item header__contact--item-2 btn"> <?php echo get_field('header_btn2')['title'] ?></a>
                </div>
            </header>