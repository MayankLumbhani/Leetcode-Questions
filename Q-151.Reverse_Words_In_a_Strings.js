var reverseWords = function(s) {

    let arr = (((s.split(" ")).reverse()).filter(item => item != "")).join(' ');

    return arr;
    
};