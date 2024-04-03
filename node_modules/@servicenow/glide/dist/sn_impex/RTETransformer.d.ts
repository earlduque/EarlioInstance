export declare class RTETransformer {
    constructor(transformDefinitionId?: string, verboseLogging?: boolean, source?: string, batchSize?: number, additionalProperties?: Record<any, any>);
    rteTransform(messages?: Array<any>): any;
    transform(messages?: Array<any>): any;
}
