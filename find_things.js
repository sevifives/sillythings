function totesFind(inp, total) {
	var remaining = inp.slice(0), // clone
		i,l, head, un, ret=[],
		// Track unique first matches based on the index of the first number
		// paired with the second number
		uniques = {}; // "indexOfFirst,firstNumber,secondNumber"

	for (i=0,l=inp.length;i<l;i+=1) {
		head = remaining.shift();

		remaining.forEach(function (x) {
			un = [i,head,x].join(',');

			if ((total === (head+x)) && !uniques[un]) {
				uniques[un] = true;
				ret.push([head,x]);
			}
		});
	}

	return ret;
}
