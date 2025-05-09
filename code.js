async function mergeSortIterativeParallel(arr) {
    const n = arr.length;

    for (let size = 1; size < n; size *= 2) {
        const tasks = [];

        for (let left = 0; left < n - 1; left += 2 * size) {
            const mid = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);

            // Push a merge task as a promise
            tasks.push(merge(arr, left, mid, right));
        }

        // Wait for all merges at this level to complete in parallel
        await Promise.all(tasks);
    }

    return arr;
}

async function merge(arr, left, mid, end) {
    let leftPointer = left;
    let rightPointer = mid + 1;

    while (leftPointer <= mid && rightPointer <= end) {
        if (arr[leftPointer] <= arr[rightPointer]) {
            leftPointer++;
        } else {
            const value = arr[rightPointer];
            let index = rightPointer;

            while (index !== leftPointer) {
                arr[index] = arr[index - 1];
                index--;
            }

            arr[leftPointer] = value;

            leftPointer++;
            mid++;
            rightPointer++;
        }
    }
}
