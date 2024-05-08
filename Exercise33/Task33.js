// TASK #33 (Ordinal Numbers:)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (num) {
    var suffix = "th";
    if (num === 1) {
        suffix = "st";
    }
    else if (num === 2) {
        suffix = "nd";
    }
    else if (num === 3) {
        suffix = "rd";
    }
    console.log("".concat(num).concat(suffix));
});
