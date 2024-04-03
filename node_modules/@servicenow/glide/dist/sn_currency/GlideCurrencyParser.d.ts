import { GlideCurrencyValue } from '../imports/GlideCurrencyValue';
export declare class GlideCurrencyParser {
    parse(value?: string): GlideCurrencyValue;
    setDefaultCurrencyCode(currencyCode?: string): GlideCurrencyParser;
    setLocale(language?: string, country?: string): GlideCurrencyParser;
    constructor();
}
