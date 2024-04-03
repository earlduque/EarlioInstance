import { GlideRecord } from '../imports/GlideRecord';
export declare class Messaging {
    static attachIcon(messagingApplicationId?: string): void;
    static processInbound(messagingInboundId?: string): void;
    static send(messagingApplication?: GlideRecord, recipient?: string, messagingContent?: GlideRecord, target?: GlideRecord): void;
    static updateRateLimit(context?: string, retryAfterSeconds?: number): void;
}
