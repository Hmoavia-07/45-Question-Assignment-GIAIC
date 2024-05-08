//   TASK #42 (Great Magicians:)
var magicians = [
    "David Copperfield", "Harry Houdini",
    "David Blaine", "Derren Brown", "Lance Burton",
];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
// add function to modifies array
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
