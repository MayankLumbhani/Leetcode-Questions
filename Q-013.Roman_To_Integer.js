var romanToInt = function(s) {

    let symVal = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}

if(s.length < 1 || s.length > 15) return "Innvalid Input";
    
    let value = 0;
    
    for(let i = 0; i < s.length; i++){
        
        let current = s[i];
        let next = s[i+1];
        
        if(symVal[current] == undefined) return "Invalid Input";
        
        if(symVal[current] < symVal[next]){
            value = value + symVal[next] - symVal[current];
            i = i+1;
        }
        else{
            value = value + symVal[current];
        }
        
    }
    
    return value;
    
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));