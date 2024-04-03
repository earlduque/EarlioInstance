import { XMLNodeIterator } from '../imports/XMLNodeIterator';
export declare class XMLNode {
    appendChild(newChild?: any): void;
    constructor();
    getAttribute(attribute?: string): string;
    getAttributes(): Record<any, any>;
    getChildNodeIterator(): XMLNodeIterator;
    getFirstChild(): XMLNode;
    getLastChild(): XMLNode;
    getNodeName(): string;
    getNodeValue(): string;
    getTextContent(): string;
    hasAttribute(attribute?: string): boolean;
    isCDATANode(): boolean;
    setAttribute(attribute?: string, value?: string): void;
    toString(): string;
}
