/**
 * STL Freight Services - Main JavaScript
 * Matching React App Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.getElementById('header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ========================================
    // MOBILE MENU
    // ========================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            this.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
                mobileMenuToggle.textContent = '☰';
            });
        });
    }

    // ========================================
    // HERO SLIDER - Matching React App
    // ========================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroContents = document.querySelectorAll('.hero-slide-content');
    const heroIndicators = document.querySelectorAll('.hero-indicator');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000;

    function goToSlide(index) {
        // Remove active class from all
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroContents.forEach(content => content.classList.remove('active'));
        heroIndicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.classList.add('inactive');
            indicator.innerHTML = '';
        });

        // Add active class to current
        if (heroSlides[index]) heroSlides[index].classList.add('active');
        if (heroContents[index]) heroContents[index].classList.add('active');
        if (heroIndicators[index]) {
            heroIndicators[index].classList.add('active');
            heroIndicators[index].classList.remove('inactive');
            heroIndicators[index].innerHTML = '<span class="hero-indicator-progress"></span>';
        }

        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % heroSlides.length;
        goToSlide(next);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function resetSlideshow() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    // Initialize slideshow
    if (heroSlides.length > 0) {
        startSlideshow();

        // Add click handlers to indicators
        heroIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                goToSlide(index);
                resetSlideshow();
            });
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ========================================
    // ANIMATED COUNTERS - Matching React App
    // ========================================
    const statValues = document.querySelectorAll('.stat-value');
    const animatedStats = new Set();

    function animateCounter(element) {
        const text = element.textContent;
        const match = text.match(/^(\d+)/);
        if (!match) return;

        const target = parseInt(match[1]);
        const suffix = text.replace(/^\d+/, '');
        const duration = 2000;
        const start = Date.now();

        function update() {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);
            
            element.textContent = current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString() + suffix;
            }
        }

        update();
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedStats.has(entry.target)) {
                animatedStats.add(entry.target);
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(stat => statsObserver.observe(stat));

    // ========================================
    // TESTIMONIALS CAROUSEL (Touch/Drag Support)
    // ========================================
    const carousel = document.querySelector('.testimonials-carousel');
    
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Touch support
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        // Set initial cursor
        carousel.style.cursor = 'grab';
    }

    // ========================================
    // FADE IN ANIMATIONS ON SCROLL
    // ========================================
    const fadeElements = document.querySelectorAll('.section-title, .section-description, .service-card, .testimonial-card, .stat-card');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        fadeObserver.observe(el);
    });
});
