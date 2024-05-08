//   TASK #37 (Large Shirts:)
// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("\nCreating a \"".concat(size, "\" size shirt with message \"").concat(printMessage, "\" print on it."));
}
// calling function with by-default values:
make_shirt();
// calling function with new size & by-default message:
make_shirt("Medium");
// calling function with new values:
make_shirt("Small", "Coding Is Life");
