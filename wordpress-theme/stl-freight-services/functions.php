<?php
/**
 * STL Freight Services Theme Functions
 * Matching React App Design - Complete Version
 */

// Theme Setup
function stl_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'stl-freight-services'),
        'footer'  => __('Footer Menu', 'stl-freight-services'),
    ));
}
add_action('after_setup_theme', 'stl_theme_setup');

// Enqueue scripts and styles
function stl_enqueue_scripts() {
    wp_enqueue_style('stl-style', get_stylesheet_uri(), array(), '2.1.0');
    wp_enqueue_script('stl-main', get_template_directory_uri() . '/assets/js/main.js', array(), '2.1.0', true);
}
add_action('wp_enqueue_scripts', 'stl_enqueue_scripts');

// ============================================
// CUSTOMIZER SETTINGS - Full Image Upload Support
// ============================================
function stl_customize_register($wp_customize) {
    
    // ========================================
    // HERO SECTION - With Image Uploads
    // ========================================
    $wp_customize->add_section('stl_hero_section', array(
        'title'       => __('Hero Section', 'stl-freight-services'),
        'description' => __('Configure the hero banner slides with background images and content.', 'stl-freight-services'),
        'priority'    => 30,
    ));

    // Default images from theme
    $default_slide_1 = get_template_directory_uri() . '/assets/images/hero-slide-1.jpg';
    $default_slide_2 = get_template_directory_uri() . '/assets/images/hero-slide-2.jpg';
    $default_slide_3 = get_template_directory_uri() . '/assets/images/hero-slide-3.jpg';

    // Hero Slide 1
    $wp_customize->add_setting('stl_hero_slide_1_image', array(
        'default'           => $default_slide_1,
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'stl_hero_slide_1_image', array(
        'label'       => __('Slide 1 Background Image', 'stl-freight-services'),
        'description' => __('Recommended size: 1920x1080px. Use images with STL branded vehicles for best results.', 'stl-freight-services'),
        'section'     => 'stl_hero_section',
        'settings'    => 'stl_hero_slide_1_image',
    )));

    $wp_customize->add_setting('stl_hero_slide_1_subtitle', array(
        'default'           => 'International Freight Solutions',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_1_subtitle', array(
        'label'   => __('Slide 1 Subtitle', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_1_title', array(
        'default'           => 'Your Trusted Partner in',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_1_title', array(
        'label'   => __('Slide 1 Title', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_1_highlight', array(
        'default'           => 'Global Logistics',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_1_highlight', array(
        'label'   => __('Slide 1 Highlight Text', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_1_description', array(
        'default'           => 'Seamless end-to-end supply chain solutions with unmatched reliability and efficiency across 120+ countries.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_hero_slide_1_description', array(
        'label'   => __('Slide 1 Description', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'textarea',
    ));

    // Hero Slide 2
    $wp_customize->add_setting('stl_hero_slide_2_image', array(
        'default'           => $default_slide_2,
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'stl_hero_slide_2_image', array(
        'label'       => __('Slide 2 Background Image', 'stl-freight-services'),
        'description' => __('Recommended size: 1920x1080px.', 'stl-freight-services'),
        'section'     => 'stl_hero_section',
        'settings'    => 'stl_hero_slide_2_image',
    )));

    $wp_customize->add_setting('stl_hero_slide_2_subtitle', array(
        'default'           => 'Road & Rail Transport',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_2_subtitle', array(
        'label'   => __('Slide 2 Subtitle', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_2_title', array(
        'default'           => 'Delivering Excellence',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_2_title', array(
        'label'   => __('Slide 2 Title', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_2_highlight', array(
        'default'           => 'Every Mile',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_2_highlight', array(
        'label'   => __('Slide 2 Highlight Text', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_2_description', array(
        'default'           => 'Comprehensive inland transportation services ensuring timely and secure delivery of your cargo.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_hero_slide_2_description', array(
        'label'   => __('Slide 2 Description', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'textarea',
    ));

    // Hero Slide 3
    $wp_customize->add_setting('stl_hero_slide_3_image', array(
        'default'           => $default_slide_3,
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'stl_hero_slide_3_image', array(
        'label'       => __('Slide 3 Background Image', 'stl-freight-services'),
        'description' => __('Recommended size: 1920x1080px.', 'stl-freight-services'),
        'section'     => 'stl_hero_section',
        'settings'    => 'stl_hero_slide_3_image',
    )));

    $wp_customize->add_setting('stl_hero_slide_3_subtitle', array(
        'default'           => 'Warehousing & Distribution',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_3_subtitle', array(
        'label'   => __('Slide 3 Subtitle', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_3_title', array(
        'default'           => 'Strategic Storage',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_3_title', array(
        'label'   => __('Slide 3 Title', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_3_highlight', array(
        'default'           => 'Solutions',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_hero_slide_3_highlight', array(
        'label'   => __('Slide 3 Highlight Text', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_hero_slide_3_description', array(
        'default'           => 'Modern warehousing facilities with real-time inventory management and seamless distribution networks.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_hero_slide_3_description', array(
        'label'   => __('Slide 3 Description', 'stl-freight-services'),
        'section' => 'stl_hero_section',
        'type'    => 'textarea',
    ));

    // ========================================
    // STATS SECTION - With Background Image
    // ========================================
    $wp_customize->add_section('stl_stats_section', array(
        'title'       => __('Stats Section', 'stl-freight-services'),
        'description' => __('Configure the company statistics section.', 'stl-freight-services'),
        'priority'    => 35,
    ));

    $wp_customize->add_setting('stl_stats_bg_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'stl_stats_bg_image', array(
        'label'       => __('Stats Background Image', 'stl-freight-services'),
        'description' => __('Optional parallax background image for the stats section.', 'stl-freight-services'),
        'section'     => 'stl_stats_section',
        'settings'    => 'stl_stats_bg_image',
    )));

    $wp_customize->add_setting('stl_stats_eyebrow', array(
        'default'           => 'Since 2020',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_stats_eyebrow', array(
        'label'   => __('Stats Eyebrow Text', 'stl-freight-services'),
        'section' => 'stl_stats_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_stats_title', array(
        'default'           => "Pakistan's Leading",
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_stats_title', array(
        'label'   => __('Stats Title', 'stl-freight-services'),
        'section' => 'stl_stats_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_stats_highlight', array(
        'default'           => 'Forwarding & Clearing Agents',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_stats_highlight', array(
        'label'   => __('Stats Highlight Text', 'stl-freight-services'),
        'section' => 'stl_stats_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_stats_description', array(
        'default'           => 'Sam Transe Logistics has been committed to providing exceptional, reliable & innovative solutions in moving by Land, by Air, and by Ship.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_stats_description', array(
        'label'   => __('Stats Description', 'stl-freight-services'),
        'section' => 'stl_stats_section',
        'type'    => 'textarea',
    ));

    // Stats Values
    $stats_defaults = array(
        1 => array('value' => '5+', 'label' => 'Business Years'),
        2 => array('value' => '5+', 'label' => 'Years of Professionalism'),
        3 => array('value' => '120+', 'label' => 'Overseas Routes'),
        4 => array('value' => '5000+', 'label' => 'Happy Clients'),
    );

    for ($i = 1; $i <= 4; $i++) {
        $wp_customize->add_setting("stl_stat_{$i}_value", array(
            'default'           => $stats_defaults[$i]['value'],
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $wp_customize->add_control("stl_stat_{$i}_value", array(
            'label'   => sprintf(__('Stat %d Value', 'stl-freight-services'), $i),
            'section' => 'stl_stats_section',
            'type'    => 'text',
        ));

        $wp_customize->add_setting("stl_stat_{$i}_label", array(
            'default'           => $stats_defaults[$i]['label'],
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $wp_customize->add_control("stl_stat_{$i}_label", array(
            'label'   => sprintf(__('Stat %d Label', 'stl-freight-services'), $i),
            'section' => 'stl_stats_section',
            'type'    => 'text',
        ));
    }

    // ========================================
    // WHY CHOOSE US SECTION
    // ========================================
    $wp_customize->add_section('stl_why_choose_section', array(
        'title'       => __('Why Choose Us Section', 'stl-freight-services'),
        'description' => __('Configure the features and benefits section.', 'stl-freight-services'),
        'priority'    => 37,
    ));

    $wp_customize->add_setting('stl_why_choose_eyebrow', array(
        'default'           => 'Why Choose Sam Transe',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_why_choose_eyebrow', array(
        'label'   => __('Eyebrow Text', 'stl-freight-services'),
        'section' => 'stl_why_choose_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_why_choose_title', array(
        'default'           => 'We Have',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_why_choose_title', array(
        'label'   => __('Title', 'stl-freight-services'),
        'section' => 'stl_why_choose_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_why_choose_highlight', array(
        'default'           => '5+ Years',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_why_choose_highlight', array(
        'label'   => __('Highlight Text', 'stl-freight-services'),
        'section' => 'stl_why_choose_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_why_choose_subtitle', array(
        'default'           => 'Of Business Experience',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_why_choose_subtitle', array(
        'label'   => __('Subtitle', 'stl-freight-services'),
        'section' => 'stl_why_choose_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_why_choose_description', array(
        'default'           => 'Sam Transe Logistics besides locally does frequent consolidation & deconsolidation overseas, focusing & specializing in Europe, USA/Canada, and Far East Asia.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_why_choose_description', array(
        'label'   => __('Description', 'stl-freight-services'),
        'section' => 'stl_why_choose_section',
        'type'    => 'textarea',
    ));

    // ========================================
    // SERVICES SECTION - With Image Upload
    // ========================================
    $wp_customize->add_section('stl_services_section', array(
        'title'       => __('Services Section', 'stl-freight-services'),
        'description' => __('Configure the services showcase section.', 'stl-freight-services'),
        'priority'    => 40,
    ));

    $wp_customize->add_setting('stl_services_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'stl_services_image', array(
        'label'       => __('Services Side Image', 'stl-freight-services'),
        'description' => __('Image displayed alongside the services grid.', 'stl-freight-services'),
        'section'     => 'stl_services_section',
        'settings'    => 'stl_services_image',
    )));

    $wp_customize->add_setting('stl_services_image_title', array(
        'default'           => 'Full-Service Logistics',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_services_image_title', array(
        'label'   => __('Services Image Title', 'stl-freight-services'),
        'section' => 'stl_services_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_services_image_text', array(
        'default'           => 'Sam Transe Logistics is a Full-Service Logistics Company providing a vast range of freight and transit services.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_services_image_text', array(
        'label'   => __('Services Image Text', 'stl-freight-services'),
        'section' => 'stl_services_section',
        'type'    => 'textarea',
    ));

    // ========================================
    // TESTIMONIALS SECTION
    // ========================================
    $wp_customize->add_section('stl_testimonials_section', array(
        'title'       => __('Testimonials Section', 'stl-freight-services'),
        'description' => __('Configure client testimonials.', 'stl-freight-services'),
        'priority'    => 45,
    ));

    $testimonial_defaults = array(
        1 => array('name' => 'Ahmed Hassan', 'company' => 'Global Traders Ltd.', 'text' => 'Sam Transe has been our logistics partner for over 10 years. Their reliability and professionalism in handling our cargo shipments from Europe is unmatched.', 'rating' => 5),
        2 => array('name' => 'Sarah Mitchell', 'company' => 'Pacific Imports Inc.', 'text' => 'Outstanding service! The team handled our complex project cargo with expertise. Their customs clearance process is seamless.', 'rating' => 5),
        3 => array('name' => 'Muhammad Khan', 'company' => 'Khan Enterprises', 'text' => "We've been working with Sam Transe for our Afghan transit shipments. Their knowledge of cross-border regulations is excellent.", 'rating' => 5),
        4 => array('name' => 'Jennifer Lee', 'company' => 'AutoWorld Japan', 'text' => 'Excellent car import service from Japan. The documentation was handled professionally, and the vehicle arrived in perfect condition.', 'rating' => 4),
        5 => array('name' => 'Rashid Ali', 'company' => 'Textile Masters', 'text' => 'The consolidation services provided by Sam Transe have significantly reduced our shipping costs. Their warehousing facilities are top-notch.', 'rating' => 5),
        6 => array('name' => 'David Thompson', 'company' => 'UK Exports Co.', 'text' => 'Professional, efficient, and reliable. Sam Transe made our first export to Pakistan incredibly smooth.', 'rating' => 5),
    );

    for ($i = 1; $i <= 6; $i++) {
        $wp_customize->add_setting("stl_testimonial_{$i}_name", array(
            'default'           => $testimonial_defaults[$i]['name'],
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $wp_customize->add_control("stl_testimonial_{$i}_name", array(
            'label'   => sprintf(__('Testimonial %d Name', 'stl-freight-services'), $i),
            'section' => 'stl_testimonials_section',
            'type'    => 'text',
        ));

        $wp_customize->add_setting("stl_testimonial_{$i}_company", array(
            'default'           => $testimonial_defaults[$i]['company'],
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $wp_customize->add_control("stl_testimonial_{$i}_company", array(
            'label'   => sprintf(__('Testimonial %d Company', 'stl-freight-services'), $i),
            'section' => 'stl_testimonials_section',
            'type'    => 'text',
        ));

        $wp_customize->add_setting("stl_testimonial_{$i}_text", array(
            'default'           => $testimonial_defaults[$i]['text'],
            'sanitize_callback' => 'sanitize_textarea_field',
        ));
        $wp_customize->add_control("stl_testimonial_{$i}_text", array(
            'label'   => sprintf(__('Testimonial %d Review', 'stl-freight-services'), $i),
            'section' => 'stl_testimonials_section',
            'type'    => 'textarea',
        ));

        $wp_customize->add_setting("stl_testimonial_{$i}_rating", array(
            'default'           => $testimonial_defaults[$i]['rating'],
            'sanitize_callback' => 'absint',
        ));
        $wp_customize->add_control("stl_testimonial_{$i}_rating", array(
            'label'       => sprintf(__('Testimonial %d Rating (1-5)', 'stl-freight-services'), $i),
            'section'     => 'stl_testimonials_section',
            'type'        => 'number',
            'input_attrs' => array('min' => 1, 'max' => 5),
        ));
    }

    // ========================================
    // QUOTE FORM SECTION
    // ========================================
    $wp_customize->add_section('stl_quote_section', array(
        'title'       => __('Quote Form Section', 'stl-freight-services'),
        'description' => __('Configure the quote request form section.', 'stl-freight-services'),
        'priority'    => 47,
    ));

    $wp_customize->add_setting('stl_quote_eyebrow', array(
        'default'           => "Let's Do Business",
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_quote_eyebrow', array(
        'label'   => __('Quote Section Eyebrow', 'stl-freight-services'),
        'section' => 'stl_quote_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_quote_title', array(
        'default'           => 'Get a Free',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_quote_title', array(
        'label'   => __('Quote Section Title', 'stl-freight-services'),
        'section' => 'stl_quote_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_quote_highlight', array(
        'default'           => 'Quotation',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_quote_highlight', array(
        'label'   => __('Quote Section Highlight', 'stl-freight-services'),
        'section' => 'stl_quote_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_quote_description', array(
        'default'           => "Tell us about your shipping needs and we'll provide you with a competitive quote. Our team responds within 24 hours.",
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('stl_quote_description', array(
        'label'   => __('Quote Section Description', 'stl-freight-services'),
        'section' => 'stl_quote_section',
        'type'    => 'textarea',
    ));

    $wp_customize->add_setting('stl_quote_email', array(
        'default'           => 'samtranselogistics@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('stl_quote_email', array(
        'label'       => __('Quote Submission Email', 'stl-freight-services'),
        'description' => __('Email address where quote submissions are sent.', 'stl-freight-services'),
        'section'     => 'stl_quote_section',
        'type'        => 'email',
    ));

    // ========================================
    // CONTACT SECTION
    // ========================================
    $wp_customize->add_section('stl_contact_section', array(
        'title'       => __('Contact Information', 'stl-freight-services'),
        'description' => __('Configure company contact details displayed in footer and info bar.', 'stl-freight-services'),
        'priority'    => 50,
    ));

    $wp_customize->add_setting('stl_phone', array(
        'default'           => '+92 318 483 3990',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_phone', array(
        'label'   => __('Phone Number', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_email', array(
        'default'           => 'samtranselogistics@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('stl_email', array(
        'label'   => __('Email Address', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'email',
    ));

    $wp_customize->add_setting('stl_address', array(
        'default'           => 'Karachi, Pakistan',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_address', array(
        'label'   => __('Address', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_working_hours', array(
        'default'           => 'Mon - Sat: 9AM - 6PM',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_working_hours', array(
        'label'   => __('Working Hours', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stl_whatsapp', array(
        'default'           => '923184833990',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('stl_whatsapp', array(
        'label'       => __('WhatsApp Number', 'stl-freight-services'),
        'description' => __('Enter without + or spaces (e.g., 923184833990)', 'stl-freight-services'),
        'section'     => 'stl_contact_section',
        'type'        => 'text',
    ));

    // Social Media Links
    $wp_customize->add_setting('stl_facebook', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('stl_facebook', array(
        'label'   => __('Facebook URL', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'url',
    ));

    $wp_customize->add_setting('stl_twitter', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('stl_twitter', array(
        'label'   => __('Twitter URL', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'url',
    ));

    $wp_customize->add_setting('stl_linkedin', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('stl_linkedin', array(
        'label'   => __('LinkedIn URL', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'url',
    ));

    $wp_customize->add_setting('stl_instagram', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('stl_instagram', array(
        'label'   => __('Instagram URL', 'stl-freight-services'),
        'section' => 'stl_contact_section',
        'type'    => 'url',
    ));
}
add_action('customize_register', 'stl_customize_register');

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get testimonials from theme customizer
 */
function stl_get_testimonials() {
    $testimonials = array();
    
    for ($i = 1; $i <= 6; $i++) {
        $name = get_theme_mod("stl_testimonial_{$i}_name", '');
        if (!empty($name)) {
            $testimonials[] = array(
                'name'     => $name,
                'company'  => get_theme_mod("stl_testimonial_{$i}_company", ''),
                'text'     => get_theme_mod("stl_testimonial_{$i}_text", ''),
                'rating'   => (int) get_theme_mod("stl_testimonial_{$i}_rating", 5),
                'initials' => stl_get_initials($name),
            );
        }
    }
    
    return $testimonials;
}

/**
 * Get hero slides from theme customizer
 */
function stl_get_hero_slides() {
    $slides = array();
    $default_images = array(
        1 => get_template_directory_uri() . '/assets/images/hero-slide-1.jpg',
        2 => get_template_directory_uri() . '/assets/images/hero-slide-2.jpg',
        3 => get_template_directory_uri() . '/assets/images/hero-slide-3.jpg',
    );
    
    for ($i = 1; $i <= 3; $i++) {
        $slides[] = array(
            'image'       => get_theme_mod("stl_hero_slide_{$i}_image", $default_images[$i]),
            'subtitle'    => get_theme_mod("stl_hero_slide_{$i}_subtitle", ''),
            'title'       => get_theme_mod("stl_hero_slide_{$i}_title", ''),
            'highlight'   => get_theme_mod("stl_hero_slide_{$i}_highlight", ''),
            'description' => get_theme_mod("stl_hero_slide_{$i}_description", ''),
        );
    }
    
    return $slides;
}

/**
 * Get initials from a name
 */
function stl_get_initials($name) {
    $words = explode(' ', trim($name));
    $initials = '';
    foreach ($words as $word) {
        if (!empty($word)) {
            $initials .= strtoupper($word[0]);
        }
    }
    return substr($initials, 0, 2);
}

/**
 * Get Why Choose Us features
 */
function stl_get_features() {
    return array(
        array(
            'icon' => 'globe',
            'title' => 'Global Network',
            'description' => 'Extensive network spanning Europe, USA/Canada, and Far East Asia for seamless international operations.',
        ),
        array(
            'icon' => 'clock',
            'title' => '5+ Years Experience',
            'description' => 'Decades of expertise in freight forwarding, customs clearance, and logistics solutions.',
        ),
        array(
            'icon' => 'shield',
            'title' => 'Reliable & Secure',
            'description' => 'Your cargo is protected with our comprehensive insurance and security protocols.',
        ),
        array(
            'icon' => 'headphones',
            'title' => '24/7 Support',
            'description' => 'Round-the-clock customer service to track and manage your shipments anytime.',
        ),
        array(
            'icon' => 'trending-up',
            'title' => 'Competitive Rates',
            'description' => 'Best-in-class pricing without compromising on service quality or reliability.',
        ),
        array(
            'icon' => 'users',
            'title' => 'Expert Team',
            'description' => 'Skilled professionals dedicated to handling your logistics needs efficiently.',
        ),
    );
}

/**
 * Handle quote form submission
 */
function stl_handle_quote_submission() {
    if (!isset($_POST['stl_quote_nonce']) || !wp_verify_nonce($_POST['stl_quote_nonce'], 'stl_quote_submit')) {
        wp_die('Security check failed');
    }

    $to = get_theme_mod('stl_quote_email', 'samtranselogistics@gmail.com');
    $name = sanitize_text_field($_POST['full_name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $company = sanitize_text_field($_POST['company']);
    $service = sanitize_text_field($_POST['service_type']);
    $origin = sanitize_text_field($_POST['origin']);
    $destination = sanitize_text_field($_POST['destination']);
    $message = sanitize_textarea_field($_POST['message']);

    $subject = 'New Quote Request from ' . $name;
    
    $body = "New Quote Request\n\n";
    $body .= "Name: {$name}\n";
    $body .= "Email: {$email}\n";
    $body .= "Phone: {$phone}\n";
    $body .= "Company: {$company}\n";
    $body .= "Service: {$service}\n";
    $body .= "Origin: {$origin}\n";
    $body .= "Destination: {$destination}\n";
    $body .= "Message:\n{$message}\n";

    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $email,
    );

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_redirect(add_query_arg('quote', 'success', home_url('/')));
    } else {
        wp_redirect(add_query_arg('quote', 'error', home_url('/')));
    }
    exit;
}
add_action('admin_post_nopriv_stl_quote_submit', 'stl_handle_quote_submission');
add_action('admin_post_stl_quote_submit', 'stl_handle_quote_submission');
