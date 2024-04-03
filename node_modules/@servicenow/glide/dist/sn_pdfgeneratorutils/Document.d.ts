import { Table } from '../imports/Table';
import { OutputStream } from '../imports/OutputStream';
import { PdfPage } from '../imports/PdfPage';
import { Image } from '../imports/Image';
import { Paragraph } from '../imports/Paragraph';
import { IEventHandler } from '../imports/IEventHandler';
export declare class Document {
    addAndStartNewPage(): void;
    addAuthor(author?: string): void;
    addEvent(event?: string, eventHandler?: IEventHandler): void;
    addImage(image?: Image): void;
    addNewLine(): void;
    addNewPage(): void;
    addNewPageAtIndex(index?: number): void;
    addParagraph(paragraph?: Paragraph): void;
    addTable(table?: Table): void;
    close(): void;
    constructor(os?: any, pageSize?: PdfPage);
    static createDocument(pageSize?: PdfPage): Document;
    getPageCount(): number;
    getPageSize(): PdfPage;
    initializeDocument(os?: OutputStream, pageSize?: PdfPage): void;
    isClosed(): boolean;
    saveAsAttachment(tableName?: string, tableSysId?: string, fileName?: string): string;
    setBaseDirection(direction?: string): void;
    setMargins(topMargin?: number, rightMargin?: number, bottomMargin?: number, leftMargin?: number): void;
}
