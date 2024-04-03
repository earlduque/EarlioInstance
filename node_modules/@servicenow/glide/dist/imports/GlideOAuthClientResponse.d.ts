import { GlideOAuthToken } from '../imports/GlideOAuthToken';
export declare class GlideOAuthClientResponse {
    getBody(): string;
    getContentType(): string;
    getErrorMessage(): string;
    getResponseCode(): number;
    getResponseParameters(): Record<any, any>;
    getToken(): GlideOAuthToken;
    constructor();
}
