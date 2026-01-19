

export const delay = (time) => {
    return new Promise((resolove, reject) => {
        setTimeout(() => {
            resolove();
        }, time * 1000);
    })
}