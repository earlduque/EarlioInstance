import { GlideOAuthJWTConfig } from '../imports/GlideOAuthJWTConfig';
export declare class GlideOAuthClientRequest {
    getGrantType(): string;
    getHeader(name?: string): string;
    getHeaders(): Record<any, any>;
    getMIDServer(): string;
    getParameter(name?: string): string;
    getParameters(): Record<any, any>;
    getPassword(): string;
    getRefreshToken(): string;
    getScope(): string;
    getUserName(): string;
    setGlideOAuthJWTConfig(glideOAuthJWTConfig?: GlideOAuthJWTConfig): void;
    setGrantType(grantType?: string): void;
    setHead(name?: string, value?: string): void;
    setMIDServer(midServer?: string): void;
    setParameter(name?: string, value?: string): void;
    setParameters(map?: Record<any, any>): void;
    setPassword(password?: string): void;
    setRefreshToken(refreshToken?: string): void;
    setScope(scope?: string): void;
    setUserName(userName?: string): void;
    constructor();
}
