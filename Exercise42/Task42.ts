//   TASK #42 (Great Magicians:)

let magicians: string[] = [
    "David Copperfield", "Harry Houdini",
 "David Blaine", "Derren Brown", "Lance Burton",
];
function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}
show_magicians(magicians);
// add function to modifies array
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] +" "+"The Great";
  }
}
make_great(magicians);
show_magicians(magicians);
