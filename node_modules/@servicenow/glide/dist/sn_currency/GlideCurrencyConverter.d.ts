import { GlideCurrencyExchangeValue } from '../imports/GlideCurrencyExchangeValue';
export declare class GlideCurrencyConverter {
    convert(): GlideCurrencyExchangeValue;
    setAmount(value?: string): GlideCurrencyConverter;
    setDate(date?: any): GlideCurrencyConverter;
    setDateTime(date?: any): GlideCurrencyConverter;
    setFromCurrency(fromCurrency?: string): GlideCurrencyConverter;
    setRateTable(rateTable?: string): GlideCurrencyConverter;
    setRateTableQueryCondition(queryCondition?: string): GlideCurrencyConverter;
    setToCurrency(toCurrency?: string): GlideCurrencyConverter;
    constructor();
}
