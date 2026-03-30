var lengthOfLastWord = function (s) {


    if (s.length < 1 || s.length > 10 ** 4) return "Invalid Input"

    let count = 0;
    let i = s.length - 1;

    while ( i >= 0 && s[i] == " ") {
        i--;
    }

    while ( i >= 0 && s[i] != " ") {
        count++;
        i--;
    }

    return count;

};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
