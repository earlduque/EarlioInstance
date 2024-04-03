import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class GlideNativeRecordMutex {
    constructor(cs?: Context, args?: any[], ctorObj?: Function, inNew?: boolean);
    get(): boolean;
    release(): void;
    setMaxSpins(maxSpins?: number): void;
    setMutexExpires(expires?: number): void;
    touch(): void;
}
