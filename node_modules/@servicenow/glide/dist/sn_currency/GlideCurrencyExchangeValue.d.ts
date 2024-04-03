import { GlideCurrencyValue } from '../imports/GlideCurrencyValue';
export declare class GlideCurrencyExchangeValue {
    equals(o?: any): boolean;
    getAmount(): string;
    getCurrency(): string;
    getCurrencyValue(): GlideCurrencyValue;
    getOriginalAmount(): string;
    getOriginalCurrency(): string;
    getRate(): string;
    getRateSysId(): string;
    toString(): string;
    constructor();
}
