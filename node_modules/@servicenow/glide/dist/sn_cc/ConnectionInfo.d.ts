import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
import { ScriptableStandardCredential } from '../imports/ScriptableStandardCredential';
export declare class ConnectionInfo {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getAttribute(name?: string): string;
    getConnectionRetries(): number;
    getConnectionTimeout(): number;
    getCredential(): ScriptableStandardCredential;
    getCredentialAttribute(name?: string): string;
    getDataMap(): Record<any, any>;
    getExtendedAttributes(): Record<any, any>;
    getHost(): string;
    getName(): string;
    getPort(): number;
    getProtocol(): string;
}
