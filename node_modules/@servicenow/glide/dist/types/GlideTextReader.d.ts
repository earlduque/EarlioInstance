import { GlideScriptableInputStream } from '../imports/GlideScriptableInputStream';
export declare class GlideTextReader {
    constructor(inputStream?: GlideScriptableInputStream, charsetName?: string);
    getEncoding(): string;
    readLine(): string;
}
