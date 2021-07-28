const debounce = (func, inter) => {
    let timer = nulll;

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(func, inter);
    }
}

export default debounce;