
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let xor = start ^ goal;
    let numberOfFlips = 0;
    while (xor > 0) {
        ++numberOfFlips;
        xor &= (xor - 1);
    }
    return numberOfFlips;
};
