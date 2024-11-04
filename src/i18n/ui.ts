export const languages = {
    fi: 'Suomi',
    en: 'Englanti',
};

export const defaultLang = 'fi';

export const showDefaultLang = false;

export const ui = {
    fi: {
        'header.cta': 'Aloita Nyt',
        'nav.home': 'Koti',
        'nav.about': 'Tietoa',
        'nav.services': 'Palvelut',
        'nav.contact': 'Ota Yhteyttä',
        'footer.title.about': 'Tietoa',
        'footer.title.links': 'Pikalinkit',
        'footer.title.contact': 'Ota Yhteyttä',
        'footer.title.social': 'Seuraa meitä',
        'footer.about': 'Your trusted partner in delivering exceptional solutions and services.',
    },
    en: {
        'header.cta': 'Get Started',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'footer.title.about': 'About Us',
        'footer.title.links': 'Quick Links',
        'footer.title.contact': 'Contact Info',
        'footer.title.social': 'Follow Us',
        'footer.about': 'Your trusted partner in delivering exceptional solutions and services.',
    },
} as const;

export const routes = {
    en: {
        'tietoa': 'about',
        'palvelut': 'services',
        'ota-yhteyttä': 'contact',
    },
}