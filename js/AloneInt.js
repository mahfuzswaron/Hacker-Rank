(function lonelyinteger(a) {
    const sortedArr = a.sort();
    console.log(sortedArr);
    let alone;
    for (let i = 0; i < a.length; i++) {
        const p = sortedArr[i - 1];
        const m = sortedArr[i];
        const n = sortedArr[i + 1];
        if ((m !== n && m !== p)) {
            alone = m
        }
    };
    console.log(alone);

})([1, 5, 5, 4, 4, 2, 1, 7, 2]);