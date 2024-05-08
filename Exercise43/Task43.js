// TASK #43 (Unchanged Magicians:)
var magicians = [
    "David Copperfield", "Harry Houdini",
    "David Blaine", "Derren Brown", "Lance Burton",
];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log("Orignal magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(greatMagicians);
