import { useEffect } from 'react';
import BigNumber from "bignumber.js";

const addBodyClass: (className: string) => void = (className: string) => document.body.classList.add(className);
const removeBodyClass: (className: string) => void = (className: string) => document.body.classList.remove(className);

export function objMap(obj: object, process: (k: number | string, v: any) => boolean, shouldProcess: (k: number | string, v: any) => boolean): any {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) =>
            [k, (v === Object(v) && !Array.isArray(v) && shouldProcess(k, v)) ? objMap(v, process, shouldProcess) : process(k, v)]
        )
    );
}

export function toUnsigned(val: number | undefined | null): number {
    if (val === undefined) {
        return NaN;
    }
    if (val === null) {
        return NaN;
    }
    if (val > 0xFFFFFFFF) {
        return NaN;
    } else if (val < -2147483648) {
        return NaN;
    }
    if (val >= 0) {
        return val;
    } else {
        return 0x100000000 + val;
    }
};

export function multAndTrunc(a: number, b: number): number {
    var ua : BigNumber = new BigNumber(toUnsigned(a).toString(), 10);
    var ub : BigNumber = new BigNumber(toUnsigned(b).toString(), 10);
    var uc:BigNumber = ua.multipliedBy(ub);
    var ret:BigNumber = uc.mod(new BigNumber("100000000", 16));
    return ret.toNumber()
};

export function udivAndTrunc(a: number, b: number): number {
    var config: BigNumber.Config = BigNumber.config();
    BigNumber.set({ DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_DOWN });
    var ua: BigNumber = new BigNumber(toUnsigned(a).toString(), 10);
    var ub: BigNumber = new BigNumber(toUnsigned(b).toString(), 10);
    var uc: BigNumber = ua.dividedBy(ub);
    var ret: BigNumber = uc.mod(new BigNumber("100000000", 16));
    var retn: number = ret.toNumber();
    if (retn == -0) {
        retn = 0;
    }
    BigNumber.set(config);
    return ret.toNumber()
};

export function divAndTrunc(a: number, b: number): number {
    var config: BigNumber.Config = BigNumber.config();
    BigNumber.set({ DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_DOWN });
    var ua: BigNumber = new BigNumber(a.toString(), 10);
    var ub: BigNumber = new BigNumber(b.toString(), 10);
    var uc: BigNumber = ua.dividedBy(ub);
    var ret: BigNumber = uc.mod(new BigNumber("100000000", 16));
    var retn : number = toUnsigned(ret.toNumber());
    if (retn == -0) {
        retn = 0;
    }
    BigNumber.set(config);
    return retn
};

export function addAndTrunc(a: number, b: number): number {
    var ua: BigNumber = new BigNumber(toUnsigned(a).toString(), 10);
    var ub: BigNumber = new BigNumber(toUnsigned(b).toString(), 10);
    var uc: BigNumber = ua.plus(ub);
    var ret: BigNumber = uc.mod(new BigNumber("100000000", 16));
    return ret.toNumber();
};

export function subAndTrunc(a: number, b: number): number {
    a = toUnsigned(a);
    b = toUnsigned(b);

    // perform 2s compliment of b (ones compliment of b + 1)
    b = ~b;

    var ua: BigNumber = new BigNumber(toUnsigned(a).toString(), 10);
    var ub: BigNumber = new BigNumber(toUnsigned(b).toString(), 10);

    ub = ub.plus(new BigNumber("1", 10));
    ub = ub.mod(new BigNumber("100000000", 16));

    // now that ub is the twos compliment of b, just add the two together and truncate, and that'll work.
    var uc: BigNumber = ua.plus(ub);
    var ret: BigNumber = uc.mod(new BigNumber("100000000", 16));
    return ret.toNumber();
};

export function useBodyClass(className: string | string[]) {
    useEffect(
        () => {
            // Set up
            className instanceof Array ? className.map(addBodyClass) : addBodyClass(className);

            // Clean up
            return () => {
                className instanceof Array
                    ? className.map(removeBodyClass)
                    : removeBodyClass(className);
            };
        },
        [className]
    );
}

export function getPropertyByPath(obj: { [key: string | number]: any }, path: string[]): object | null | undefined {
    var curObject: { [key: string | number]: any } = obj;
    for (const prop of path) {
        if (prop in curObject) {
            curObject = curObject[prop];
        }
        else if (typeof curObject[prop] == 'undefined') {
            return undefined;
        }
        else if (curObject[prop] == null) {
            return null;
        }
        else {
            return undefined;
        }
    }
    return curObject;
}

function recursiveWalkIter(key: string, obj: object | any[], path: string[], parent: any, process: (key: any, val: any, path: string[], parent: any) => any, processed: Map<any, boolean>, fullProcessed: Map<any, boolean>, handleUnderscore: boolean): void {
    var path2 : string[] = (key != "" && key != null) ? [...path, key] : [...path];
    if (processed.get(obj)) {
        return;
    }
    if (fullProcessed.get(obj)) {
        return;
    }
    var objIsArrayObject : boolean = obj != null && (typeof obj === 'object' || Array.isArray(obj));
    if (objIsArrayObject) {
        processed.set(obj, true);
        process(key, obj, path, parent);
        var idxs : string[] = [];
        for (var idx in obj) {
            idxs.push(idx);
        }
        idxs = idxs.sort();
        idxs = idxs.filter((value : string, index : number, array : string[]) => (array.indexOf(value) === index));
        for (var idx of idxs) {
            var subObjIsArrayObject: boolean = (obj as any)[idx] != null && (typeof (obj as any)[idx] === 'object' || Array.isArray((obj as any)[idx]));
            if (subObjIsArrayObject) {
                if (handleUnderscore || (!idx.startsWith("_") && !idx.startsWith("#"))) {
                    recursiveWalkIter(idx.toString(), (obj as any)[idx], path2, obj, process, processed, fullProcessed, handleUnderscore);
                }
            }
            else {
                if (handleUnderscore == (idx.startsWith("_") || idx.startsWith("#"))) {
                    recursiveWalkIter(idx.toString(), (obj as any)[idx], path2, obj, process, processed, fullProcessed, handleUnderscore);
                }
            }
        }
        var isFullyProcessed: boolean = true;
        for (var idx of idxs) {
            var subObjIsArrayObject : boolean = (obj as any)[idx] != null && (typeof (obj as any)[idx] === 'object' || Array.isArray((obj as any)[idx]));
            if (!fullProcessed.get((obj as any)[idx]) &&
                (subObjIsArrayObject || (!handleUnderscore && (idx.startsWith("_") || idx.startsWith("#"))))) {
                isFullyProcessed = false;
                break;
            }
        }
        if (isFullyProcessed) {
            fullProcessed.set(obj, true);
        }
    } else {
        //console.log("process:", "path:", path, "key:", key);
        process(key, obj, path, parent);
    }

}

export function recursiveWalk(obj: object | any[] | { [key: string | number]: any }, process: (key: any, val: any, path: string[], parent: any) => any): void {
    console.log("recursiveWalk called.");
    var processed: Map<any, boolean> = new Map<any, boolean>();
    var fullProcessed: Map<any, boolean> = new Map<any, boolean>();
    recursiveWalkIter("", obj, [], null, process, processed, fullProcessed, false);
    processed = new Map<any, boolean>(fullProcessed);
    recursiveWalkIter("", obj, [], null, process, processed, fullProcessed, true);
    console.log("finished!");
}

export function NumberOrString(x: string | undefined | null | number): number | string {
    if (x === undefined) {
        return "undefined"
    }
    else if (x === null) {
        return "null"
    }
    else {
        var number: number = Number(x)
        if (x === "") {
            return "";
        }
        else if (isNaN(number)) {
            return x
        }
        else {
            return number
        }
    }
}
