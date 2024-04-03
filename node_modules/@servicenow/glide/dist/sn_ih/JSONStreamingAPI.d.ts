import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class JSONStreamingAPI {
    close(): void;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    disablePrettyPrint(): JSONStreamingAPI;
    enablePrettyPrint(): JSONStreamingAPI;
    endArray(): JSONStreamingAPI;
    endObject(): JSONStreamingAPI;
    getAttachmentId(): string;
    getJSONString(): string;
    startArray(): JSONStreamingAPI;
    startArrayField(fieldName?: string): JSONStreamingAPI;
    startObject(): JSONStreamingAPI;
    writeBoolean(value?: boolean): JSONStreamingAPI;
    writeBooleanField(fieldName?: string, value?: boolean): JSONStreamingAPI;
    writeFieldName(value?: string): JSONStreamingAPI;
    writeNull(): JSONStreamingAPI;
    writeNullField(fieldName?: string): JSONStreamingAPI;
    writeNumberField(fieldName?: string, encodedValue?: string): JSONStreamingAPI;
    writeRaw(value?: string): JSONStreamingAPI;
    writeString(value?: string): JSONStreamingAPI;
    writeStringField(fieldName?: string, value?: string): JSONStreamingAPI;
}
