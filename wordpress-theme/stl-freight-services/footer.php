</main>

<!-- Footer -->
<footer class="site-footer" id="contact">
    <div class="container">
        <div class="footer-grid">
            <!-- Brand -->
            <div class="footer-section">
                <div class="footer-brand">STL</div>
                <p class="footer-about">
                    Your trusted partner for comprehensive logistics and freight forwarding 
                    solutions. Delivering excellence across the globe.
                </p>
                <div class="footer-socials">
                    <?php $whatsapp = get_theme_mod('stl_whatsapp', '923184833990'); ?>
                    <?php if (!empty($whatsapp)) : ?>
                    <a href="https://wa.me/<?php echo esc_attr($whatsapp); ?>" target="_blank" rel="noopener noreferrer" class="footer-social-link whatsapp" aria-label="WhatsApp">
                        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php $facebook = get_theme_mod('stl_facebook', ''); ?>
                    <?php if (!empty($facebook)) : ?>
                    <a href="<?php echo esc_url($facebook); ?>" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php $twitter = get_theme_mod('stl_twitter', ''); ?>
                    <?php if (!empty($twitter)) : ?>
                    <a href="<?php echo esc_url($twitter); ?>" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php $linkedin = get_theme_mod('stl_linkedin', ''); ?>
                    <?php if (!empty($linkedin)) : ?>
                    <a href="<?php echo esc_url($linkedin); ?>" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <?php endif; ?>
                    
                    <?php $instagram = get_theme_mod('stl_instagram', ''); ?>
                    <?php if (!empty($instagram)) : ?>
                    <a href="<?php echo esc_url($instagram); ?>" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-section">
                <h4>Quick Links</h4>
                <div class="footer-links">
                    <a href="#home" class="footer-link">Home</a>
                    <a href="#about" class="footer-link">About Us</a>
                    <a href="#services" class="footer-link">Services</a>
                    <a href="#testimonials" class="footer-link">Testimonials</a>
                    <a href="#contact" class="footer-link">Contact</a>
                </div>
            </div>

            <!-- Services -->
            <div class="footer-section">
                <h4>Our Services</h4>
                <div class="footer-links">
                    <a href="#services" class="footer-link">Custom Brokerage</a>
                    <a href="#services" class="footer-link">Freight Forwarding</a>
                    <a href="#services" class="footer-link">Warehousing</a>
                    <a href="#services" class="footer-link">Supply Chain</a>
                    <a href="#services" class="footer-link">Vessel Chartering</a>
                    <a href="#services" class="footer-link">Car Import</a>
                </div>
            </div>

            <!-- Contact Info -->
            <div class="footer-section">
                <h4>Get In Touch</h4>
                <div class="footer-contact-item">
                    <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <div>
                        <a href="tel:<?php echo esc_attr(get_theme_mod('stl_phone', '+92 318 483 3990')); ?>" class="footer-link">
                            <?php echo esc_html(get_theme_mod('stl_phone', '+92 318 483 3990')); ?>
                        </a>
                    </div>
                </div>
                <div class="footer-contact-item">
                    <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <div>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('stl_email', 'samtranselogistics@gmail.com')); ?>" class="footer-link">
                            <?php echo esc_html(get_theme_mod('stl_email', 'samtranselogistics@gmail.com')); ?>
                        </a>
                    </div>
                </div>
                <div class="footer-contact-item">
                    <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span class="footer-link"><?php echo esc_html(get_theme_mod('stl_address', 'Karachi, Pakistan')); ?></span>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p class="footer-copyright">
                    © <?php echo date('Y'); ?> Sam Transe Logistics. All rights reserved.
                </p>
                <div class="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
