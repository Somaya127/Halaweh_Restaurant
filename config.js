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
        whatsapp: "962799123456",
        supportNumber: {
            ar: "+962 79 912 3456",
            en: "+962 79 912 3456"
        }
    },

    // ========== تفاصيل الفعالية ==========
    event: {
        startDate: "2026-01-20",
        endDate: "2026-02-20",
        availableDays: [4, 5, 6],
        lunchTime: {
            ar: "3 مساءً",
            en: "3 PM"
        },
        dinnerTime: {
            ar: "8 مساءً",
            en: "8 PM"
        },
        duration: 3,
        totalSeats: 200,
        pricePerSeat: 20,
        currency: {
            ar: "دينار",
            en: "JOD"
        }
    },

    // ========== محتوى الصفحة الرئيسية ==========
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
        heroTitle: {
            ar: "فعالية الشتاء العائلية",
            en: "Winter Family Event"
        },
        heroSub: {
            ar: "استمتع بأشهى بوفيهات الغداء والعشاء في قلب عمان - خلدا",
            en: "Enjoy the finest lunch and dinner buffets in Amman - Khalda"
        },
        price: {
            ar: "20 دينار للمقعد",
            en: "20 JOD per seat"
        },
        buttonText: {
            ar: "احجز الآن",
            en: "Book Now"
        },
        badge: {
            ar: "فعالية شتوية مميزة",
            en: "Special Winter Event"
        },
        features: {
            family: {
                ar: "أجواء عائلية",
                en: "Family Atmosphere"
            },
            buffet: {
                ar: "بوفيه مفتوح",
                en: "Open Buffet"
            },
            days: {
                ar: "خميس - جمعة - سبت",
                en: "Thu - Fri - Sat"
            }
        },
        stats: {
            seats: {
                ar: "مقعد متاح",
                en: "Seats Available"
            },
            price: {
                ar: "دينار للفرد",
                en: "JOD per Person"
            },
            hours: {
                ar: "ساعات متصلة",
                en: "Consecutive Hours"
            }
        },
        offer: {
            ar: "عرض خاص لفترة محدودة",
            en: "Special Limited Time Offer"
        },
        proof: {
            ar: "أكثر من 1000 عميل راضي",
            en: "Over 1000 Satisfied Customers"
        },
        scroll: {
            ar: "استكشف المزيد",
            en: "Explore More"
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

    // ========== قسم الدعوة للحجز ==========
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
        validation: {
            minNameLength: 2,
            minPeople: 1,
            maxPeople: 200
        },
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
                ar: "العدد يجب أن يكون بين 1 و 200",
                en: "Number must be between 1 and 200"
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

    // ========== التذييل ==========
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
        socialLinks: {
            facebook: "https://facebook.com/halaweh-restaurant",
            instagram: "https://instagram.com/halaweh-restaurant",
            twitter: "https://twitter.com/halaweh-restaurant"
        }
    },

    // ========== إعدادات الموقع العامة ==========
    settings: {
        defaultLanguage: 'ar',
        defaultTheme: "light",
        defaultColorMode: "warm",
        smoothScroll: true
    }
};
