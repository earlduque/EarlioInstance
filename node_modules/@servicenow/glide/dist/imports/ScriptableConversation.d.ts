import { Context } from '../imports/Context';
import { IScriptableUser } from '../imports/IScriptableUser';
import { Function } from '../imports/Function';
export declare class ScriptableConversation {
    addSubscriber(userSysID?: string, silent?: boolean): void;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    static create(options?: Record<any, any>): ScriptableConversation;
    static get(documentSysID?: string, documentTable?: any): ScriptableConversation;
    static getAgentName(agentSysUserID?: string): string;
    getDeviceType(): string;
    static getLiveGroupProfileIdByInteractionMetadata(table?: string, id?: string): string;
    getName(): string;
    getRecordTableName(): string;
    getSubscribers(): IScriptableUser[];
    getSysID(): string;
    static getVersion(conversationSysId?: string): string;
    removeSubscriber(userSysID?: string, silent?: boolean): void;
    sendMessage(options?: any): void;
    updateInteractionInternalTranscript(interactionId?: string): boolean;
}
