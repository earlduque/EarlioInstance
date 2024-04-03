import { JSONObject } from '../imports/JSONObject';
export declare class DocumentReferenceService {
    addDocumentReference(docId?: string, targetTable?: string, targetTableSysId?: string): JSONObject;
    removeDocumentReference(docId?: string, targetTable?: string, targetTableSysId?: string): JSONObject;
    constructor();
}
