var tests = {};

var test = function(name, fn) {
	tests[name] = fn;
};

var executeAll = function() {
	var testNames = Object.keys(tests),
		testCount = testNames.length;
	
	console.log("Running " + testCount + " test(s)");
	for(var i = 0; i < testCount; i++) {
		var name = testNames[i];
		var fn = tests[name];
		try {
			console.log("Running " + name);
			fn();
			console.log("Passed " + name);
		} catch (e) {
			console.log("Failed " + name + ": " + e);
		}
	}
};

assert = function(bool, msg) {
	if(!bool) {
		throw msg;
	}
};

