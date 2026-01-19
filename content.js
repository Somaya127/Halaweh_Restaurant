// ================================================
// ملف المحتوى - يستخدم البيانات من config.js
// ================================================

const content = {
    ar: {
        nav: {
            home: siteConfig.navigation.home.ar,
            benefits: siteConfig.navigation.benefits.ar,
            testimonials: siteConfig.navigation.testimonials.ar,
            booking: siteConfig.navigation.booking.ar
        },
        hero: {
            title: siteConfig.hero.title.ar,
            subtitle: siteConfig.hero.subtitle.ar,
            description: siteConfig.hero.description.ar,
            cta: siteConfig.hero.buttonText.ar,
            badge: siteConfig.hero.badge.ar,
            heroTitle: siteConfig.hero.heroTitle.ar,
            heroSub: siteConfig.hero.heroSub.ar,
            price: siteConfig.hero.price.ar,
            features: {
                family: siteConfig.hero.features.family.ar,
                buffet: siteConfig.hero.features.buffet.ar,
                days: siteConfig.hero.features.days.ar
            },
            stats: {
                seats: siteConfig.hero.stats.seats.ar,
                price: siteConfig.hero.stats.price.ar,
                hours: siteConfig.hero.stats.hours.ar
            },
            offer: siteConfig.hero.offer.ar,
            proof: siteConfig.hero.proof.ar,
            scroll: siteConfig.hero.scroll.ar
        },
        benefits: {
            title: siteConfig.benefits.title.ar,
            items: siteConfig.benefits.items.map(item => ({
                title: item.title.ar,
                description: item.description.ar
            }))
        },
        cta: {
            title: siteConfig.cta.title.ar,
            description: siteConfig.cta.description.ar,
            button: siteConfig.cta.buttonText.ar
        },
        form: {
            title: siteConfig.form.title.ar,
            fullName: siteConfig.form.fields.fullName.ar,
            numPeople: siteConfig.form.fields.numPeople.ar,
            mealType: siteConfig.form.fields.mealType.ar,
            lunch: siteConfig.form.mealOptions.lunch.ar,
            dinner: siteConfig.form.mealOptions.dinner.ar,
            date: siteConfig.form.fields.date.ar,
            submit: siteConfig.form.submitButton.ar,
            errors: {
                nameRequired: siteConfig.form.errors.nameRequired.ar,
                nameInvalid: siteConfig.form.errors.nameInvalid.ar,
                peopleRequired: siteConfig.form.errors.peopleRequired.ar,
                peopleInvalid: siteConfig.form.errors.peopleInvalid.ar,
                dateRequired: siteConfig.form.errors.dateRequired.ar,
                dateInvalid: siteConfig.form.errors.dateInvalid.ar
            }
        },
        testimonials: {
            title: siteConfig.testimonials.title.ar,
            items: siteConfig.testimonials.items.map(item => ({
                name: item.name.ar,
                text: item.text.ar,
                rating: item.rating
            }))
        },
        footer: {
            copyright: siteConfig.footer.copyright.ar,
            support: siteConfig.footer.support.ar,
            policiesTitle: siteConfig.footer.policiesTitle.ar,
            policies: {
                payment: siteConfig.footer.policies.payment.ar,
                cancellation: siteConfig.footer.policies.cancellation.ar,
                refund: siteConfig.footer.policies.refund.ar
            },
            share: siteConfig.footer.share.ar,
            location: siteConfig.restaurant.location.ar,
            supportNumber: siteConfig.restaurant.supportNumber.ar
        },
        thankYou: {
            title: siteConfig.thankYou.title.ar,
            message: siteConfig.thankYou.message.ar,
            home: siteConfig.thankYou.buttonText.ar
        }
    },
    en: {
        nav: {
            home: siteConfig.navigation.home.en,
            benefits: siteConfig.navigation.benefits.en,
            testimonials: siteConfig.navigation.testimonials.en,
            booking: siteConfig.navigation.booking.en
        },
        hero: {
            title: siteConfig.hero.title.en,
            subtitle: siteConfig.hero.subtitle.en,
            description: siteConfig.hero.description.en,
            cta: siteConfig.hero.buttonText.en,
            badge: siteConfig.hero.badge.en,
            heroTitle: siteConfig.hero.heroTitle.en,
            heroSub: siteConfig.hero.heroSub.en,
            price: siteConfig.hero.price.en,
            features: {
                family: siteConfig.hero.features.family.en,
                buffet: siteConfig.hero.features.buffet.en,
                days: siteConfig.hero.features.days.en
            },
            stats: {
                seats: siteConfig.hero.stats.seats.en,
                price: siteConfig.hero.stats.price.en,
                hours: siteConfig.hero.stats.hours.en
            },
            offer: siteConfig.hero.offer.en,
            proof: siteConfig.hero.proof.en,
            scroll: siteConfig.hero.scroll.en
        },
        benefits: {
            title: siteConfig.benefits.title.en,
            items: siteConfig.benefits.items.map(item => ({
                title: item.title.en,
                description: item.description.en
            }))
        },
        cta: {
            title: siteConfig.cta.title.en,
            description: siteConfig.cta.description.en,
            button: siteConfig.cta.buttonText.en
        },
        form: {
            title: siteConfig.form.title.en,
            fullName: siteConfig.form.fields.fullName.en,
            numPeople: siteConfig.form.fields.numPeople.en,
            mealType: siteConfig.form.fields.mealType.en,
            lunch: siteConfig.form.mealOptions.lunch.en,
            dinner: siteConfig.form.mealOptions.dinner.en,
            date: siteConfig.form.fields.date.en,
            submit: siteConfig.form.submitButton.en,
            errors: {
                nameRequired: siteConfig.form.errors.nameRequired.en,
                nameInvalid: siteConfig.form.errors.nameInvalid.en,
                peopleRequired: siteConfig.form.errors.peopleRequired.en,
                peopleInvalid: siteConfig.form.errors.peopleInvalid.en,
                dateRequired: siteConfig.form.errors.dateRequired.en,
                dateInvalid: siteConfig.form.errors.dateInvalid.en
            }
        },
        testimonials: {
            title: siteConfig.testimonials.title.en,
            items: siteConfig.testimonials.items.map(item => ({
                name: item.name.en,
                text: item.text.en,
                rating: item.rating
            }))
        },
        footer: {
            copyright: siteConfig.footer.copyright.en,
            support: siteConfig.footer.support.en,
            policiesTitle: siteConfig.footer.policiesTitle.en,
            policies: {
                payment: siteConfig.footer.policies.payment.en,
                cancellation: siteConfig.footer.policies.cancellation.en,
                refund: siteConfig.footer.policies.refund.en
            },
            share: siteConfig.footer.share.en,
            location: siteConfig.restaurant.location.en,
            supportNumber: siteConfig.restaurant.supportNumber.en
        },
        thankYou: {
            title: siteConfig.thankYou.title.en,
            message: siteConfig.thankYou.message.en,
            home: siteConfig.thankYou.buttonText.en
        }
    }
};

// تصدير المحتوى للاستخدام في script.js
if (typeof window !== 'undefined') {
    window.content = content;
}
