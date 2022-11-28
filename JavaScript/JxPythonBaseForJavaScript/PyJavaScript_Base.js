class PyString {
    constructor(py_str = "") {
        this.data = py_str
    }

    startswith(prefix) {
        return Boolean(this.data.indexOf(prefix) === 0);
    }
}