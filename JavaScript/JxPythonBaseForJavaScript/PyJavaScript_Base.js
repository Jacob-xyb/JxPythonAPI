String.prototype.py_startswith = function (prefix, start = 0, end = this.length) {
    return this.slice(start, end).startsWith(prefix);
}

String.prototype.py_endswith = function (suffix, start = 0, end = this.length) {
    return this.slice(start, end).endsWith(suffix);
}

String.prototype.py_replace = function (old_s, new_s, count = Infinity) {
    if (count === Infinity) {
        return this.replaceAll(old_s, new_s);
    } else {
        let res = this.slice();
        while (count-- > 0 && res.includes(old_s)) {
            res = res.replace(old_s, new_s);
        }
        return res;
    }
}