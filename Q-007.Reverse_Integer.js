var reverse = function(x) {

    let temp = x;
    let rev = 0;
    let dig;
    while( temp != 0){

        dig = temp%10;
        rev = rev*10 + dig;
        temp = Math.trunc(temp/10);
        
    }

    if(rev <= (-2)**31 || rev >= (2**31)-1){
        return 0;
    }

    return rev;
    
};

