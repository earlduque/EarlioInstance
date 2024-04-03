import { JSONObject } from '../imports/JSONObject';
import { SystemDocumentVersion } from '../imports/SystemDocumentVersion';
export declare class DocumentVersionService {
    createDocVersionFromTemplateDoc(templateDocumentSysId?: string, docSysId?: string): JSONObject;
    createDocumentVersion(version?: SystemDocumentVersion): JSONObject;
    deleteDocumentVersion(documentVersionSysId?: string): JSONObject;
    constructor();
}
