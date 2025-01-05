import { useEffect } from 'react';

const addBodyClass = className => document.body.classList.add(className);
const removeBodyClass = className => document.body.classList.remove(className);

export function useBodyClass(className) {
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

export function getPropertyByPath(obj: object, path: string[]): object {
    var curObject = obj;
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

function recursiveWalkIter(key: string, obj: object | any[], path: string[], parent: any, process: (key: any, val: any, path: string[], parent: any) => any, processed: Map<any, bool>, fullProcessed: Map<any, bool>, handleUnderscore: boolean): void {
    var path2 = (key != "" && key != null) ? [...path, key] : [...path];
    if (processed.get(obj)) {
        return;
    }
    if (fullProcessed.get(obj)) {
        return;
    }
    var objIsArrayObject = obj != null && (typeof obj === 'object' || Array.isArray(obj));
    if (objIsArrayObject) {
        processed.set(obj, true);
        process(key, obj, path, parent);
        var idxs = [];
        for (var idx in obj) {
            idxs.push(idx);
        }
        idxs = idxs.sort();
        idxs = idxs.filter((value, index, array) => (array.indexOf(value) === index));
        for (var idx of idxs) {
            var subObjIsArrayObject = obj[idx] != null && (typeof obj[idx] === 'object' || Array.isArray(obj[idx]));
            if (subObjIsArrayObject) {
                if (handleUnderscore || (!idx.startsWith("_") && !idx.startsWith("#"))) {
                    recursiveWalkIter(idx.toString(), obj[idx], path2, obj, process, processed, fullProcessed, handleUnderscore);
                }
            }
            else {
                if (handleUnderscore == (idx.startsWith("_") || idx.startsWith("#"))) {
                    recursiveWalkIter(idx.toString(), obj[idx], path2, obj, process, processed, fullProcessed, handleUnderscore);
                }
            }
        }
        var isFullyProcessed = true;
        for (var idx of idxs) {
            var subObjIsArrayObject = obj[idx] != null && (typeof obj[idx] === 'object' || Array.isArray(obj[idx]));
            if (!fullProcessed.get(obj[idx]) &&
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

export function recursiveWalk(obj: object | any[], process: (key: any, val: any, path: string[], parent: any) => any): void {
    console.log("recursiveWalk called.");
    var processed = new Map<any, bool>();
    var fullProcessed = new Map<any, bool>();
    recursiveWalkIter("", obj, [], null, process, processed, fullProcessed, false);
    processed = new Map<any, bool>(fullProcessed);
    recursiveWalkIter("", obj, [], null, process, processed, fullProcessed, true);
    console.log("finished!");
}
