// Custom Cursor
       const cursor = document.querySelector('.custom-cursor');
       const links = document.querySelectorAll('a, button, .clickable');

       document.addEventListener('mousemove', (e) => {
           cursor.style.left = e.clientX + 'px';
           cursor.style.top = e.clientY + 'px';
       });

       links.forEach(link => {
           link.addEventListener('mouseenter', () => {
               cursor.classList.add('hover');
           });
           link.addEventListener('mouseleave', () => {
               cursor.classList.remove('hover');
           });
       });

       // Header Scroll Effect
       window.addEventListener('scroll', () => {
           const header = document.querySelector('header');
           if (window.scrollY > 100) {
               header.style.background = 'rgba(255, 255, 255, 0.98)';
               header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
           } else {
               header.style.background = 'rgba(255, 255, 255, 0.95)';
               header.style.boxShadow = 'none';
           }
       });

       // Smooth Scrolling
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function (e) {
               e.preventDefault();
               const target = document.querySelector(this.getAttribute('href'));
               if (target) {
                   target.scrollIntoView({
                       behavior: 'smooth',
                       block: 'start'
                   });
               }
           });
       });

       // Portfolio Filter
       const filterBtns = document.querySelectorAll('.filter-btn');
       const portfolioItems = document.querySelectorAll('.portfolio-item');

       filterBtns.forEach(btn => {
           btn.addEventListener('click', () => {
               // Remove active class from all buttons
               filterBtns.forEach(b => b.classList.remove('active'));
               // Add active class to clicked button
               btn.classList.add('active');

               const filter = btn.getAttribute('data-filter');

               portfolioItems.forEach(item => {
                   if (filter === 'all' || item.getAttribute('data-category') === filter) {
                       item.style.display = 'block';
                       item.style.animation = 'fadeInUp 0.5s ease';
                   } else {
                       item.style.display = 'none';
                   }
               });
           });
       });

       // Form Interactions
       const paymentOptions = document.querySelectorAll('.payment-option');
       paymentOptions.forEach(option => {
           option.addEventListener('click', () => {
               paymentOptions.forEach(opt => opt.classList.remove('selected'));
               option.classList.add('selected');
           });
       });

       // Booking Form Handler
       document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
           e.preventDefault();
           
           // Collect form data
           const formData = new FormData(this);
           const selectedPayment = document.querySelector('.payment-option.selected');
           
           if (!selectedPayment) {
               alert('Please select a payment method');
               return;
           }

           // Simulate booking process
           const submitBtn = this.querySelector('button[type="submit"]');
           submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
           submitBtn.disabled = true;

           setTimeout(() => {
               alert('Booking submitted successfully! We will contact you within 24 hours to confirm details.');
               this.reset();
               paymentOptions.forEach(opt => opt.classList.remove('selected'));
               submitBtn.innerHTML = '<i class="fas fa-credit-card"></i> Confirm Booking & Pay';
               submitBtn.disabled = false;
           }, 2000);
       });

       // Import Form Handler
       document.getElementById('importForm')?.addEventListener('submit', function(e) {
           e.preventDefault();
           
           const submitBtn = this.querySelector('button[type="submit"]');
           submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
           submitBtn.disabled = true;

           setTimeout(() => {
               alert('Import assistance request submitted! Our team will contact you within 48 hours with detailed information.');
               this.reset();
               submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Request Import Assistance';
               submitBtn.disabled = false;
           }, 2000);
       });

       // Franchise Form Handler
       document.getElementById('franchiseForm')?.addEventListener('submit', function(e) {
           e.preventDefault();
           
           const submitBtn = this.querySelector('button[type="submit"]');
           submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
           submitBtn.disabled = true;

           setTimeout(() => {
               alert('Franchise application submitted successfully! Our franchise team will review your application and contact you within 5 business days.');
               this.reset();
               submitBtn.innerHTML = '<i class="fas fa-handshake"></i> Submit Franchise Application';
               submitBtn.disabled = false;
           }, 2000);
       });

       // Contact Form Handler
       document.getElementById('contactForm')?.addEventListener('submit', function(e) {
           e.preventDefault();
           
           const submitBtn = this.querySelector('button[type="submit"]');
           submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
           submitBtn.disabled = true;

           setTimeout(() => {
               alert('Message sent successfully! We will respond within 24 hours.');
               this.reset();
               submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
               submitBtn.disabled = false;
           }, 1500);
       });

       // Newsletter Form Handler
       document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
           e.preventDefault();
           
           const submitBtn = this.querySelector('button[type="submit"]');
           const email = this.querySelector('input[type="email"]').value;
           
           submitBtn.innerHTML = 'Subscribing...';
           submitBtn.disabled = true;

           setTimeout(() => {
               alert('Successfully subscribed to our newsletter!');
               this.reset();
               submitBtn.innerHTML = 'Subscribe';
               submitBtn.disabled = false;
           }, 1000);
       });

       // Language Toggle
       const langButtons = document.querySelectorAll('.language-toggle button');
       langButtons.forEach(btn => {
           btn.addEventListener('click', () => {
               langButtons.forEach(b => b.classList.remove('active'));
               btn.classList.add('active');
               
               // In a real implementation, this would trigger language change
               console.log(`Language changed to: ${btn.getAttribute('data-lang')}`);
           });
       });

       // Intersection Observer for Animations
       const observerOptions = {
           threshold: 0.1,
           rootMargin: '0px 0px -50px 0px'
       };

       const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.style.opacity = '1';
                   entry.target.style.transform = 'translateY(0)';
               }
           });
       }, observerOptions);

       // Observe elements for animations
       document.querySelectorAll('.service-card, .blog-card, .contact-info, .contact-form').forEach(el => {
           el.style.opacity = '0';
           el.style.transform = 'translateY(50px)';
           el.style.transition = 'all 0.6s ease';
           observer.observe(el);
       });

       // Chat Widget Click Handler
       document.querySelector('.chat-widget')?.addEventListener('click', function() {
           alert('Live chat feature coming soon! For immediate assistance, please call +254 700 123 456 or email info@ecoscan.co.ke');
       });

       // Mobile Menu Toggle (for future mobile implementation)
       function toggleMobileMenu() {
           const navLinks = document.querySelector('.nav-links');
           navLinks.classList.toggle('mobile-active');
       }

       // Parallax Effect for Hero Section
       window.addEventListener('scroll', () => {
           const scrolled = window.pageYOffset;
           const hero = document.querySelector('.hero');
           const heroVideo = document.querySelector('.hero-video');
           
           if (hero && heroVideo) {
               heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
           }
       });

       // Dynamic Pricing Calculator (for booking form)
       function calculatePrice() {
           const useCase = document.getElementById('useCase')?.value;
           const selectedPackage = document.querySelector('.payment-option.selected[data-package]');
           const addons = document.querySelectorAll('input[name="addons"]:checked');
           
           if (!selectedPackage) return;
           
           let basePrice = 0;
           switch(selectedPackage.getAttribute('data-package')) {
               case 'standard': basePrice = 15000; break;
               case 'professional': basePrice = 25000; break;
               case 'premium': basePrice = 40000; break;
           }
           
           let addonPrice = 0;
           addons.forEach(addon => {
               switch(addon.value) {
                   case 'operator': addonPrice += 5000; break;
                   case 'thermal': addonPrice += 8000; break;
                   case 'editing': addonPrice += 3000; break;
                   case 'rush': addonPrice += 2000; break;
               }
           });
           
           const total = basePrice + addonPrice;
           
           // Update price display (you can add a price display element)
           console.log(`Total Price: KES ${total.toLocaleString()}`);
       }

       // Add event listeners for price calculation
       document.addEventListener('change', function(e) {
           if (e.target.name === 'addons' || e.target.closest('.payment-option')) {
               calculatePrice();
           }
       });

       // Weather Widget Integration (placeholder)
       function checkWeatherForFlying() {
           // In a real implementation, this would fetch weather data
           // from a weather API to show flying conditions
           console.log('Weather check feature - integrate with weather API');
       }

       // Initialize all features when page loads
       document.addEventListener('DOMContentLoaded', function() {
           // Set minimum date for booking to today
           const dateInput = document.getElementById('date');
           if (dateInput) {
               const today = new Date().toISOString().split('T')[0];
               dateInput.min = today;
           }
           
           // Initialize any other features
           console.log('Eco Scan Drone Solutions website loaded successfully!');
       });

       // Performance optimization: Lazy load images
       if ('IntersectionObserver' in window) {
           const imageObserver = new IntersectionObserver((entries, observer) => {
               entries.forEach(entry => {
                   if (entry.isIntersecting) {
                       const img = entry.target;
                       img.src = img.dataset.src || img.src;
                       img.classList.remove('lazy');
                       imageObserver.unobserve(img);
                   }
               });
           });

           document.querySelectorAll('img[data-src]').forEach(img => {
               imageObserver.observe(img);
           });
       }