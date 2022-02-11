/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/
const remove=string => string.split('!').join('') + '!';  
  

/*Test 
const strictEqual = require("chai").assert.strictEqual;

function doTest (input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
	it("sample tests", function () {
		doTest("Hi!", "Hi!");
		doTest("Hi!!!", "Hi!");
		doTest("!Hi", "Hi!");
		doTest("!Hi!", "Hi!");
		doTest("Hi! Hi!", "Hi Hi!");
		doTest("Hi", "Hi!");
	});
});
*/
