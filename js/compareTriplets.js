(function compareTriplets(a, b) {
    let ap = 0;
    let bp = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            ap++;
        }
        else if (a[i] < b[i]) {
            bp++;
        }
    }
    console.log([ap, bp]);
    return [ap, bp];
})([2, 3, 1], [2, 1, 4]);