let add = (function () {

    let sum = 0;
    
    return function addAgain(num) {
        sum += num;
        addAgain.toString = () => sum;
        return addAgain;
    }
})();