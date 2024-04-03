import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class RESTResponseV2 {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getAllHeaders(): Array<any>;
    getBody(): string;
    getCookies(): any;
    getErrorCode(): number;
    getErrorMessage(): string;
    getHeader(name?: string): string;
    getHeaders(): Record<any, any>;
    getQueryString(): string;
    getResponseAttachmentSysid(): string;
    getStatusCode(): number;
    haveError(): boolean;
    waitForResponse(timeoutSecs?: number): void;
}
