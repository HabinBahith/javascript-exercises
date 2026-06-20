const removeFromArray = function(array, ...args) {
    const newarray = [];
    array.forEach(element => {
        if(!args.includes(element)){
            newarray.push(element);
        }
    });
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
