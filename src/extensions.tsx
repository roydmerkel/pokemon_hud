/*// Declare the Extension Method
function getpropertybypath(this: Object, path: string[]): Object {
    var curObject = this;
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

// Declare the Extension
declare global {
    interface Object {
        getpropertybypath(path: string[]): Object;
    }
}

// Implement the Extension
Object.prototype.getpropertybypath = getpropertybypath;*/
