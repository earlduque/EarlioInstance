import { GlideRecord } from '../imports/GlideRecord';
import { GlideScriptableInputStream } from '../imports/GlideScriptableInputStream';
export declare class GlideSysAttachment {
    constructor();
    copy(sourceTable?: string, sourceID?: string, targetTable?: string, targetID?: string): Array<any>;
    static copy(sourceTable?: string, sourceID?: string, targetTable?: string, targetID?: string): Array<any>;
    deleteAttachment(sysAttachmentID?: string): void;
    getAttachments(tableName?: string, sys_id?: string): GlideRecord;
    getContent(sysAttachment?: GlideRecord): string;
    getContentBase64(sysAttachment?: GlideRecord): string;
    getContentStream(sysAttachmentID?: string): GlideScriptableInputStream;
    write(gr?: GlideRecord, fileName?: string, contentType?: string, content?: string): string;
    writeBase64(gr?: GlideRecord, fileName?: string, contentType?: string, contentBase64?: string): string;
    writeContentStream(gr?: GlideRecord, fileName?: string, contentType?: string, is?: GlideScriptableInputStream): string;
}
