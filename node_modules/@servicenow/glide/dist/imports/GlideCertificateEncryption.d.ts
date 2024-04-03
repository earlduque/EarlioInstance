export declare class GlideCertificateEncryption {
    static generateMac(key?: string, algorithm?: string, data?: string): string;
    static getThumbPrint(certificateId?: string, algorithm?: string): string;
    static getThumbPrintFromKeyStore(certificateId?: string, alias?: string, algorithm?: string): string;
    static sign(certificateId?: string, alias?: string, aliasPassword?: string, algorithm?: string, dataToSign?: string): string;
}
