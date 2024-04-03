import { ScriptableRequestAuthCredential } from '../imports/ScriptableRequestAuthCredential';
import { ScriptableStandardCredential } from '../imports/ScriptableStandardCredential';
export declare class StandardCredentialsProvider {
    getAuthCredentialByID(id?: string): ScriptableRequestAuthCredential;
    getCredentialByAliasID(aliasId?: string): ScriptableStandardCredential;
    getCredentialByID(id?: string): ScriptableStandardCredential;
    getCredentials(types?: Array<any>, credentialTag?: string): Array<any>;
    constructor();
}
