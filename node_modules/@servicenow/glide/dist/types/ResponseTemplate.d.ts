export declare class ResponseTemplate {
    query(tableName?: string, recordId?: string, searchTerm?: string, limit?: number, offset?: number, includeEvaluatedBody?: boolean, errorFormat?: string): string;
    render(templateId?: string, tableName?: string, recordId?: string, errorFormat?: string): string;
    setChannel(channelValue?: string): boolean;
    constructor();
}
