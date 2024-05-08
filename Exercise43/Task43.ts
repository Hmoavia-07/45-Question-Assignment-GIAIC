// TASK #43 (Unchanged Magicians:)
let magicians: string[] = [
  "David Copperfield", "Harry Houdini",
  "David Blaine", "Derren Brown", "Lance Burton",
];

function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}

function make_great(magicians: string[]) {
  let greatMagicians:string[] = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
  });
  return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());
console.log("Orignal magicians:");
show_magicians(magicians);
console.log(`\nGreat magicians:`);
show_magicians(greatMagicians);
