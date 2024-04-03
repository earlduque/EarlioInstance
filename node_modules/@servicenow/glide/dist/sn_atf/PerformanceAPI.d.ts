export declare class PerformanceAPI {
    static canCompare(performanceRunId1?: string, performanceRunId2?: string): boolean;
    static doesSuiteHavePerformanceComparableStep(suiteId?: string): boolean;
    static doesTestHavePerformanceComparableStep(testId?: string): boolean;
    static generateComparison(performanceID?: string): string;
    static getComparablePerformanceRunStatuses(): string;
    static isCloudRunnerActive(): boolean;
    static isCloudRunnerActiveAndSupportsPerformance(): boolean;
    static isComparable(sysId?: string): boolean;
}
