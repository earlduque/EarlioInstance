import { GlideScriptableInputStream } from '../imports/GlideScriptableInputStream';
export declare class GlideDigest {
    getMD5Base64(toHash?: string): string;
    getMD5Base64FromInputStream(isToHash?: GlideScriptableInputStream): string;
    getMD5Hex(toHash?: string): string;
    getMD5HexFromInputStream(isToHash?: GlideScriptableInputStream): string;
    getSHA1Base64(toHash?: string): string;
    getSHA1Base64FromInputStream(isToHash?: GlideScriptableInputStream): string;
    getSHA1Hex(toHash?: string): string;
    getSHA1HexFromInputStream(isToHash?: GlideScriptableInputStream): string;
    getSHA256Base64(toHash?: string): string;
    getSHA256Base64FromInputStream(isToHash?: GlideScriptableInputStream): string;
    getSHA256Hex(toHash?: string): string;
    getSHA256HexFromInputStream(isToHash?: GlideScriptableInputStream): string;
    md5_digest(toHash?: string): string;
    sha1_digest(toHash?: string): string;
    sha256_digest(toHash?: string): string;
    constructor();
}
