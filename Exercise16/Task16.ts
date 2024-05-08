// TASK #16 (More Guests:)
let Guests:string[] = ["Samiullah", "Shadab", "Yaseen", "Ayan"];
let dinner_invitation:string = "You are invited to dinner.";
//Cannot attend
let Cannot_Attend:string = "Shadab";
//guest replace
let new_guest:string = "Haseeb";
Guests[Guests.indexOf(Cannot_Attend)]=new_guest;
//print statment
console.log("Wellcome all we found a bigger dinner table");
//Add new Guest in the start of the list.
Guests.unshift("Hamza");
//Add new Guest in middle of the list.
let middle_guest:string = "Aqeel";
let middleindex = Guests.length/2;
Guests.splice(middleindex,0,middle_guest);
//Add new Guest in end of the list.
Guests.push("Behroz");
//Send massage.
Guests.map((item)=>console.log(`Dear ${item}, ${dinner_invitation}`));