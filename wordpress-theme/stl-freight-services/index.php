<?php
/**
 * Main template file
 * @package STL_Freight_Services
 */

get_header();
?>

<!-- Hero Section -->
<section id="home" class="hero-section">
    <div class="hero-content">
        <div class="hero-brand"><?php echo esc_html(get_theme_mod('stl_hero_brand', 'STL')); ?></div>
        <h1 class="hero-title"><?php echo esc_html(get_theme_mod('stl_hero_title', 'Global Freight Solutions')); ?></h1>
        <p class="hero-subtitle"><?php echo esc_html(get_theme_mod('stl_hero_subtitle', 'Your trusted partner in international logistics and freight forwarding since 2010')); ?></p>
        <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">Get Free Quote</a>
            <a href="#services" class="btn btn-secondary">Our Services</a>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="services-section">
    <div class="container">
        <div class="section-header">
            <p class="section-subtitle">What We Offer</p>
            <h2 class="section-title">Our Services</h2>
        </div>
        <div class="services-grid">
            <?php
            $services = array(
                array('icon' => '🚢', 'title' => get_theme_mod('stl_service_1_title', 'Freight Forwarding'), 'desc' => get_theme_mod('stl_service_1_desc', 'Complete sea, air, and land freight solutions worldwide')),
                array('icon' => '📦', 'title' => get_theme_mod('stl_service_2_title', 'Custom Brokerage'), 'desc' => get_theme_mod('stl_service_2_desc', 'Expert customs clearance and documentation services')),
                array('icon' => '🏭', 'title' => get_theme_mod('stl_service_3_title', 'Warehousing'), 'desc' => get_theme_mod('stl_service_3_desc', 'Secure storage and inventory management facilities')),
                array('icon' => '🚛', 'title' => get_theme_mod('stl_service_4_title', 'Inland Transport'), 'desc' => get_theme_mod('stl_service_4_desc', 'Door-to-door delivery across Pakistan and beyond')),
                array('icon' => '🔗', 'title' => get_theme_mod('stl_service_5_title', 'Supply Chain'), 'desc' => get_theme_mod('stl_service_5_desc', 'End-to-end supply chain management solutions')),
                array('icon' => '🚗', 'title' => get_theme_mod('stl_service_6_title', 'Car Import'), 'desc' => get_theme_mod('stl_service_6_desc', 'Specialized vehicle import from Japan, UK, and UAE')),
            );
            foreach ($services as $service) :
            ?>
            <div class="service-card">
                <div class="service-icon"><?php echo $service['icon']; ?></div>
                <h3 class="service-title"><?php echo esc_html($service['title']); ?></h3>
                <p class="service-description"><?php echo esc_html($service['desc']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="stats-section">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number"><?php echo esc_html(get_theme_mod('stl_stat_1_value', '15')); ?>+</div>
                <div class="stat-label"><?php echo esc_html(get_theme_mod('stl_stat_1_label', 'Years Experience')); ?></div>
            </div>
            <div class="stat-item">
                <div class="stat-number"><?php echo esc_html(get_theme_mod('stl_stat_2_value', '500')); ?>+</div>
                <div class="stat-label"><?php echo esc_html(get_theme_mod('stl_stat_2_label', 'Happy Clients')); ?></div>
            </div>
            <div class="stat-item">
                <div class="stat-number"><?php echo esc_html(get_theme_mod('stl_stat_3_value', '50')); ?>+</div>
                <div class="stat-label"><?php echo esc_html(get_theme_mod('stl_stat_3_label', 'Countries Served')); ?></div>
            </div>
            <div class="stat-item">
                <div class="stat-number"><?php echo esc_html(get_theme_mod('stl_stat_4_value', '10000')); ?>+</div>
                <div class="stat-label"><?php echo esc_html(get_theme_mod('stl_stat_4_label', 'Shipments Delivered')); ?></div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section id="testimonials" class="testimonials-section">
    <div class="container">
        <div class="section-header">
            <p class="section-subtitle">Client Feedback</p>
            <h2 class="section-title">What Our Clients Say</h2>
        </div>
        <div class="testimonials-grid">
            <?php
            $testimonials = array(
                array(
                    'text' => get_theme_mod('stl_testimonial_1_text', 'STL has been instrumental in streamlining our import operations. Their expertise and reliability are unmatched.'),
                    'name' => get_theme_mod('stl_testimonial_1_name', 'Ahmed Khan'),
                    'company' => get_theme_mod('stl_testimonial_1_company', 'Khan Enterprises'),
                    'initials' => 'AK'
                ),
                array(
                    'text' => get_theme_mod('stl_testimonial_2_text', 'Professional service from start to finish. They handled our car imports from Japan flawlessly.'),
                    'name' => get_theme_mod('stl_testimonial_2_name', 'Sarah Williams'),
                    'company' => get_theme_mod('stl_testimonial_2_company', 'AutoWorld Japan'),
                    'initials' => 'SW'
                ),
                array(
                    'text' => get_theme_mod('stl_testimonial_3_text', 'Their customs brokerage team saved us countless hours and helped us avoid costly delays.'),
                    'name' => get_theme_mod('stl_testimonial_3_name', 'Mohammad Ali'),
                    'company' => get_theme_mod('stl_testimonial_3_company', 'Global Traders Ltd'),
                    'initials' => 'MA'
                ),
            );
            foreach ($testimonials as $testimonial) :
            ?>
            <div class="testimonial-card">
                <div class="star-rating">★★★★★</div>
                <p class="testimonial-text">"<?php echo esc_html($testimonial['text']); ?>"</p>
                <div class="testimonial-author">
                    <div class="author-avatar"><?php echo esc_html($testimonial['initials']); ?></div>
                    <div>
                        <div class="author-name"><?php echo esc_html($testimonial['name']); ?></div>
                        <div class="author-company"><?php echo esc_html($testimonial['company']); ?></div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact-section">
    <div class="container">
        <div class="section-header">
            <p class="section-subtitle">Get In Touch</p>
            <h2 class="section-title">Contact Us</h2>
        </div>
        <div class="contact-grid">
            <div class="contact-form">
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                    <input type="hidden" name="action" value="stl_contact_form">
                    <?php wp_nonce_field('stl_contact_nonce', 'stl_nonce'); ?>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="service">Service Required</label>
                        <select id="service" name="service">
                            <option value="">Select a service</option>
                            <option value="freight">Freight Forwarding</option>
                            <option value="customs">Custom Brokerage</option>
                            <option value="warehouse">Warehousing</option>
                            <option value="transport">Inland Transport</option>
                            <option value="car-import">Car Import</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                </form>
            </div>
            <div class="contact-info">
                <h3>Let's Talk Business</h3>
                <p>Ready to streamline your logistics? Contact us today for a free consultation and quote.</p>
                <div class="info-item">
                    <div class="info-icon">📍</div>
                    <div class="info-content">
                        <h4>Address</h4>
                        <p><?php echo esc_html(get_theme_mod('stl_contact_address', 'Office 401, Al-Hafeez Tower, Main Boulevard, Gulberg III, Lahore, Pakistan')); ?></p>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">📞</div>
                    <div class="info-content">
                        <h4>Phone</h4>
                        <p><?php echo esc_html(get_theme_mod('stl_contact_phone', '+92 300 1234567')); ?></p>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-icon">✉️</div>
                    <div class="info-content">
                        <h4>Email</h4>
                        <p><?php echo esc_html(get_theme_mod('stl_contact_email', 'info@samtranse.com')); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- WhatsApp Button -->
<?php $whatsapp = get_theme_mod('stl_whatsapp_number', '923001234567'); ?>
<?php if ($whatsapp) : ?>
<a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>" class="whatsapp-btn" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
</a>
<?php endif; ?>

<?php get_footer(); ?>
