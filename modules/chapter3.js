"use strict";

let countChar = function(text, letter){
    
    let count = 0;
    
    for(let i = 0; i < text.length; i++){
        if (text.charAt(i)===letter){
            count++;
        }
    }
    
    return count;
}

exports.countChar = countChar;