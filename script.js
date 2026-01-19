// ================================================
// Global State - يستخدم الإعدادات من config.js
// ================================================
let currentLang = siteConfig.settings.defaultLanguage;
let currentTheme = siteConfig.settings.defaultTheme;
let currentColorMode = siteConfig.settings.defaultColorMode;

// ================================================
// Initialize when DOM is ready
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    // تطبيق الإعدادات الأولية
    applyInitialSettings();

    // تحديث المحتوى
    updateContent();
    updateWhatsAppLink();
    updateSocialLinks();
    updatePeopleConstraints();

    // إعداد المستمعات
    setupEventListeners();
    setupFormValidation();
    setDateConstraints();
    setupScrollEffects();
    setupLoadingAnimations();
    setupSocialInteractions();
    setupContactInteractions();

    // تحديث الأزرار
    updateLanguageToggle();
    updateThemeToggle();
    updateColorToggle();

    console.log('✅ تم تحميل الصفحة بنجاح');
});

// ================================================
// Apply Initial Settings
// ================================================
function applyInitialSettings() {
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-color-mode', currentColorMode);
}

// ================================================
// Toggle Language - محسّنة
// ================================================
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    console.log('🌐 تغيير اللغة إلى:', currentLang);

    // تحديث اتجاه الصفحة
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', currentLang);
    document.body.setAttribute('dir', dir);
    document.body.setAttribute('lang', currentLang);

    // تحديث المحتوى
    updateContent();
    updateLanguageToggle();
    updateThemeToggle();
    updateColorToggle();

    // إضافة تأثير بصري
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0.95';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}

// ================================================
// Toggle Theme - محسّنة
// ================================================
function toggleDarkMode() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('🌓 تغيير الثيم إلى:', currentTheme);

    document.body.setAttribute('data-theme', currentTheme);
    document.body.setAttribute('data-color-mode', currentColorMode);
    updateThemeToggle();

    // إضافة تأثير بصري
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// ================================================
// Toggle Color Mode - محسّنة
// ================================================
function toggleColorMode() {
    const modes = ['warm', 'cool', 'nature'];
    const currentIndex = modes.indexOf(currentColorMode);
    currentColorMode = modes[(currentIndex + 1) % modes.length];
    console.log('🎨 تغيير نمط الألوان إلى:', currentColorMode);

    document.body.setAttribute('data-color-mode', currentColorMode);
    updateColorToggle();
}

// ================================================
// Update Language Toggle Button
// ================================================
function updateLanguageToggle() {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        const icon = langBtn.querySelector('.toggle-icon');
        const text = langBtn.querySelector('.toggle-text');

        if (icon) icon.textContent = currentLang === 'ar' ? '🌐' : '🌍';
        if (text) text.textContent = currentLang === 'ar' ? 'English' : 'عربي';

        console.log('✅ تم تحديث زر اللغة');
    }
}

// ================================================
// Update Theme Toggle Button
// ================================================
function updateThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        const icon = themeBtn.querySelector('.toggle-icon');
        const text = themeBtn.querySelector('.toggle-text');

        if (icon) icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        if (text) {
            text.textContent = currentLang === 'ar' 
                ? (currentTheme === 'light' ? 'داكن' : 'فاتح')
                : (currentTheme === 'light' ? 'Dark' : 'Light');
        }

        console.log('✅ تم تحديث زر الثيم');
    }
}

// ================================================
// Update Color Mode Toggle Button
// ================================================
function updateColorToggle() {
    const colorBtn = document.getElementById('colorToggle');
    if (colorBtn) {
        const icon = colorBtn.querySelector('.toggle-icon');
        const text = colorBtn.querySelector('.toggle-text');

        const colorIcons = {
            warm: '🔥',
            cool: '❄️',
            nature: '🌿'
        };

        const colorNames = {
            warm: { ar: 'دافئ', en: 'Warm' },
            cool: { ar: 'بارد', en: 'Cool' },
            nature: { ar: 'طبيعي', en: 'Nature' }
        };

        if (icon) icon.textContent = colorIcons[currentColorMode];
        if (text) text.textContent = colorNames[currentColorMode][currentLang];

        console.log('✅ تم تحديث زر الألوان');
    }
}

// ================================================
// Setup Event Listeners - محسّنة
// ================================================
function setupEventListeners() {
    // زر تبديل اللغة
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
        console.log('✅ تم ربط زر اللغة');
    }

    // زر تبديل الثيم
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDarkMode();
        });
        console.log('✅ تم ربط زر الثيم');
    }

    // زر تبديل الألوان
    const colorBtn = document.getElementById('colorToggle');
    if (colorBtn) {
        colorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleColorMode();
        });
        console.log('✅ تم ربط زر الألوان');
    }

    // أزرار الحجز
    const bookingBtns = document.querySelectorAll('[href="#booking"], [data-action="book"]');
    bookingBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToBooking();
        });
    });

    // زر العودة للرئيسية
    const homeBtn = document.getElementById('backHomeButton');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // روابط التنقل
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ================================================
// Update Content - تحديث كل محتوى الصفحة
// ================================================
function updateContent() {
    if (!window.content) {
        console.error('❌ window.content غير متوفر! تأكد من تحميل content.js قبل script.js');
        setTimeout(updateContent, 100);
        return;
    }

    const lang = window.content[currentLang];
    if (!lang) {
        console.error('❌ اللغة غير متوفرة:', currentLang);
        return;
    }

    console.log('🔄 تحديث المحتوى للغة:', currentLang);

    // تحديث العلامة التجارية
    updateBrand(lang);

    // تحديث القائمة
    updateNavigation(lang);

    // تحديث Hero
    updateHero(lang);

    // تحديث المميزات
    updateBenefits(lang);

    // تحديث CTA
    updateCTA(lang);

    // تحديث النموذج
    updateForm(lang);

    // تحديث الآراء
    updateTestimonials(lang);

    // تحديث التذييل
    updateFooter(lang);

    // تحديث صفحة الشكر
    updateThankYou(lang);
}

// ================================================
// Update Brand
// ================================================
function updateBrand(lang) {
    const brandMain = document.querySelector('.brand-main');
    const brandSubtitle = document.querySelector('.brand-subtitle');

    if (brandMain) brandMain.textContent = siteConfig.restaurant.name[currentLang];
    if (brandSubtitle) {
        brandSubtitle.textContent = currentLang === 'ar' ? 'Halawa Restaurant' : 'مطعم حلاوة';
    }
}

// ================================================
// Update Navigation
// ================================================
function updateNavigation(lang) {
    const navItems = [
        { id: 'navHome', key: 'home', icon: '🏠' },
        { id: 'navBenefits', key: 'benefits', icon: '⭐' },
        { id: 'navTestimonials', key: 'testimonials', icon: '💬' },
        { id: 'navBooking', key: 'booking', icon: '📅' }
    ];

    navItems.forEach(item => {
        const el = document.getElementById(item.id);
        if (el && lang.nav && lang.nav[item.key]) {
            const iconSpan = el.querySelector('.link-icon');
            const textSpan = el.querySelector('.link-text');

            if (iconSpan) iconSpan.textContent = item.icon;
            if (textSpan) textSpan.textContent = lang.nav[item.key];
        }
    });
}

// ================================================
// Update Hero Section
// ================================================
function updateHero(lang) {
    const heroElements = {
        heroBadge: lang.hero.badge,
        heroTitle: lang.hero.title,
        heroSubtitle: lang.hero.subtitle,
        heroDescription: lang.hero.description,
        heroCtaText: lang.hero.cta,
        heroFeature1: lang.hero.features.family,
        heroFeature2: lang.hero.features.buffet,
        heroFeature3: lang.hero.features.days,
        statLabel1: lang.hero.stats.seats,
        statLabel2: lang.hero.stats.price,
        statLabel3: lang.hero.stats.hours,
        offerText: lang.hero.offer,
        proofText: lang.hero.proof,
        scrollText: lang.hero.scroll
    };

    Object.keys(heroElements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = heroElements[id];
    });
}

// ================================================
// Update Benefits Section
// ================================================
function updateBenefits(lang) {
    const title = document.getElementById('benefitsTitle');
    if (title) title.textContent = lang.benefits.title;

    renderBenefits(lang.benefits.items);
}

function renderBenefits(benefits) {
    const grid = document.getElementById('benefitsGrid');
    if (!grid) return;

    grid.innerHTML = benefits.map((benefit, index) => `
        <div class="benefit-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="benefit-icon">✨</div>
            <h3 class="benefit-title">${benefit.title}</h3>
            <p class="benefit-description">${benefit.description}</p>
        </div>
    `).join('');
}

// ================================================
// Update CTA Section
// ================================================
function updateCTA(lang) {
    const ctaTitle = document.getElementById('ctaTitle');
    const ctaDescription = document.getElementById('ctaDescription');
    const ctaButton = document.getElementById('ctaButton');

    if (ctaTitle) ctaTitle.textContent = lang.cta.title;
    if (ctaDescription) ctaDescription.textContent = lang.cta.description;
    if (ctaButton) ctaButton.textContent = lang.cta.button;
}

// ================================================
// Update Form
// ================================================
function updateForm(lang) {
    const formElements = {
        formTitle: lang.form.title,
        labelFullName: lang.form.fullName,
        labelNumPeople: lang.form.numPeople,
        labelMealType: lang.form.mealType,
        optionLunch: lang.form.lunch,
        optionDinner: lang.form.dinner,
        labelDate: lang.form.date,
        submitButton: lang.form.submit
    };

    Object.keys(formElements).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName === 'OPTION') {
                el.textContent = formElements[id];
            } else if (el.tagName === 'LABEL') {
                el.textContent = formElements[id];
            } else {
                el.textContent = formElements[id];
            }
        }
    });
}

// ================================================
// Update Testimonials
// ================================================
function updateTestimonials(lang) {
    const title = document.getElementById('testimonialsTitle');
    if (title) title.textContent = lang.testimonials.title;

    renderTestimonials(lang.testimonials.items);
}

function renderTestimonials(testimonials) {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="testimonial-rating">
                ${'⭐'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        </div>
    `).join('');
}

// ================================================
// Update Footer
// ================================================
function updateFooter(lang) {
    const footerElements = {
        footerBrandName: siteConfig.restaurant.name[currentLang],
        footerLocation: lang.footer.location,
        footerSupport: lang.footer.support,
        footerSupportNumber: `${currentLang === 'ar' ? 'واتساب' : 'WhatsApp'}: ${lang.footer.supportNumber}`,
        footerPoliciesTitle: lang.footer.policiesTitle,
        policyPayment: lang.footer.policies.payment,
        policyCancellation: lang.footer.policies.cancellation,
        policyRefund: lang.footer.policies.refund,
        footerShare: lang.footer.share,
        copyright: lang.footer.copyright
    };

    Object.keys(footerElements).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = footerElements[id];
    });
}

// ================================================
// Update Thank You Page
// ================================================
function updateThankYou(lang) {
    const thankYouTitle = document.getElementById('thankYouTitle');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const backHomeButton = document.getElementById('backHomeButton');

    if (thankYouTitle) thankYouTitle.textContent = lang.thankYou.title;
    if (thankYouMessage) thankYouMessage.textContent = lang.thankYou.message;
    if (backHomeButton) backHomeButton.textContent = lang.thankYou.home;
}

// ================================================
// Update WhatsApp Link
// ================================================
function updateWhatsAppLink() {
    const supportLink = document.getElementById('supportLink');
    if (supportLink) {
        supportLink.href = `https://wa.me/${siteConfig.restaurant.whatsapp}`;
    }
}

// ================================================
// Update Social Links
// ================================================
function updateSocialLinks() {
    const links = {
        facebookLink: siteConfig.footer.socialLinks.facebook,
        instagramLink: siteConfig.footer.socialLinks.instagram,
        twitterLink: siteConfig.footer.socialLinks.twitter
    };

    Object.keys(links).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = links[id];
    });
}

// ================================================
// Update People Constraints
// ================================================
function updatePeopleConstraints() {
    const numPeopleInput = document.getElementById('numPeople');
    if (numPeopleInput) {
        numPeopleInput.min = siteConfig.form.validation.minPeople;
        numPeopleInput.max = siteConfig.form.validation.maxPeople;
    }
}

// ================================================
// Scroll to Booking
// ================================================
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ================================================
// Form Validation
// ================================================
function setupFormValidation() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            submitBooking();
        }
    });
}

function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const numPeople = parseInt(document.getElementById('numPeople').value);
    const date = document.getElementById('bookingDate').value;

    const lang = window.content[currentLang];

    // التحقق من الاسم
    if (fullName.length < siteConfig.form.validation.minNameLength) {
        alert(lang.form.errors.nameInvalid);
        return false;
    }

    // التحقق من عدد الأشخاص
    if (numPeople < siteConfig.form.validation.minPeople || numPeople > siteConfig.form.validation.maxPeople) {
        alert(lang.form.errors.peopleInvalid);
        return false;
    }

    // التحقق من التاريخ
    if (!date) {
        alert(lang.form.errors.dateRequired);
        return false;
    }

    // التحقق من اليوم المختار
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();

    if (!siteConfig.event.availableDays.includes(dayOfWeek)) {
        alert(lang.form.errors.dateInvalid);
        return false;
    }

    return true;
}

function submitBooking() {
    const formData = {
        fullName: document.getElementById('fullName').value,
        numPeople: document.getElementById('numPeople').value,
        mealType: document.getElementById('mealType').value,
        date: document.getElementById('bookingDate').value
    };

    // إرسال إلى واتساب
    const message = `
حجز جديد:
الاسم: ${formData.fullName}
عدد الأشخاص: ${formData.numPeople}
نوع الوجبة: ${formData.mealType}
التاريخ: ${formData.date}
    `.trim();

    const whatsappUrl = `https://wa.me/${siteConfig.restaurant.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ================================================
// Set Date Constraints
// ================================================
function setDateConstraints() {
    const dateInput = document.getElementById('bookingDate');
    if (!dateInput) return;

    const today = new Date().toISOString().split('T')[0];
    const endDate = siteConfig.event.endDate;

    dateInput.min = today;
    dateInput.max = endDate;
}

// ================================================
// Scroll Effects
// ================================================
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// ================================================
// Loading Animations
// ================================================
function setupLoadingAnimations() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
}

// ================================================
// Social Interactions
// ================================================
function setupSocialInteractions() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// ================================================
// Contact Interactions
// ================================================
function setupContactInteractions() {
    const contactButtons = document.querySelectorAll('[href^="tel:"], [href^="mailto:"], [href^="https://wa.me"]');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.opacity = '0.7';
            setTimeout(() => {
                btn.style.opacity = '1';
            }, 200);
        });
    });
}

console.log('✅ جميع وظائف JavaScript جاهزة!');
