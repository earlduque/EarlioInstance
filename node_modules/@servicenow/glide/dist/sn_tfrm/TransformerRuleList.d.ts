export declare class TransformerRuleList {
    addRule(symbol?: string, path?: string): TransformerRuleList;
    fromJSON(): TransformerRuleList;
    fromXML(): TransformerRuleList;
    setName(name?: string): TransformerRuleList;
    thenAdaptCurrency(currencyCode?: string, outputNumericCurrencyValue?: boolean): TransformerRuleList;
    thenAdaptDuration(inputDurationUnit?: string, outputDurationUnit?: string): TransformerRuleList;
    thenAdd(operand?: string): TransformerRuleList;
    thenApplyMap(map?: Record<any, any>): TransformerRuleList;
    thenApplyPattern(match?: string, replace?: string): TransformerRuleList;
    thenCeiling(operand?: string): TransformerRuleList;
    thenConcat(concat?: string): TransformerRuleList;
    thenConcatSymbol(symbol?: string): TransformerRuleList;
    thenConvertTimeZone(name?: string, timezone?: string): TransformerRuleList;
    thenDivideBy(operand?: string): TransformerRuleList;
    thenDivideInto(operand?: string): TransformerRuleList;
    thenFloor(operand?: string): TransformerRuleList;
    thenFormat(match?: string, replace?: string): TransformerRuleList;
    thenMax(operand?: string): TransformerRuleList;
    thenMin(operand?: string): TransformerRuleList;
    thenMultiply(operand?: string): TransformerRuleList;
    thenReplace(match?: string, replace?: string): TransformerRuleList;
    thenRoundDown(operand?: string): TransformerRuleList;
    thenRoundUp(operand?: string): TransformerRuleList;
    thenSplit(match?: string, replace?: string): TransformerRuleList;
    thenSubtract(operand?: string): TransformerRuleList;
    constructor();
}
