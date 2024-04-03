import { XMLNode } from '../imports/XMLNode';
export declare class XMLDocument2 {
    constructor();
    createElement(name?: string): XMLNode;
    createElementWithTextValue(name?: string, value?: string): XMLNode;
    getDocumentElement(): XMLNode;
    getFirstNode(xpath?: string): XMLNode;
    getNextNode(prev?: any): XMLNode;
    getNode(xpath?: string): XMLNode;
    getNodeText(xpath?: string): string;
    isValid(): boolean;
    parseXML(xmlDoc?: string): boolean;
    setCurrentElement(element?: any): void;
    setEnableCDATAReporting(enableCDATAReporting?: boolean): void;
    setNamespaceAware(nsAware?: boolean): void;
    toString(): string;
}
