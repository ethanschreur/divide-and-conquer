function findFloor(arr, num) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		if ((arr[middleIdx] <= num && arr[middleIdx + 1] > num) || arr[middleIdx] === num) {
			return arr[middleIdx];
		} else if (arr[middleIdx] > num && leftIdx === 0 && rightIdx === 0) {
			return -1;
		} else if (arr[middleIdx] <= num && leftIdx === arr.length - 2 && rightIdx === arr.length - 1) {
			if (arr[middleIdx + 1] > num) {
				return arr[middleIdx];
			} else {
				return arr[middleIdx + 1];
			}
		} else if (arr[middleIdx] < num) {
			leftIdx = middleIdx;
		} else if (arr[middleIdx] > num) {
			rightIdx = middleIdx;
		}
	}
}

module.exports = findFloor;
