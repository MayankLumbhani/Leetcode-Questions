var isPalindrome = function (x) {

    if (x < (-2) ** 31 && x > ((2) ** 31) - 1) {
        return;
    }

    let str = x.toString();
    let rev = str.split("").reverse().join("");

    if (str == rev) {
        return true;
    }
    else {
        return false;
    }

};
