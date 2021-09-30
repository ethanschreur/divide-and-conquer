function countZeroes(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 1) {
			return arr.length - middleIdx;
		} else if (arr[middleIdx] === 0 && leftIdx === 0 && rightIdx === 0) {
			return arr.length;
		} else if (arr[middleIdx] === 1 && leftIdx === arr.length - 2 && rightIdx === arr.length - 1) {
			if (arr[middleIdx + 1] === 1) {
				return 0;
			} else {
				return 1;
			}
		} else if (arr[middleIdx] === 1) {
			leftIdx = middleIdx;
		} else if (arr[middleIdx] === 0) {
			rightIdx = middleIdx;
		}
	}
}

module.exports = countZeroes;
