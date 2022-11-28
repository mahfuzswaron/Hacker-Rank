function findMedian(arr) {
    const arrLength = arr.length;
    const medianIndex = ((arrLength - 1) / 2);
    console.log(arr.sort());
    console.log(arr.sort()[medianIndex]);

}

findMedian([1, 2, 45, 5, 4, 23, 23, 4, 5, 3, 2]);