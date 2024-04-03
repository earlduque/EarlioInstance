import { NativeObject } from '../imports/NativeObject';
import { NativeArray } from '../imports/NativeArray';
export declare class DuplicateTemplate {
    static canAddTasksToTemplate(taskIds?: NativeArray, templateId?: string): NativeObject;
    static createTemplate(template?: NativeObject): string;
    static getTemplate(templateId?: string): NativeObject;
    static preview(templateId?: string, taskId?: string): NativeObject;
    static publishTemplate(templateId?: string): boolean;
    static remediateTask(templateId?: string, taskId?: string): string;
    static remediateTaskRun(taskRunId?: string, triggerId?: string): void;
    static requestCancellation(templateRunId?: string): boolean;
    static retireTemplate(templateId?: string): boolean;
    static runScheduler(): void;
    static runTemplate(templateId?: string): string;
    static unPublishTemplate(templateId?: string): boolean;
    static updateTemplate(templateId?: string, template?: NativeObject): boolean;
}
