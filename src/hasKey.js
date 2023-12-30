export default function hasKey(obj, level, ...rest) {
    if (obj === null) return false;
    if (obj === undefined) return false;
    if (rest.length == 0 && Object.prototype.hasOwnProperty.call(obj, level)) {
        if (obj[level] == null) return false;
        return true;
    }
    
    return hasKey(obj[level], ...rest);
};
