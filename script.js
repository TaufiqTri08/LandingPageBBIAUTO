// Language Translations
const translations = {
    id: {
        // Navbar
        navAbout: 'Tentang BBI Auto',
        navFeatures: 'Fitur Unggulan',
        navContact: 'Hubungi Kami',
        btnContact: 'Hubungi Kami',
        
        // Hero Section
        heroTitle: 'Mengatasi Masalah Perawatan Kendaraan Secara Praktis',
        heroSubtitle: 'Dengan Aplikasi Digital Bengkel untuk Perawatan Kendaraan',
        heroDesc: 'Hindari lupa servis dan jatuh tempo administrasi kendaraan dengan pengelolaan otomatis dari BBI Auto!',
        
        // Conventional Management
        conventionalTitle: 'Pengelolaan Konvensional Kendaraan',
        conventionalDesc: 'Resiko yang dapat ditimbul dari pemilih kendaraan harus dikelan sebelum menggunakan layanan BBI Auto',
        
        // Benefits
        benefitsTitle: 'Keuntungan Menggunakan Aplikasi BBI Auto',
        benefitsDesc: 'BBI Auto membantu Anda mengoptimalkan proses manajemen kendaraan dan bengkel dengan mengotomasikan semua proses, dan mengatur segala transaksi pekerjakan',
        
        // Support
        supportTitle: 'Dukungan Terbaik untuk Pengguna BBI Auto',
        supportDesc: 'Dengan tim Customer Service terbaik di Indonesia yang siap membantu para pengguna di Indonesia yang telah menggunakan memaksimalkan dukungan lengkap yang meningkatkan Anda mengubah kendaraan dengan terhomat ke pandang',
        
        // Premium Features
        premiumTitle: 'Kami memiliki Fitur unggulan untuk Anda',
        premiumDesc: 'Fitur-fitur unggulan yang memudahkan pengelolaan kendaraan dan memungkinkan kendaraan tetap terkendaliakan di setiap pemikaraan sejarah fitur',
        
        // Footer
        footerCompany: 'Perusahaan',
        footerContact: 'Hubungi Kami'
    },
    en: {
        // Navbar
        navAbout: 'About BBI Auto',
        navFeatures: 'Key Features',
        navContact: 'Contact Us',
        btnContact: 'Contact Us',
        
        // Hero Section
        heroTitle: 'Solve Vehicle Maintenance Problems Practically',
        heroSubtitle: 'With Digital Garage Application for Vehicle Maintenance',
        heroDesc: 'Avoid forgetting services and vehicle administration deadlines with automatic management from BBI Auto!',
        
        // Conventional Management
        conventionalTitle: 'Conventional Vehicle Management',
        conventionalDesc: 'Risks that can arise from vehicle selection must be known before using BBI Auto services',
        
        // Benefits
        benefitsTitle: 'Benefits of Using BBI Auto Application',
        benefitsDesc: 'BBI Auto helps you optimize vehicle and garage management processes by automating all processes and managing all job transactions',
        
        // Support
        supportTitle: 'Best Support for BBI Auto Users',
        supportDesc: 'With the best Customer Service team in Indonesia ready to help users in Indonesia who have used maximize complete support that enhances you change vehicles with respect to view',
        
        // Premium Features
        premiumTitle: 'We have Premium Features for You',
        premiumDesc: 'Premium features that facilitate vehicle management and allow vehicles to remain controlled in every consideration of feature history',
        
        // Footer
        footerCompany: 'Company',
        footerContact: 'Contact Us'
    }
};

// Current language (default: Indonesian)
let currentLang = 'id';

// Language Switcher Function
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('lang-active');
            btn.classList.remove('lang-inactive');
        } else {
            btn.classList.remove('lang-active');
            btn.classList.add('lang-inactive');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language from localStorage or default
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'id';
    if (savedLang !== 'id') {
        switchLanguage(savedLang);
    }
});

// Language button click handlers
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for anchor links
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

// Add scroll animation for elements
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

// Observe all cards and features
const animatedElements = document.querySelectorAll('.feature-card, .benefit-item, .premium-card, .support-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Button click handlers
const contactButtons = document.querySelectorAll('.btn-contact, .btn-primary');
contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Add your contact form logic here
        alert('Terima kasih! Silakan hubungi kami di hello@bbiauto.id atau 031 590 1999');
    });
});
