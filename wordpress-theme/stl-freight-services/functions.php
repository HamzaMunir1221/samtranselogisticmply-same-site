<?php
/**
 * Theme functions and definitions
 * @package STL_Freight_Services
 */

// Theme Setup
function stl_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'stl-freight-services'),
        'footer' => __('Footer Menu', 'stl-freight-services'),
    ));
}
add_action('after_setup_theme', 'stl_theme_setup');

// Enqueue styles and scripts
function stl_enqueue_scripts() {
    wp_enqueue_style('stl-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('stl-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'stl_enqueue_scripts');

// Customizer Settings
function stl_customize_register($wp_customize) {
    
    // Hero Section
    $wp_customize->add_section('stl_hero_section', array(
        'title' => __('Hero Section', 'stl-freight-services'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('stl_hero_brand', array('default' => 'STL', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('stl_hero_brand', array('label' => __('Brand Name', 'stl-freight-services'), 'section' => 'stl_hero_section', 'type' => 'text'));
    
    $wp_customize->add_setting('stl_hero_title', array('default' => 'Global Freight Solutions', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('stl_hero_title', array('label' => __('Hero Title', 'stl-freight-services'), 'section' => 'stl_hero_section', 'type' => 'text'));
    
    $wp_customize->add_setting('stl_hero_subtitle', array('default' => 'Your trusted partner in international logistics and freight forwarding since 2010', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('stl_hero_subtitle', array('label' => __('Hero Subtitle', 'stl-freight-services'), 'section' => 'stl_hero_section', 'type' => 'textarea'));
    
    // Services Section
    $wp_customize->add_section('stl_services_section', array(
        'title' => __('Services Section', 'stl-freight-services'),
        'priority' => 35,
    ));
    
    for ($i = 1; $i <= 6; $i++) {
        $defaults = array(
            1 => array('title' => 'Freight Forwarding', 'desc' => 'Complete sea, air, and land freight solutions worldwide'),
            2 => array('title' => 'Custom Brokerage', 'desc' => 'Expert customs clearance and documentation services'),
            3 => array('title' => 'Warehousing', 'desc' => 'Secure storage and inventory management facilities'),
            4 => array('title' => 'Inland Transport', 'desc' => 'Door-to-door delivery across Pakistan and beyond'),
            5 => array('title' => 'Supply Chain', 'desc' => 'End-to-end supply chain management solutions'),
            6 => array('title' => 'Car Import', 'desc' => 'Specialized vehicle import from Japan, UK, and UAE'),
        );
        
        $wp_customize->add_setting("stl_service_{$i}_title", array('default' => $defaults[$i]['title'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_service_{$i}_title", array('label' => sprintf(__('Service %d Title', 'stl-freight-services'), $i), 'section' => 'stl_services_section', 'type' => 'text'));
        
        $wp_customize->add_setting("stl_service_{$i}_desc", array('default' => $defaults[$i]['desc'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_service_{$i}_desc", array('label' => sprintf(__('Service %d Description', 'stl-freight-services'), $i), 'section' => 'stl_services_section', 'type' => 'textarea'));
    }
    
    // Stats Section
    $wp_customize->add_section('stl_stats_section', array(
        'title' => __('Stats Section', 'stl-freight-services'),
        'priority' => 40,
    ));
    
    $stats_defaults = array(
        1 => array('value' => '15', 'label' => 'Years Experience'),
        2 => array('value' => '500', 'label' => 'Happy Clients'),
        3 => array('value' => '50', 'label' => 'Countries Served'),
        4 => array('value' => '10000', 'label' => 'Shipments Delivered'),
    );
    
    for ($i = 1; $i <= 4; $i++) {
        $wp_customize->add_setting("stl_stat_{$i}_value", array('default' => $stats_defaults[$i]['value'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_stat_{$i}_value", array('label' => sprintf(__('Stat %d Value', 'stl-freight-services'), $i), 'section' => 'stl_stats_section', 'type' => 'text'));
        
        $wp_customize->add_setting("stl_stat_{$i}_label", array('default' => $stats_defaults[$i]['label'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_stat_{$i}_label", array('label' => sprintf(__('Stat %d Label', 'stl-freight-services'), $i), 'section' => 'stl_stats_section', 'type' => 'text'));
    }
    
    // Testimonials Section
    $wp_customize->add_section('stl_testimonials_section', array(
        'title' => __('Testimonials Section', 'stl-freight-services'),
        'priority' => 45,
    ));
    
    $testimonial_defaults = array(
        1 => array('text' => 'STL has been instrumental in streamlining our import operations. Their expertise and reliability are unmatched.', 'name' => 'Ahmed Khan', 'company' => 'Khan Enterprises'),
        2 => array('text' => 'Professional service from start to finish. They handled our car imports from Japan flawlessly.', 'name' => 'Sarah Williams', 'company' => 'AutoWorld Japan'),
        3 => array('text' => 'Their customs brokerage team saved us countless hours and helped us avoid costly delays.', 'name' => 'Mohammad Ali', 'company' => 'Global Traders Ltd'),
    );
    
    for ($i = 1; $i <= 3; $i++) {
        $wp_customize->add_setting("stl_testimonial_{$i}_text", array('default' => $testimonial_defaults[$i]['text'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_testimonial_{$i}_text", array('label' => sprintf(__('Testimonial %d Text', 'stl-freight-services'), $i), 'section' => 'stl_testimonials_section', 'type' => 'textarea'));
        
        $wp_customize->add_setting("stl_testimonial_{$i}_name", array('default' => $testimonial_defaults[$i]['name'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_testimonial_{$i}_name", array('label' => sprintf(__('Testimonial %d Name', 'stl-freight-services'), $i), 'section' => 'stl_testimonials_section', 'type' => 'text'));
        
        $wp_customize->add_setting("stl_testimonial_{$i}_company", array('default' => $testimonial_defaults[$i]['company'], 'sanitize_callback' => 'sanitize_text_field'));
        $wp_customize->add_control("stl_testimonial_{$i}_company", array('label' => sprintf(__('Testimonial %d Company', 'stl-freight-services'), $i), 'section' => 'stl_testimonials_section', 'type' => 'text'));
    }
    
    // Contact Section
    $wp_customize->add_section('stl_contact_section', array(
        'title' => __('Contact Section', 'stl-freight-services'),
        'priority' => 50,
    ));
    
    $wp_customize->add_setting('stl_contact_address', array('default' => 'Office 401, Al-Hafeez Tower, Main Boulevard, Gulberg III, Lahore, Pakistan', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('stl_contact_address', array('label' => __('Address', 'stl-freight-services'), 'section' => 'stl_contact_section', 'type' => 'textarea'));
    
    $wp_customize->add_setting('stl_contact_phone', array('default' => '+92 300 1234567', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('stl_contact_phone', array('label' => __('Phone', 'stl-freight-services'), 'section' => 'stl_contact_section', 'type' => 'text'));
    
    $wp_customize->add_setting('stl_contact_email', array('default' => 'info@samtranse.com', 'sanitize_callback' => 'sanitize_email'));
    $wp_customize->add_control('stl_contact_email', array('label' => __('Email', 'stl-freight-services'), 'section' => 'stl_contact_section', 'type' => 'email'));
    
    $wp_customize->add_setting('stl_whatsapp_number', array('default' => '923001234567', 'sanitize_callback' => 'sanitize_text_field'));
    $wp_customize->add_control('stl_whatsapp_number', array('label' => __('WhatsApp Number (with country code, no +)', 'stl-freight-services'), 'section' => 'stl_contact_section', 'type' => 'text'));
}
add_action('customize_register', 'stl_customize_register');

// Handle contact form submission
function stl_handle_contact_form() {
    if (!isset($_POST['stl_nonce']) || !wp_verify_nonce($_POST['stl_nonce'], 'stl_contact_nonce')) {
        wp_die(__('Security check failed', 'stl-freight-services'));
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $service = sanitize_text_field($_POST['service']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $admin_email = get_option('admin_email');
    $subject = sprintf(__('New Contact Form Submission from %s', 'stl-freight-services'), $name);
    
    $body = sprintf(
        "Name: %s\nEmail: %s\nPhone: %s\nService: %s\n\nMessage:\n%s",
        $name, $email, $phone, $service, $message
    );
    
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email);
    
    wp_mail($admin_email, $subject, $body, $headers);
    
    wp_redirect(home_url('/#contact?submitted=true'));
    exit;
}
add_action('admin_post_stl_contact_form', 'stl_handle_contact_form');
add_action('admin_post_nopriv_stl_contact_form', 'stl_handle_contact_form');
