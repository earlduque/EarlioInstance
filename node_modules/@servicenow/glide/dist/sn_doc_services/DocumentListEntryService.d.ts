import { JSONObject } from '../imports/JSONObject';
import { SystemDocumentListEntry } from '../imports/SystemDocumentListEntry';
export declare class DocumentListEntryService {
    createDocumentListEntry(entry?: SystemDocumentListEntry): JSONObject;
    deleteDocumentListEntry(listEntrySysId?: string): JSONObject;
    updateDocumentListEntry(listEntrySysId?: string, entry?: SystemDocumentListEntry): JSONObject;
    constructor();
}
