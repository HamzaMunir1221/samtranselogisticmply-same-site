</main>

<footer class="site-footer">
    <div class="footer-grid container">
        <div class="footer-section">
            <h4><?php echo esc_html(get_theme_mod('stl_hero_brand', 'STL')); ?> Freight Services</h4>
            <p style="color: #94a3b8; margin-top: 10px;">Your trusted partner in global logistics and freight forwarding solutions.</p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Services</h4>
            <ul>
                <li><a href="#services">Freight Forwarding</a></li>
                <li><a href="#services">Custom Brokerage</a></li>
                <li><a href="#services">Warehousing</a></li>
                <li><a href="#services">Car Import</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Contact</h4>
            <ul>
                <li><?php echo esc_html(get_theme_mod('stl_contact_phone', '+92 300 1234567')); ?></li>
                <li><?php echo esc_html(get_theme_mod('stl_contact_email', 'info@samtranse.com')); ?></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; <?php echo date('Y'); ?> <?php echo esc_html(get_theme_mod('stl_hero_brand', 'STL')); ?> Freight Services. All rights reserved.</p>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
