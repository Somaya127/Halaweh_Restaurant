// ================================================
// ملف إعدادات مطعم حلاوة
// يمكن تعديل جميع البيانات في هذا الملف بسهولة
// ================================================

const siteConfig = {
    
    // ========== معلومات المطعم الأساسية ==========
    restaurant: {
        name: {
            ar: "مطعم حلاوة",
            en: "Halaweh Restaurant"
        },
        description: {
            ar: "مطعم ومقهى - مأكولات عربية وحلويات متنوعة",
            en: "Restaurant & Café - Arabic Cuisine & Diverse Sweets"
        },
        location: {
            ar: "خلدا - عمان، الأردن",
            en: "Khalda - Amman, Jordan"
        },
        // رقم الواتساب (يجب كتابته بالصيغة الدولية بدون + أو صفر)
        whatsapp: "962799123456", // استبدل هذا بالرقم الحقيقي
        supportNumber: {
            ar: "+962 79 912 3456",
            en: "+962 79 912 3456"
        }
    },

    // ========== تفاصيل الفعالية ==========
    event: {
        // تاريخ بداية الفعالية (صيغة: YYYY-MM-DD)
        startDate: "2026-01-20",
        // تاريخ نهاية الفعالية (صيغة: YYYY-MM-DD)
        endDate: "2026-02-20",
        // الأيام المتاحة: 0=الأحد, 1=الاثنين, 2=الثلاثاء, 3=الأربعاء, 4=الخميس, 5=الجمعة, 6=السبت
        availableDays: [4, 5, 6],
        // أوقات الوجبات
        lunchTime: {
            ar: "3 مساءً",
            en: "3 PM"
        },
        dinnerTime: {
            ar: "8 مساءً",
            en: "8 PM"
        },
        // مدة كل جلسة بالساعات
        duration: 3,
        // عدد المقاعد المتاحة
        totalSeats: 200,
        // سعر المقعد الواحد
        pricePerSeat: 20,
        // العملة
        currency: {
            ar: "دينار",
            en: "JOD"
        }
    },

    // ========== محتوى الصفحة الرئيسية (Hero) ==========
    hero: {
        title: {
            ar: "مطعم حلاوة",
            en: "Halaweh Restaurant"
        },
        subtitle: {
            ar: "مطعم ومقهى - مأكولات عربية وحلويات متنوعة",
            en: "Restaurant & Café - Arabic Cuisine & Diverse Sweets"
        },
        description: {
            ar: "فعالية شتوية عائلية مميزة كل خميس وجمعة وسبت",
            en: "Special Winter Family Event Every Thursday, Friday & Saturday"
        },
        buttonText: {
            ar: "احجز الآن",
            en: "Book Now"
        }
    },

    // ========== مميزات الفعالية ==========
    benefits: {
        title: {
            ar: "لماذا تختار فعاليتنا؟",
            en: "Why Choose Our Event?"
        },
        items: [
            {
                title: {
                    ar: "بوفيه مفتوح",
                    en: "Open Buffet"
                },
                description: {
                    ar: "بوفيه غداء وعشاء بأصناف متنوعة من المأكولات العربية والعالمية",
                    en: "Lunch and dinner buffet with diverse Arabic and international dishes"
                }
            },
            {
                title: {
                    ar: "أجواء عائلية",
                    en: "Family Atmosphere"
                },
                description: {
                    ar: "مكان مريح ومناسب لجميع أفراد العائلة",
                    en: "Comfortable place suitable for all family members"
                }
            },
            {
                title: {
                    ar: "موقع مميز",
                    en: "Prime Location"
                },
                description: {
                    ar: "في قلب خلدا - عمان، سهل الوصول",
                    en: "In the heart of Khalda - Amman, easy access"
                }
            },
            {
                title: {
                    ar: "سعر مناسب",
                    en: "Affordable Price"
                },
                description: {
                    ar: "20 دينار للشخص الواحد لمدة 3 ساعات",
                    en: "20 JOD per person for 3 hours"
                }
            }
        ]
    },

    // ========== قسم الدعوة للحجز (CTA) ==========
    cta: {
        title: {
            ar: "ابدأ تجربتك المميزة",
            en: "Start Your Special Experience"
        },
        description: {
            ar: "احجز مقعدك الآن واستمتع بأجواء شتوية دافئة",
            en: "Book your seat now and enjoy warm winter vibes"
        },
        buttonText: {
            ar: "احجز الآن",
            en: "Book Now"
        }
    },

    // ========== آراء العملاء ==========
    testimonials: {
        title: {
            ar: "آراء عملائنا",
            en: "Customer Reviews"
        },
        items: [
            {
                name: {
                    ar: "أحمد محمود",
                    en: "Ahmad Mahmoud"
                },
                text: {
                    ar: "تجربة رائعة! الطعام لذيذ والأجواء عائلية مميزة",
                    en: "Amazing experience! Delicious food and wonderful family atmosphere"
                },
                rating: 5
            },
            {
                name: {
                    ar: "سارة خالد",
                    en: "Sarah Khaled"
                },
                text: {
                    ar: "البوفيه متنوع والخدمة ممتازة، ننصح بشدة",
                    en: "Diverse buffet and excellent service, highly recommended"
                },
                rating: 5
            },
            {
                name: {
                    ar: "محمد العلي",
                    en: "Mohammed AlAli"
                },
                text: {
                    ar: "مكان رائع للعائلات، السعر مناسب جداً",
                    en: "Great place for families, very affordable price"
                },
                rating: 5
            }
        ]
    },

    // ========== نموذج الحجز ==========
    form: {
        title: {
            ar: "نموذج الحجز",
            en: "Booking Form"
        },
        fields: {
            fullName: {
                ar: "الاسم الكامل",
                en: "Full Name"
            },
            numPeople: {
                ar: "عدد الأشخاص",
                en: "Number of People"
            },
            mealType: {
                ar: "نوع الوجبة",
                en: "Meal Type"
            },
            date: {
                ar: "تاريخ الحجز",
                en: "Booking Date"
            }
        },
        mealOptions: {
            lunch: {
                ar: "غداء - 3 مساءً",
                en: "Lunch - 3 PM"
            },
            dinner: {
                ar: "عشاء - 8 مساءً",
                en: "Dinner - 8 PM"
            }
        },
        submitButton: {
            ar: "تأكيد الحجز",
            en: "Confirm Booking"
        },
        // إعدادات التحقق من صحة البيانات
        validation: {
            minNameLength: 2,
            minPeople: 1,
            maxPeople: 10
        },
        // رسائل الخطأ
        errors: {
            nameRequired: {
                ar: "الاسم الكامل مطلوب",
                en: "Full name is required"
            },
            nameInvalid: {
                ar: "الاسم يجب أن يحتوي على حرفين على الأقل",
                en: "Name must be at least 2 characters"
            },
            peopleRequired: {
                ar: "عدد الأشخاص مطلوب",
                en: "Number of people is required"
            },
            peopleInvalid: {
                ar: "العدد يجب أن يكون بين 1 و 10",
                en: "Number must be between 1 and 10"
            },
            dateRequired: {
                ar: "تاريخ الحجز مطلوب",
                en: "Booking date is required"
            },
            dateInvalid: {
                ar: "يجب اختيار يوم خميس أو جمعة أو سبت",
                en: "Please select Thursday, Friday, or Saturday"
            }
        }
    },

    // ========== صفحة الشكر ==========
    thankYou: {
        title: {
            ar: "شكراً لحجزك!",
            en: "Thank You for Your Booking!"
        },
        message: {
            ar: "تم استلام طلب الحجز بنجاح. سنتواصل معك قريباً",
            en: "Your booking request has been received successfully. We will contact you soon"
        },
        buttonText: {
            ar: "العودة للرئيسية",
            en: "Back to Home"
        }
    },

    // ========== قائمة التنقل ==========
    navigation: {
        home: {
            ar: "الرئيسية",
            en: "Home"
        },
        benefits: {
            ar: "المميزات",
            en: "Benefits"
        },
        testimonials: {
            ar: "آراء العملاء",
            en: "Testimonials"
        },
        booking: {
            ar: "الحجز",
            en: "Booking"
        },
        langToggleText: {
            ar: "English",
            en: "عربي"
        }
    },

    // ========== التذييل (Footer) ==========
    footer: {
        copyright: {
            ar: "© 2026 مطعم حلاوة. جميع الحقوق محفوظة",
            en: "© 2026 Halaweh Restaurant. All Rights Reserved"
        },
        support: {
            ar: "الدعم",
            en: "Support"
        },
        policiesTitle: {
            ar: "السياسات",
            en: "Policies"
        },
        policies: {
            payment: {
                ar: "سياسة الدفع",
                en: "Payment Policy"
            },
            cancellation: {
                ar: "سياسة الإلغاء",
                en: "Cancellation Policy"
            },
            refund: {
                ar: "سياسة الاسترجاع",
                en: "Refund Policy"
            }
        },
        share: {
            ar: "شارك على وسائل التواصل",
            en: "Share on Social Media"
        },
        // روابط مواقع التواصل الاجتماعي
        socialLinks: {
            facebook: "https://facebook.com/halaweh-restaurant",
            instagram: "https://instagram.com/halaweh-restaurant",
            twitter: "https://twitter.com/halaweh-restaurant"
        }
    },

    // ========== إعدادات الموقع العامة ==========
    settings: {
        // اللغة الافتراضية: 'ar' للعربي أو 'en' للإنجليزي
        defaultLanguage: "ar",
        // المظهر الافتراضي: 'light' أو 'dark'
        defaultTheme: "light",
        // نمط الألوان الافتراضي: 'warm' أو 'cool' أو 'nature'
        defaultColorMode: "warm",
        // تفعيل التمرير السلس
        smoothScroll: true
    }
};

// ================================================
// ملاحظات هامة للتعديل:
// ================================================
// 1. عند تغيير التواريخ، استخدم صيغة: YYYY-MM-DD
// 2. عند تغيير رقم الواتساب، احذف الصفر الأول واكتب الرقم بالصيغة الدولية
// 3. يمكنك إضافة المزيد من المميزات في benefits.items
// 4. يمكنك إضافة أو حذف آراء العملاء من testimonials.items
// 5. التقييم (rating) يكون من 1 إلى 5
// 6. availableDays: الأحد=0, الاثنين=1, الثلاثاء=2, الأربعاء=3, الخميس=4, الجمعة=5, السبت=6
// ================================================
