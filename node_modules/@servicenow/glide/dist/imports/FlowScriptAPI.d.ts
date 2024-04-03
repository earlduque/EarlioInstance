import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class FlowScriptAPI {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    getContextID(): string;
}
