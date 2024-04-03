import { SystemDocumentList } from '../imports/SystemDocumentList';
import { JSONObject } from '../imports/JSONObject';
export declare class DocumentListService {
    createDocumentList(list?: SystemDocumentList): JSONObject;
    createDocumentsFromList(listSysId?: string, tableName?: string, tableSysId?: string): JSONObject;
    deleteDocumentList(listSysId?: string): JSONObject;
    updateDocumentList(listSysId?: string, list?: SystemDocumentList): JSONObject;
    constructor();
}
