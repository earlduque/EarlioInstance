import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class GlideCurrencyFormatter {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    format(a?: any, b?: any): string;
    setLocale(language?: string, country?: string): GlideCurrencyFormatter;
    setMaxFractionDigits(maxFractionDigits?: number): GlideCurrencyFormatter;
    setMinFractionDigits(minFractionDigits?: number): GlideCurrencyFormatter;
}
