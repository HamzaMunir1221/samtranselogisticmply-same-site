<?php
/**
 * Main template file - Matching React App Design
 */
get_header();

$slides = stl_get_hero_slides();
$testimonials = stl_get_testimonials();
?>

<!-- Hero Section -->
<section class="hero-section" id="home">
    <!-- Background Slides -->
    <?php foreach ($slides as $index => $slide) : ?>
    <div class="hero-slide<?php echo $index === 0 ? ' active' : ''; ?>" data-slide="<?php echo $index; ?>">
        <?php if (!empty($slide['image'])) : ?>
        <img src="<?php echo esc_url($slide['image']); ?>" alt="<?php echo esc_attr($slide['title']); ?>">
        <?php endif; ?>
        <div class="hero-overlay"></div>
        <div class="hero-overlay-bottom"></div>
    </div>
    <?php endforeach; ?>

    <!-- Content -->
    <div class="container">
        <div class="hero-content">
            <?php foreach ($slides as $index => $slide) : ?>
            <div class="hero-slide-content<?php echo $index === 0 ? ' active' : ''; ?>" data-slide="<?php echo $index; ?>">
                <!-- STL Brand Name -->
                <div class="hero-brand">STL</div>
                
                <!-- Subtitle badge -->
                <div class="hero-subtitle-badge">
                    <span class="hero-subtitle-dot"></span>
                    <span class="hero-subtitle-text"><?php echo esc_html($slide['subtitle']); ?></span>
                </div>
                
                <!-- Main heading -->
                <h1 class="hero-title">
                    <?php echo esc_html($slide['title']); ?>
                    <span class="hero-highlight"><?php echo esc_html($slide['highlight']); ?></span>
                </h1>
                
                <!-- Description -->
                <p class="hero-description"><?php echo esc_html($slide['description']); ?></p>

                <!-- CTA Buttons -->
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">
                        Request a Quote
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a href="tel:<?php echo esc_attr(get_theme_mod('stl_phone', '+92 318 483 3990')); ?>" class="btn btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call Us Now
                    </a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Slide Progress Indicators -->
    <div class="hero-indicators">
        <?php for ($i = 0; $i < count($slides); $i++) : ?>
        <button class="hero-indicator<?php echo $i === 0 ? ' active' : ' inactive'; ?>" data-slide="<?php echo $i; ?>" aria-label="Go to slide <?php echo $i + 1; ?>">
            <?php if ($i === 0) : ?>
            <span class="hero-indicator-progress"></span>
            <?php endif; ?>
        </button>
        <?php endfor; ?>
    </div>

    <!-- Bottom Info Bar -->
    <div class="hero-info-bar">
        <div class="container">
            <div class="hero-info-grid">
                <div class="hero-info-item">
                    <div class="hero-info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                        <p class="hero-info-label">Call Us 24/7</p>
                        <p class="hero-info-value"><?php echo esc_html(get_theme_mod('stl_phone', '+92 318 483 3990')); ?></p>
                    </div>
                </div>
                <div class="hero-info-item">
                    <div class="hero-info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                        <p class="hero-info-label">Head Office</p>
                        <p class="hero-info-value"><?php echo esc_html(get_theme_mod('stl_address', 'Karachi, Pakistan')); ?></p>
                    </div>
                </div>
                <div class="hero-info-item">
                    <div class="hero-info-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                        <p class="hero-info-label">Working Hours</p>
                        <p class="hero-info-value"><?php echo esc_html(get_theme_mod('stl_working_hours', 'Mon - Sat: 9AM - 6PM')); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<?php $stats_bg = get_theme_mod('stl_stats_bg_image', ''); ?>
<section class="stats-section" id="about" <?php echo !empty($stats_bg) ? 'style="background-image: url(' . esc_url($stats_bg) . ');"' : ''; ?>>
    <div class="stats-overlay"></div>
    <div class="container stats-content">
        <p class="section-eyebrow"><?php echo esc_html(get_theme_mod('stl_stats_eyebrow', 'Since 2020')); ?></p>
        <h2 class="section-title">
            <?php echo esc_html(get_theme_mod('stl_stats_title', "Pakistan's Leading")); ?><br>
            <span class="text-gradient"><?php echo esc_html(get_theme_mod('stl_stats_highlight', 'Forwarding & Clearing Agents')); ?></span>
        </h2>
        <p class="section-description">
            <?php echo esc_html(get_theme_mod('stl_stats_description', 'Sam Transe Logistics has been committed to providing exceptional, reliable & innovative solutions in moving by Land, by Air, and by Ship.')); ?>
        </p>

        <div class="stats-grid">
            <?php for ($i = 1; $i <= 4; $i++) : ?>
            <div class="stat-card">
                <div class="stat-value"><?php echo esc_html(get_theme_mod("stl_stat_{$i}_value", '5+')); ?></div>
                <p class="stat-label"><?php echo esc_html(get_theme_mod("stl_stat_{$i}_label", 'Stat Label')); ?></p>
            </div>
            <?php endfor; ?>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services-section" id="services">
    <div class="container">
        <div class="services-wrapper">
            <!-- Left Image -->
            <?php $services_bg = get_theme_mod('stl_services_image', ''); ?>
            <div class="services-image-wrapper" <?php echo !empty($services_bg) ? 'style="background-image: url(' . esc_url($services_bg) . ');"' : ''; ?>>
                <div class="services-image-overlay"></div>
                <div class="services-image-content">
                    <h3 class="services-image-title"><?php echo esc_html(get_theme_mod('stl_services_image_title', 'Full-Service Logistics')); ?></h3>
                    <p class="services-image-text"><?php echo esc_html(get_theme_mod('stl_services_image_text', 'Sam Transe Logistics is a Full-Service Logistics Company providing a vast range of freight and transit services.')); ?></p>
                </div>
            </div>

            <!-- Right Services Grid -->
            <div>
                <p class="section-eyebrow" style="text-align: left;">What We Offer</p>
                <h2 class="section-title" style="text-align: left; margin-bottom: 2rem;">
                    Our <span class="text-gradient">Services</span>
                </h2>
                
                <div class="services-list">
                    <?php
                    $services = array(
                        array('icon' => 'file-check', 'name' => 'Custom Brokerage', 'description' => 'Expert customs clearance services'),
                        array('icon' => 'package', 'name' => 'Consolidation', 'description' => 'Efficient cargo consolidation'),
                        array('icon' => 'package-open', 'name' => 'Deconsolidation', 'description' => 'Careful cargo breakdown'),
                        array('icon' => 'truck', 'name' => 'Inland Transport', 'description' => 'Nationwide ground shipping'),
                        array('icon' => 'warehouse', 'name' => 'Warehousing', 'description' => 'Secure storage solutions'),
                        array('icon' => 'chart', 'name' => 'Supply Chain', 'description' => 'End-to-end management'),
                        array('icon' => 'globe', 'name' => 'Afghan Transit', 'description' => 'Cross-border trade services'),
                        array('icon' => 'search', 'name' => 'Inspection', 'description' => 'Quality verification'),
                        array('icon' => 'boxes', 'name' => 'Project Handling', 'description' => 'Large-scale logistics'),
                        array('icon' => 'car', 'name' => 'Car Import', 'description' => 'Japan/UK vehicle imports'),
                        array('icon' => 'anchor', 'name' => 'Vessel Chartering', 'description' => 'Ship rental services'),
                        array('icon' => 'ship', 'name' => 'Freight Forwarding', 'description' => 'Global cargo movement'),
                    );
                    
                    foreach ($services as $service) :
                    ?>
                    <div class="service-card">
                        <div class="service-icon">
                            <?php echo stl_get_service_icon($service['icon']); ?>
                        </div>
                        <div>
                            <h4 class="service-name"><?php echo esc_html($service['name']); ?></h4>
                            <p class="service-description"><?php echo esc_html($service['description']); ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials-section" id="testimonials">
    <div class="container">
        <p class="section-eyebrow">Client Testimonials</p>
        <h2 class="section-title">
            What Our <span class="text-gradient">Clients Say</span>
        </h2>
        <p class="section-description">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with Sam Transe Logistics.
        </p>

        <div class="testimonials-carousel">
            <?php foreach ($testimonials as $testimonial) : ?>
            <div class="testimonial-card">
                <svg class="testimonial-quote-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                <p class="testimonial-text">"<?php echo esc_html($testimonial['text']); ?>"</p>
                <div class="testimonial-stars">
                    <?php for ($i = 1; $i <= 5; $i++) : ?>
                    <svg class="testimonial-star <?php echo $i <= $testimonial['rating'] ? 'filled' : 'empty'; ?>" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="<?php echo $i <= $testimonial['rating'] ? 'currentColor' : 'none'; ?>" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <?php endfor; ?>
                </div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar"><?php echo esc_html($testimonial['initials']); ?></div>
                    <div>
                        <h4 class="testimonial-name"><?php echo esc_html($testimonial['name']); ?></h4>
                        <p class="testimonial-company"><?php echo esc_html($testimonial['company']); ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- WhatsApp Floating Button -->
<?php $whatsapp = get_theme_mod('stl_whatsapp', '923184833990'); ?>
<?php if (!empty($whatsapp)) : ?>
<div class="whatsapp-float">
    <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Chat on WhatsApp">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
</div>
<?php endif; ?>

<?php get_footer(); ?>

<?php
// Service icons helper
function stl_get_service_icon($icon) {
    $icons = array(
        'file-check' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>',
        'package' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
        'package-open' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/></svg>',
        'truck' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
        'warehouse' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>',
        'chart' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
        'globe' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        'search' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
        'boxes' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>',
        'car' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
        'anchor' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>',
        'ship' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/></svg>',
    );
    
    return isset($icons[$icon]) ? $icons[$icon] : '';
}
?>
