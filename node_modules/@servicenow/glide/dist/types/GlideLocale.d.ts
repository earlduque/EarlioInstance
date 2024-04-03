import { Locale } from '../imports/Locale';
export declare class GlideLocale {
    static get(): GlideLocale;
    getCurrencyCode(): string;
    getCurrent(): Locale;
    getDecimalSeparator(): string;
    getGroupingSeparator(): string;
    getSystemLocale(): Locale;
    constructor();
}
