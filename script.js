// ================================================
// Global State - يستخدم الإعدادات من config.js
// ================================================
let currentLang = siteConfig.settings.defaultLanguage;
let currentTheme = siteConfig.settings.defaultTheme;
let currentColorMode = siteConfig.settings.defaultColorMode;

// ================================================
// Initialize the page when DOM is loaded
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateWhatsAppLink();
    updateSocialLinks();
    updatePeopleConstraints();
    setupEventListeners();
    setupFormValidation();
    setDateConstraints();
    
    // تطبيق الإعدادات الافتراضية
    document.body.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-color-mode', currentColorMode);
});

// ================================================
// Update WhatsApp Link from config
// ================================================
function updateWhatsAppLink() {
    const supportLink = document.getElementById('supportLink');
    if (supportLink) {
        supportLink.href = `https://wa.me/${siteConfig.restaurant.whatsapp}`;
    }
}

// ================================================
// Update Social Media Links from config
// ================================================
function updateSocialLinks() {
    const facebookLink = document.getElementById('facebookLink');
    const instagramLink = document.getElementById('instagramLink');
    const twitterLink = document.getElementById('twitterLink');
    
    if (facebookLink) facebookLink.href = siteConfig.footer.socialLinks.facebook;
    if (instagramLink) instagramLink.href = siteConfig.footer.socialLinks.instagram;
    if (twitterLink) twitterLink.href = siteConfig.footer.socialLinks.twitter;
}

// ================================================
// Update People Input Constraints from config
// ================================================
function updatePeopleConstraints() {
    const numPeopleInput = document.getElementById('numPeople');
    if (numPeopleInput) {
        numPeopleInput.min = siteConfig.form.validation.minPeople;
        numPeopleInput.max = siteConfig.form.validation.maxPeople;
    }
}

// ================================================
// Update all page content based on current language
// ================================================
function updateContent() {
    const lang = content[currentLang];
    
    // Update brand name
    document.getElementById('navBrand').textContent = siteConfig.restaurant.name[currentLang];
    
    // Update navigation
    document.getElementById('navHome').textContent = lang.nav.home;
    document.getElementById('navBenefits').textContent = lang.nav.benefits;
    document.getElementById('navTestimonials').textContent = lang.nav.testimonials;
    document.getElementById('navBooking').textContent = lang.nav.booking;
    
    // Update hero section
    document.getElementById('heroTitle').textContent = lang.hero.title;
    document.getElementById('heroSubtitle').textContent = lang.hero.subtitle;
    document.getElementById('heroDescription').textContent = lang.hero.description;
    document.getElementById('heroCta').textContent = lang.hero.cta;
    
    // Update benefits section
    document.getElementById('benefitsTitle').textContent = lang.benefits.title;
    renderBenefits(lang.benefits.items);
    
    // Update CTA section
    document.getElementById('ctaTitle').textContent = lang.cta.title;
    document.getElementById('ctaDescription').textContent = lang.cta.description;
    document.getElementById('ctaButton').textContent = lang.cta.button;
    
    // Update testimonials
    document.getElementById('testimonialsTitle').textContent = lang.testimonials.title;
    renderTestimonials(lang.testimonials.items);
    
    // Update form
    document.getElementById('formTitle').textContent = lang.form.title;
    document.getElementById('labelFullName').textContent = lang.form.fullName;
    document.getElementById('labelNumPeople').textContent = lang.form.numPeople;
    document.getElementById('labelMealType').textContent = lang.form.mealType;
    document.getElementById('optionLunch').textContent = lang.form.lunch;
    document.getElementById('optionDinner').textContent = lang.form.dinner;
    document.getElementById('labelDate').textContent = lang.form.date;
    document.getElementById('submitButton').textContent = lang.form.submit;
    
    // Update footer
    document.getElementById('footerBrandName').textContent = siteConfig.restaurant.name[currentLang];
    document.getElementById('footerLocation').textContent = lang.footer.location;
    document.getElementById('footerSupport').textContent = lang.footer.support;
    document.getElementById('footerSupportNumber').textContent = `${currentLang === 'ar' ? 'واتساب' : 'WhatsApp'}: ${lang.footer.supportNumber}`;
    document.getElementById('footerPoliciesTitle').textContent = lang.footer.policiesTitle;
    document.getElementById('policyPayment').textContent = lang.footer.policies.payment;
    document.getElementById('policyCancellation').textContent = lang.footer.policies.cancellation;
    document.getElementById('policyRefund').textContent = lang.footer.policies.refund;
    document.getElementById('footerShare').textContent = lang.footer.share;
    document.getElementById('copyright').textContent = lang.footer.copyright;
    
    // Update thank you page
    document.getElementById('thankYouTitle').textContent = lang.thankYou.title;
    document.getElementById('thankYouMessage').textContent = lang.thankYou.message;
    document.getElementById('backHomeButton').textContent = lang.thankYou.home;
    
    // Update HTML direction and language
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
}

// ================================================
// Render Benefits Cards
// ================================================
function renderBenefits(benefits) {
    const grid = document.getElementById('benefitsGrid');
    grid.innerHTML = benefits.map(benefit => `
        <div class="benefit-card">
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        </div>
    `).join('');
}

// ================================================
// Render Testimonials Cards
// ================================================
function renderTestimonials(testimonials) {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        </div>
    `).join('');
}

// ================================================
// Setup Event Listeners
// ================================================
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'English' : 'عربي';
        updateContent();
    });
    
    // Theme toggle (Dark/Light)
    document.getElementById('themeToggle').addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        document.getElementById('themeToggle').textContent = currentTheme === 'light' ? '🌙' : '☀️';
    });
    
    // Color mode toggle (Warm/Cool/Nature)
    document.getElementById('colorToggle').addEventListener('click', () => {
        const modes = ['warm', 'cool', 'nature'];
        const currentIndex = modes.indexOf(currentColorMode);
        currentColorMode = modes[(currentIndex + 1) % modes.length];
        document.body.setAttribute('data-color-mode', currentColorMode);
    });
    
    // Back to home button
    document.getElementById('backHomeButton').addEventListener('click', () => {
        document.getElementById('thankYouPage').classList.add('hidden');
        document.getElementById('bookingForm').reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: siteConfig.settings.smoothScroll ? 'smooth' : 'auto' 
                });
            }
        });
    });
}

// ================================================
// Set Date Constraints from config
// ================================================
function setDateConstraints() {
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.min = siteConfig.event.startDate;
        dateInput.max = siteConfig.event.endDate;
    }
}

// ================================================
// Validate if selected date is in available days
// ================================================
function validateBookingDate(selectedDate) {
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    return siteConfig.event.availableDays.includes(dayOfWeek);
}

// ================================================
// Form Validation Setup
// ================================================
function setupFormValidation() {
    const form = document.getElementById('bookingForm');
    const fullName = document.getElementById('fullName');
    const numPeople = document.getElementById('numPeople');
    const bookingDate = document.getElementById('bookingDate');
    
    // Form submit handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const lang = content[currentLang].form.errors;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        // Validate full name
        if (fullName.value.trim() === '') {
            document.getElementById('errorFullName').textContent = lang.nameRequired;
            isValid = false;
        } else if (fullName.value.trim().length < siteConfig.form.validation.minNameLength) {
            document.getElementById('errorFullName').textContent = lang.nameInvalid;
            isValid = false;
        }
        
        // Validate number of people
        if (numPeople.value === '') {
            document.getElementById('errorNumPeople').textContent = lang.peopleRequired;
            isValid = false;
        } else if (numPeople.value < siteConfig.form.validation.minPeople || 
                   numPeople.value > siteConfig.form.validation.maxPeople) {
            document.getElementById('errorNumPeople').textContent = lang.peopleInvalid;
            isValid = false;
        }
        
        // Validate date
        if (bookingDate.value === '') {
            document.getElementById('errorDate').textContent = lang.dateRequired;
            isValid = false;
        } else if (!validateBookingDate(bookingDate.value)) {
            document.getElementById('errorDate').textContent = lang.dateInvalid;
            isValid = false;
        }
        
        // If all validations pass
        if (isValid) {
            // Show thank you page
            document.getElementById('thankYouPage').classList.remove('hidden');
            
            // Log form data (في الواقع، يجب إرسال البيانات إلى الخادم)
            console.log('Booking submitted:', {
                fullName: fullName.value,
                numPeople: numPeople.value,
                mealType: document.getElementById('mealType').value,
                bookingDate: bookingDate.value,
                timestamp: new Date().toISOString()
            });
        }
    });
    
    // Real-time validation for full name
    fullName.addEventListener('blur', () => {
        const lang = content[currentLang].form.errors;
        if (fullName.value.trim() === '') {
            document.getElementById('errorFullName').textContent = lang.nameRequired;
        } else if (fullName.value.trim().length < siteConfig.form.validation.minNameLength) {
            document.getElementById('errorFullName').textContent = lang.nameInvalid;
        } else {
            document.getElementById('errorFullName').textContent = '';
        }
    });
    
    // Real-time validation for number of people
    numPeople.addEventListener('blur', () => {
        const lang = content[currentLang].form.errors;
        if (numPeople.value === '') {
            document.getElementById('errorNumPeople').textContent = lang.peopleRequired;
        } else if (numPeople.value < siteConfig.form.validation.minPeople || 
                   numPeople.value > siteConfig.form.validation.maxPeople) {
            document.getElementById('errorNumPeople').textContent = lang.peopleInvalid;
        } else {
            document.getElementById('errorNumPeople').textContent = '';
        }
    });
    
    // Real-time validation for booking date
    bookingDate.addEventListener('blur', () => {
        const lang = content[currentLang].form.errors;
        if (bookingDate.value === '') {
            document.getElementById('errorDate').textContent = lang.dateRequired;
        } else if (!validateBookingDate(bookingDate.value)) {
            document.getElementById('errorDate').textContent = lang.dateInvalid;
        } else {
            document.getElementById('errorDate').textContent = '';
        }
    });
}
