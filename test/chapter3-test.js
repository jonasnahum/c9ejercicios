"use strict";
const m = require("./../modules/chapter3.js");

exports.countCharTest=function(test){
    test.expect(1);
    let expected = 5;
    let actual = m.countChar("elefante","e");
    test.equal(actual,expected);
    test.done();
    
}