export type SiteConfig = {
    name: string
    description: string
    themeColor?: string;
    url: string;
    logo?: string;
    favicon?: string;
    contactEmail?: string;
    socialLinks?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
        youtube?: string;
    };
    businessInfo?: {
        address?: string;
        phone?: string;
        hours?: string;
    };
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
}

export interface Metadata {
    title: string;
    description: string;
    author: string;
    keywords: string[];
    og: OpenGraph;
    twitter: TwitterCard;
    canonical?: string;
    robots?: string;
    viewport?: string;
    charset?: string;
    language?: string;
    publishedTime?: string;
    modifiedTime?: string;
    category?: string;
    type?: string;
    siteName?: string;
    locale?: string;
    alternateLocales?: string[];
    themeColor?: string;
    rating?: string;
    generator?: string;
    applicationName?: string;
    msapplicationTileColor?: string;
    msapplicationTileImage?: string;
}

export interface OpenGraph {
    title: string;
    description: string;
    url: string;
    image: string;
    type: string;
    siteName?: string;
    locale?: string;
    alternateLocales?: string[];
    audio?: string;
    video?: string;
    determiner?: string;
    images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
    }>;
    videos?: Array<{
        url: string;
        width?: number;
        height?: number;
        type?: string;
    }>;
}

export interface TwitterCard {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    site: string;
    creator?: string;
    card: 'summary' | 'summary_large_image' | 'app' | 'player';
    player?: {
        url?: string;
        width?: number;
        height?: number;
        stream?: string;
    };
    app?: {
        name: {
            iPhone?: string;
            iPad?: string;
            googlePlay?: string;
        };
        id: {
            iPhone?: string;
            iPad?: string;
            googlePlay?: string;
        };
        url: {
            iPhone?: string;
            iPad?: string;
            googlePlay?: string;
        };
    };
}

export interface MetaProps {
    meta: Metadata;
    schema?: {
        organization?: boolean;
        website?: boolean;
        localBusiness?: boolean;
    };
}