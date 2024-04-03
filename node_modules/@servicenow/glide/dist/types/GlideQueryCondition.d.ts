import { IQueryCondition } from '../imports/IQueryCondition';
export declare class GlideQueryCondition {
    addCondition(and?: IQueryCondition): void;
    addCondition(name?: string, value?: any): IQueryCondition;
    addCondition(name?: string, oper?: string, value?: any): IQueryCondition;
    addOrCondition(or?: IQueryCondition): void;
    addOrCondition(name?: string, value?: any): IQueryCondition;
    addOrCondition(name?: string, oper?: string, value?: any): IQueryCondition;
    constructor();
}
