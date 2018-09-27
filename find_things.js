/*
	Took a bit to remember what this did...

	finds unique sets of numbers from an array that sum to the total but will
	exclude multiple matches using the first number combined with a second number

	ex:
	totesFind([2,1,1,2,1],3)
	[[0,2,1],[1,1,2],[3,2,1]]

	returns a collection of tuples (index)
*/
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
				ret.push([i,head,x]);
			}
		});
	}

	return ret;
}

console.log(totesFind([1,3,5,7,3,2,6,7,89,5,4,3,2,5,6,7,4,2,3,4,6,7],6));
