// TASK #44 (Sandwiches:)
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with these items: ".concat(items.join(", "), "."));
}
make_sandwich("lettuce", "tomato", "chilli");
make_sandwich("chilli", "chicken", "chunks");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
