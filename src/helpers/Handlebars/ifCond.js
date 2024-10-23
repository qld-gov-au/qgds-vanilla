export default function (v1, operator, v2, options) {
    var optionsInternal = options;
    if (!optionsInternal || typeof optionsInternal.inverse !== 'function') {
        optionsInternal = {};
        optionsInternal.inverse = function() { return ''; };
    }
    switch (operator) {
        case '==':
            return (v1 == v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '===':
            return (v1 === v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '!=':
            return (v1 != v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '!==':
            return (v1 !== v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '<':
            return (v1 < v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '<=':
            return (v1 <= v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '>':
            return (v1 > v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '>=':
            return (v1 >= v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '&&':
            return (v1 && v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case '||':
            return (v1 || v2) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
        case 'contains':
            if(typeof v1 == 'string' && typeof v2 == 'string') {
                return (v1.toLowerCase().indexOf(v2.toLowerCase()) >= 0) ? optionsInternal.fn(this) : optionsInternal.inverse(this);
            }
            else return optionsInternal.inverse(this);
        default:
            return optionsInternal.inverse(this);
    }
};
