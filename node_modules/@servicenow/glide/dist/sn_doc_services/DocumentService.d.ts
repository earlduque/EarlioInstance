import { SystemDocument } from '../imports/SystemDocument';
import { JSONObject } from '../imports/JSONObject';
export declare class DocumentService {
    createDocument(document?: SystemDocument): JSONObject;
    deleteDocument(documentSysId?: string): JSONObject;
    updateDocument(documentSysId?: string, document?: SystemDocument): JSONObject;
    constructor();
}
