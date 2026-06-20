const repeatString = function(string,num) {
    if(num<0){
        return 'ERROR'
    }
    let string3 = "";
    for(let i = 0; i < num; i++){
        string3 += string;
    }
    return string3;
};

// Do not edit below this line
module.exports = repeatString;
