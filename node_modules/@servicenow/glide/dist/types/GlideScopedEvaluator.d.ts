export declare class GlideScopedEvaluator {
    evaluateScript(grObj?: any, scriptField?: string, variables?: any): any;
    getVariable(name?: string): any;
    putVariable(name?: string, value?: any): void;
    reset(): void;
    withEnforcedSecurity(enforceSecurity?: boolean): any;
    withInterpretedMode(interpreted?: boolean): any;
    withQuickEvalSupported(supportQuickEval?: boolean): any;
    withReturnError(returnError?: boolean): any;
    withSandboxVariables(isSandboxVariables?: boolean): any;
    constructor();
}
