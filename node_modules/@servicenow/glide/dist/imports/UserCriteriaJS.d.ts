import { Context } from '../imports/Context';
import { Function } from '../imports/Function';
export declare class UserCriteriaJS {
    constructor(cx?: Context, args?: any[], ctorObj?: Function, inNewExpr?: boolean);
    create(columnValues?: Record<any, any>, standardUpdate?: boolean): string;
    deleteRecord(): boolean;
    read(columns?: string[]): Record<any, any>;
    setActive(active?: boolean): void;
    setAdvanced(advanced?: boolean): void;
    setCompanies(companies?: string): void;
    setDepartments(departments?: string): void;
    setGroups(groups?: string): void;
    setLocations(locations?: string): void;
    setMatchAll(matchAll?: boolean): void;
    setName(name?: string): void;
    setRoles(roles?: string): void;
    setScript(script?: string): void;
    setUsers(users?: string): void;
    update(columnValues?: Record<any, any>, reason?: string): string;
}
