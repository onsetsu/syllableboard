var tests = {};

var test = function(name, fn) {
	tests[name] = fn;
};

var executeAll = function() {
	var testNames = Object.keys(tests),
		testCount = testNames.length,
		passedCount = 0;

	console.log('Running ' + testCount + ' test(s)');
	for (var i = 0; i < testCount; i++) {
		var name = testNames[i];
		var fn = tests[name];
		try {
			console.log('Running ' + name);
			fn();
			console.log('Passed ' + name);
			passedCount++;
		} catch (e) {
			console.log('Failed ' + name + ': ' + e);
		}
	}
	console.log(passedCount + ' of ' + testCount + ' tests passed');
};

assert = function(bool, msg) {
	if (!bool) {
		throw msg;
	}
};

