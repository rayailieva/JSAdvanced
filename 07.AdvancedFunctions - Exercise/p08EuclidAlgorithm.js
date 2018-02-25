function getGCD(num1, num2) {
    while (num2 !== 0) {
        let oldNum2 = num2;
        num2 = num1 % num2;
        num1 = oldNum2;
    }

    return num1;
}