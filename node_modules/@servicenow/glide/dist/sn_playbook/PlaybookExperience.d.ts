import { GlideRecord } from '../imports/GlideRecord';
export declare class PlaybookExperience {
    static cancelPlaybook(playbookContext?: GlideRecord, cancellationReason?: string, playbookExperienceId?: string, force?: boolean): Record<any, any>;
    static cancelPlaybooksByParentRecord(parentRecord?: GlideRecord, cancellationReason?: string, scopedName?: string, playbookExperienceId?: string): Record<any, any>;
    static getPlaybooksForParentRecord(parentRecord?: GlideRecord): Array<any>;
    static parentRecordContainsPlaybook(parentRecord?: GlideRecord, scopedName?: string): boolean;
    static triggerPlaybook(scopedName?: string, parentRecord?: GlideRecord): string;
}
