import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class GeniusResultAnswer {
    addDataMap(map?: any): boolean;
    addSearchAttribute(key?: string, values?: string[]): boolean;
    addSearchPhrases(searchPhrases?: string[]): boolean;
    allowSearchPhraseOverwrite(): void;
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    disableSearchPhraseOverwrite(): void;
    dprSearch(numDocsToMatch?: number, threshold?: number, field?: string[]): void;
    searchTitleOnly(titleOnly?: boolean): void;
    setEncodedQuery(query?: string): boolean;
    setSearchLimit(searchLimit?: number): boolean;
    setSearchPhrase(searchPhrase?: string): boolean;
    setSemanticDocumentMatchCount(numDocsToMatch?: number): void;
    setSemanticDocumentMatchThreshold(threshold?: number): void;
    setSemanticSearch(semanticSearch?: boolean): void;
    setTable(table?: string): boolean;
    snippetSearch(snippetSearch?: boolean): void;
    spellCheck(spellCheck?: boolean): void;
}
