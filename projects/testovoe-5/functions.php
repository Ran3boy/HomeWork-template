<?php


if (! defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}


function testovoe_setup()
{

    load_theme_textdomain('testovoe', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');


    add_theme_support('title-tag');


    add_theme_support('post-thumbnails');

    // Регистрация меню
    register_nav_menus(
        array(
            'header' => 'Шапка',
            'footer' => 'Футер',
        )
    );


    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Set up the WordPress core custom background feature.
    add_theme_support(
        'custom-background',
        apply_filters(
            'testovoe_custom_background_args',
            array(
                'default-color' => 'ffffff',
                'default-image' => '',
            )
        )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    add_theme_support(
        'custom-logo',
        array(
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );
}
add_action('after_setup_theme', 'testovoe_setup');






function testovoe_content_width()
{
    $GLOBALS['content_width'] = apply_filters('testovoe_content_width', 640);
}
add_action('after_setup_theme', 'testovoe_content_width', 0);



/**
 * Enqueue scripts and styles.
 */
function testovoe_scripts()
{
    wp_enqueue_style('testovoe-style', get_stylesheet_uri(), array(), _S_VERSION);

    wp_enqueue_style('reset', get_template_directory_uri() . '/css/reset.css', array(), _S_VERSION);
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', array(), _S_VERSION);

    wp_enqueue_script('testovoe-navigation', get_template_directory_uri() . './js/main.js', array(), _S_VERSION, true);
}
add_action('wp_enqueue_scripts', 'testovoe_scripts');
