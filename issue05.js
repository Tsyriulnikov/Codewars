/*
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.

*/



function remove (string) {
        if (string[string.length-1] === '!')
      return  string.slice(0, -1);
  else return string;
    
    
  }

  или

  function remove (string) {
     return string[string.length-1] === '!' ? 
     string.slice(0, -1) : string;  
  }


  или


  const remove = string => string[string.length-1] === '!' ? string.slice(0, -1) : string;  
 
или
return s.replace(/\!$/,"")


/* Тест
const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
	it("sample tests", function () {
		doTest("Hi!", "Hi");
		doTest("Hi!!!", "Hi!!");
		doTest("!Hi", "!Hi");
		doTest("!Hi!", "!Hi");
		doTest("Hi! Hi!", "Hi! Hi");
		doTest("Hi", "Hi");
	});
});
*/