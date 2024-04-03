export declare class DynamicTranslation {
    static fixActivateServicenowTranslator(): void;
    static fixDefaultSchemaInTranslatorConfig(): void;
    static fixSchemaForTranslatorConfigTable(): void;
    static fixTranslatorConfigRecords(oldTranslatorConfigs?: any, newTranslatorConfigs?: any, defaultVersion?: any, versionToBeDefaulted?: any): void;
    static getDetectedLanguage(text?: any, parms?: any): any;
    static getDetectedLanguages(texts?: any, parms?: any): any;
    static getTranslation(textToTranslate?: any, parms?: any): any;
    static getTranslations(textsToTranslate?: any, parms?: any): any;
    static isEnabled(parms?: any): any;
    static isTranslationEnabled(translator?: any): any;
    static patchVersionIfWrong(translatorConfigs?: any): void;
}
