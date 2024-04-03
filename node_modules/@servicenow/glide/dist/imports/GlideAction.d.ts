import { GlideURI } from '../imports/GlideURI';
export declare class GlideAction {
    constructor(sysId?: string);
    get(name?: string): string;
    getActionSysId(): string;
    getCategory(): string;
    getGlideURI(): GlideURI;
    getRedirectURL(): string;
    getReturnURL(): string;
    getValues(): Record<any, any>;
    hasGlideURI(): boolean;
    openGlideRecord(o?: any): void;
    setNoPop(noPop?: boolean): void;
    setRedirectURL(o?: any): void;
    setReturnURL(o?: any): void;
}
