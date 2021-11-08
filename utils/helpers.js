const debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

const isValidByRegex = (str, pattern) => {
    if (!pattern || !str) return false;
    return new RegExp(pattern.substring(2, pattern.length -3)).test(str.toLowerCase());
}

export {
    debounce,
    isValidByRegex
}
