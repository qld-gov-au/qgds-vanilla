
export function flattenJson(obj, prefix = '', res = {}) {
    for (const key in obj) {
        const newPrefix = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenJson(obj[key], newPrefix, res);
        } else {
            res[newPrefix] = obj[key];
        }
    }
    return res;
}

export function unflattenJson(obj) {
    const result = {};
    for (const flatKey in obj) {
        const keys = flatKey.split('.'); // Split the key into its path components
        keys.reduce((acc, key, index) => {
            // If this is the last key in the path, set the value
            if (index === keys.length - 1) {
                acc[key] = obj[flatKey];
            } else {
                // If the key doesn't exist, create an object for it
                if (!acc[key]) acc[key] = {};
            }
            return acc[key];
        }, result);
    }
    return result;
}
